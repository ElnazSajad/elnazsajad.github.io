import { useEffect, useRef, useState } from "react";
import type { MediaSlot } from "@/content/types";
import { useInView, usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useZoom } from "./Lightbox";

type Tone = "light" | "dark";

/**
 * Renders a media slot as an image, a video or — while no file is set —
 * a hatched placeholder with the slot's label.
 */
export function Media({
  slot,
  className,
  tone = "light",
}: {
  slot: MediaSlot | undefined;
  className?: string;
  tone?: Tone;
}) {
  if (!slot) return null;
  if (slot.video) return <VideoMedia slot={slot} className={className} tone={tone} />;
  if (slot.src) return <ImageMedia slot={slot} className={className} />;
  return <Placeholder slot={slot} className={className} tone={tone} />;
}

function ImageMedia({ slot, className }: { slot: MediaSlot; className?: string }) {
  const zoom = useZoom(slot);
  const [loaded, setLoaded] = useState(false);

  const img = (
    <img
      src={slot.src}
      alt={slot.alt ?? slot.label}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      ref={(el) => {
        // Cached images can finish before React attaches onLoad.
        if (el?.complete) setLoaded(true);
      }}
      style={{ objectPosition: slot.focus }}
      className={cn(
        "h-full w-full transition-[opacity,scale] duration-700 ease-out",
        slot.fit === "contain" ? "object-contain" : "object-cover",
        loaded ? "opacity-100" : "opacity-0",
        zoom && "group-hover:scale-[1.015]",
      )}
    />
  );

  return (
    <figure
      className={cn("group relative overflow-hidden bg-muted", className)}
      style={{ aspectRatio: slot.aspect ?? "4/3" }}
    >
      {zoom ? (
        <button
          type="button"
          onClick={zoom}
          className="block h-full w-full cursor-zoom-in"
          aria-label={`Enlarge: ${slot.alt ?? slot.label}`}
        >
          {img}
        </button>
      ) : (
        img
      )}
    </figure>
  );
}

function VideoMedia({ slot, className, tone }: { slot: MediaSlot; className?: string; tone: Tone }) {
  // Play only while on screen; pause again when scrolled away.
  const { ref, inView } = useInView<HTMLElement>({ rootMargin: "0px" });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const name = slot.alt ?? slot.label;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && (!reducedMotion || soundOn)) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, reducedMotion, soundOn]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !soundOn;
    video.muted = !next;
    setSoundOn(next);
    if (next) video.play().catch(() => undefined);
  };

  const labelAlwaysVisible = soundOn || reducedMotion || !inView;

  return (
    <figure
      ref={ref}
      className={cn("group relative overflow-hidden bg-muted", className)}
      style={{ aspectRatio: slot.aspect ?? "16/9" }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={slot.video}
        poster={slot.poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={name}
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={soundOn}
        aria-label={soundOn ? `Mute ${name}` : `Play ${name} with sound`}
        className="absolute inset-0 h-full w-full cursor-pointer"
      >
        <span
          className={cn(
            "absolute right-2.5 bottom-2.5 border px-2 py-1 label-mono text-[0.6rem] transition-opacity duration-300",
            soundOn
              ? "border-transparent bg-signal text-ink opacity-100"
              : cn(
                  "bg-paper/90 text-foreground",
                  tone === "dark" ? "border-paper/25" : "border-border",
                  // Touch screens have no hover, so keep the hint visible there.
                  labelAlwaysVisible
                    ? "opacity-100"
                    : "opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-within:opacity-100",
                ),
          )}
        >
          {soundOn ? "Sound on · click to mute" : "Click for sound"}
        </span>
      </button>
    </figure>
  );
}

function Placeholder({ slot, className, tone }: { slot: MediaSlot; className?: string; tone: Tone }) {
  const kind = slot.type === "video" ? "video" : "media";

  return (
    <figure
      className={cn(
        "group relative overflow-hidden border border-dashed placeholder-hatch transition-colors duration-500",
        tone === "dark" ? "border-paper/30" : "border-ink/25 hover:border-signal",
        className,
      )}
      style={{ aspectRatio: slot.aspect ?? "4/3" }}
      role="img"
      aria-label={`${slot.label} — ${kind} to be added`}
    >
      <span
        className={cn(
          "absolute top-2.5 left-2.5 label-mono",
          tone === "dark" ? "text-paper/80" : "text-foreground/70",
        )}
      >
        {slot.label}
      </span>
      <span
        className={cn(
          "absolute right-2.5 bottom-2.5 label-mono text-[0.6rem]",
          tone === "dark" ? "text-paper/50" : "text-muted-foreground",
        )}
      >
        + {kind} to be added
      </span>
    </figure>
  );
}

/** Small mono caption under a piece of media. */
export function Caption({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-2 label-mono text-muted-foreground", className)}>{children}</p>;
}
