# Elnaz Sajad — Portfolio

A single-page portfolio for Elnaz Sajad, creative designer. Built with **Vite + React 19 + TypeScript + Tailwind CSS v4**.
It was rebuilt from the original Lovable project, so it no longer depends on Lovable.

## Getting started

```bash
npm install      # first time only
npm run dev      # http://localhost:5173 — reloads on every save
```

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Local dev server with hot reload                        |
| `npm run build`     | Type-checks, then builds the static site into `dist/`   |
| `npm run preview`   | Serves the built `dist/` locally to check before deploy |
| `npm run typecheck` | TypeScript check only                                   |
| `npm run media`     | Optimises new files in `source-media/` → `public/media/` |

## Where things live

```
src/
  content/
    projects.ts     ← all case-study text + media, in page order
    profile.ts      ← name, email, socials, skills, tools, ticker words
    types.ts        ← the shape of a project / media slot (documented)
  components/
    site/           ← Header, Hero, Work (index + sections), About, Contact
    project/
      layouts/      ← one art-directed layout per case study
      parts.tsx     ← shared pieces: title, meta list, process list, chapter
      Scroller.tsx  ← horizontal frame scroller (stain guide)
    Media.tsx       ← image / video / placeholder renderer
    Lightbox.tsx    ← click-to-enlarge viewer
    Reveal.tsx      ← fade-up-on-scroll wrapper
  styles.css        ← colour tokens, fonts, custom utilities, animations
public/
  media/            ← optimised, web-ready files (served as /media/…)
source-media/       ← full-quality originals (not served)
scripts/
  optimize-media.sh
```

## Common edits

**Change text.** Most copy is in `src/content/projects.ts` and `src/content/profile.ts`.
Copy that belongs to one layout, such as the Cleany chapter titles, lives in that layout's file
in `src/components/project/layouts/`.

**Add a social link.** Fill in `href` in `src/content/profile.ts`. The "link to be added"
placeholder becomes a live link.

**Add media to an empty slot.** Several projects still show hatched "+ media to be added" boxes.

1. Put the original file in `source-media/<project>/`, e.g. `source-media/nutopia/fish-character.png`
2. Run `npm run media` (needs `brew install webp ffmpeg`). It writes `public/media/nutopia/fish-character.webp`
3. In `projects.ts`, find the slot (e.g. `id: "char_fish"`) and add
   `src: "/media/nutopia/fish-character.webp"` and an `alt` description.
   For a video, set `video` (and ideally `poster`) instead of `src`.

If your image isn't the same shape as the placeholder, set `aspect` to the image's own ratio, e.g. `"1200/900"`.

**Pissfool slots.** Each one is replaced on its own in `projects.ts` → `id: "pissfool"`:

| Part | Slot id | Type |
| --- | --- | --- |
| 01 Social media growth & reach | `growth_1`, `growth_2` | image (screenshot) |
| 02 The beginning: green character | `green_1`, `green_2` | video |
| 03 Creative exploration | `cast_all` | image (all characters) |
| 03 Creative exploration | `cast_video_1`, `cast_video_2` | video |
| 04 Signature: traditional | `signature_manual_1`, `signature_manual_2` | video |
| 04 Signature: AI-assisted | `signature_ai_1`, `signature_ai_2` | video |

For a video, set `video: "/media/pissfool/clip.mp4"` and, ideally, `poster: "/media/pissfool/clip-poster.webp"`
(a still frame shown before playback). Videos play muted in place when scrolled into view, and a click turns
the sound on. If a clip isn't vertical, change its `aspect` (e.g. `"1/1"` or `"16/9"`).
The Instagram, TikTok and YouTube links are in the same project's `links` list: add `href` (and an optional `handle`).

**Change colours or fonts.** Edit the variables at the top of `src/styles.css`.

## Deploying

The site is hosted on **GitHub Pages** at **https://elnazsajad.github.io**.

Deploys are automatic: every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/`. A deploy takes about a minute; you can follow it in the repository's **Actions** tab.

```bash
git add -A
git commit -m "Describe the change"
git push
```

`npm run build` also produces a fully static `dist/` folder that works on any other static host
(Netlify, Vercel, Cloudflare Pages…).

## Changes from the Lovable version

The design and content are unchanged. The rebuild adds:

- **Lightbox:** click any image to view it full-screen. Arrow keys or swipe step through the project, Esc closes.
- **Stain-guide scroller:** previous/next buttons for mouse users, and the frames snap into place.
- **Active nav link:** the header highlights the section you're in, and its border appears once you scroll.
- **Videos** pause when scrolled off-screen (they kept playing before). On touch screens the
  "click for sound" hint stays visible.
- **Media size cut from about 44 MB to 15 MB:** images are now WebP, and the two 1080p videos are re-encoded to 720p with fast-start.
- **Images fade in** when loaded instead of popping in. The ticker pauses on hover.
- **Contact:** a "Copy address" button next to the email link.
- **Simpler stack:** plain Vite instead of TanStack Start, and no unused UI-kit dependencies.
