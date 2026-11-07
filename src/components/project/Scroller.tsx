import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Horizontal snap-scroller with previous / next buttons.
 * Touch and trackpad users can still swipe; the buttons help mouse users.
 */
export function Scroller({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    const item = el?.firstElementChild as HTMLElement | null;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className={className}>
      <ol
        ref={ref}
        tabIndex={0}
        aria-label={`${label}, scroll horizontally`}
        className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {children}
      </ol>
      <div className="mt-5 flex items-center justify-end gap-2">
        {([-1, 1] as const).map((dir) => {
          const disabled = dir === -1 ? edges.start : edges.end;
          return (
            <button
              key={dir}
              type="button"
              onClick={() => scrollBy(dir)}
              disabled={disabled}
              aria-label={dir === 1 ? "Next frames" : "Previous frames"}
              className={cn(
                "flex h-10 w-10 items-center justify-center border border-ink/30 font-mono transition-colors",
                disabled ? "opacity-30" : "hover:border-ink hover:bg-ink hover:text-paper",
              )}
            >
              {dir === 1 ? "→" : "←"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
