#!/usr/bin/env bash
# Optimise original media for the web.
#
#   source-media/<project>/<file>   →   public/media/<project>/<file>.webp | .mp4
#
# Images (png / jpg / webp) become WebP, capped at 2000px wide.
# Videos (mp4 / mov) become H.264 MP4, capped at 720px wide, with faststart
# so they begin playing before fully downloaded. Posters are converted like
# any other image.
#
# Requires: cwebp and ffmpeg   (brew install webp ffmpeg)
# Usage:    npm run media            # only processes new / changed files
#           npm run media -- --force # re-encode everything

set -euo pipefail
cd "$(dirname "$0")/.."

SRC=source-media
OUT=public/media
FORCE=${1:-}

command -v cwebp >/dev/null || { echo "cwebp not found — brew install webp"; exit 1; }
command -v ffmpeg >/dev/null || { echo "ffmpeg not found — brew install ffmpeg"; exit 1; }

stale() { [[ "$FORCE" == "--force" || ! -f "$2" || "$1" -nt "$2" ]]; }
size() { stat -f%z "$1" 2>/dev/null || stat -c%s "$1"; }

find "$SRC" -type f ! -name '.*' | sort | while read -r in; do
  rel=${in#"$SRC"/}
  dir=$OUT/$(dirname "$rel")
  base=$(basename "${rel%.*}")
  ext=$(echo "${in##*.}" | tr '[:upper:]' '[:lower:]')
  mkdir -p "$dir"

  case "$ext" in
    png|jpg|jpeg|webp)
      out=$dir/$base.webp
      stale "$in" "$out" || continue
      width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$in" </dev/null)
      resize=()
      (( width > 2000 )) && resize=(-resize 2000 0)
      cwebp -quiet -q 82 -m 6 -metadata none ${resize[@]+"${resize[@]}"} "$in" -o "$out"
      # Never make an already-optimised WebP bigger.
      if [[ "$ext" == "webp" ]] && (( $(size "$out") >= $(size "$in") )); then cp "$in" "$out"; fi
      ;;
    mp4|mov|m4v)
      out=$dir/$base.mp4
      stale "$in" "$out" || continue
      ffmpeg -nostdin -loglevel error -y -i "$in" \
        -vf "scale='min(720,iw)':-2" -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p \
        -c:a aac -b:a 128k -movflags +faststart "$out"
      # Already small? Keep the original stream, just move the index up front.
      if (( $(size "$out") >= $(size "$in") )); then
        ffmpeg -nostdin -loglevel error -y -i "$in" -c copy -movflags +faststart "$out"
      fi
      ;;
    *) echo "skip  $rel"; continue ;;
  esac
  printf "%-8s → %-8s %s\n" "$(( $(size "$in") / 1024 ))K" "$(( $(size "$out") / 1024 ))K" "$rel"
done
