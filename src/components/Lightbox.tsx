import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { MediaSlot } from "@/content/types";
import { asset, pad2 } from "@/lib/utils";

/* ------------------------------------------------------------------ *
 * Gallery context — the set of images a lightbox can step through.
 * Each project section provides its own, so arrows stay within a project.
 * ------------------------------------------------------------------ */
const GalleryContext = createContext<MediaSlot[]>([]);

export function Gallery({ media, children }: { media: MediaSlot[]; children: ReactNode }) {
  const images = useMemo(() => media.filter((m) => m.src && !m.video), [media]);
  return <GalleryContext.Provider value={images}>{children}</GalleryContext.Provider>;
}

/* ------------------------------------------------------------------ *
 * Lightbox
 * ------------------------------------------------------------------ */
type LightboxApi = { open: (images: MediaSlot[], index: number) => void };
const LightboxContext = createContext<LightboxApi | null>(null);

/** Returns a click handler that opens `slot` in the lightbox, or null if it isn't zoomable. */
export function useZoom(slot: MediaSlot) {
  const api = useContext(LightboxContext);
  const gallery = useContext(GalleryContext);
  if (!api || !slot.src || slot.video) return null;

  const index = gallery.findIndex((m) => m.id === slot.id);
  return () => (index === -1 ? api.open([slot], 0) : api.open(gallery, index));
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ images: MediaSlot[]; index: number } | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number | null>(null);

  const open = useCallback((images: MediaSlot[], index: number) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setState({ images, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setState((s) => (s ? { ...s, index: (s.index + dir + s.images.length) % s.images.length } : s)),
    [],
  );

  // Open / close the native dialog (gives us focus trapping and Esc for free).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (state && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!state && dialog.open) {
      dialog.close();
    }
  }, [state]);

  const onDialogClose = () => {
    document.documentElement.style.overflow = "";
    setState(null);
    returnFocus.current?.focus({ preventScroll: true });
  };

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, step]);

  // Preload neighbours so stepping feels instant.
  useEffect(() => {
    if (!state || state.images.length < 2) return;
    const { images, index } = state;
    for (const i of [index + 1, index - 1]) {
      const src = images[(i + images.length) % images.length]?.src;
      if (src) new Image().src = asset(src)!;
    }
  }, [state]);

  const api = useMemo(() => ({ open }), [open]);
  const current = state?.images[state.index];
  const multiple = (state?.images.length ?? 0) > 1;

  return (
    <LightboxContext.Provider value={api}>
      {children}

      <dialog
        ref={dialogRef}
        className="lightbox text-paper"
        aria-label={current ? `${current.alt ?? current.label} — enlarged` : "Image viewer"}
        onClose={onDialogClose}
        // Clicking the backdrop (the dialog element itself) closes.
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchStart.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          const start = touchStart.current;
          const end = e.changedTouches[0]?.clientX;
          touchStart.current = null;
          if (start == null || end == null || !multiple) return;
          if (Math.abs(end - start) > 50) step(end < start ? 1 : -1);
        }}
      >
        {state && current && (
          <div
            className="flex h-full flex-col"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-10">
              <span className="label-mono text-paper/60" aria-live="polite">
                {multiple ? `${pad2(state.index + 1)} / ${pad2(state.images.length)}` : ""}
              </span>
              <button
                type="button"
                onClick={close}
                className="label-mono link-underline py-1 hover:text-signal"
                autoFocus
              >
                Close ✕
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-5 md:px-24"
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <img
                key={current.src}
                src={asset(current.src)}
                alt={current.alt ?? current.label}
                className="max-h-full max-w-full object-contain shadow-2xl"
              />

              {multiple && (
                <>
                  <StepButton dir={-1} onClick={() => step(-1)} />
                  <StepButton dir={1} onClick={() => step(1)} />
                </>
              )}
            </div>

            <p className="min-h-[3.25rem] px-5 py-4 text-center label-mono text-paper/70 md:px-10">
              {current.caption ?? current.label}
            </p>
          </div>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}

function StepButton({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 1 ? "Next image" : "Previous image"}
      className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-paper/25 bg-ink/60 font-mono text-lg transition-colors hover:border-signal hover:text-signal md:flex ${
        dir === 1 ? "right-6" : "left-6"
      }`}
    >
      {dir === 1 ? "→" : "←"}
    </button>
  );
}
