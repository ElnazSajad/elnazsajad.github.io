import type { CSSProperties, ReactNode } from "react";
import type { MediaSlot, Project } from "@/content/types";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Container, ProcessList, ProjectHeader, ProjectMeta } from "../parts";

/** Nutopia — dark, cinematic section for character and background design. */
export function StorybookLayout({ p }: { p: Project }) {
  const slot = (id: string) => p.media.find((m) => m.id === id);

  return (
    <div className="bg-ink py-24 text-paper md:py-36">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:order-2 md:col-span-4 md:col-start-9 md:pt-10">
            <ProjectMeta p={p} dark />
          </Reveal>
          <Reveal className="md:order-1 md:col-span-8">
            <ProjectHeader p={p} dark />
          </Reveal>
        </div>

        {/* 01 — characters */}
        <section aria-labelledby="nutopia-characters" className="mt-16">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-5 md:pb-10">
              <p className="label-mono text-signal">01 / Nutopia</p>
              <h4 id="nutopia-characters" className="mt-4 font-display text-4xl font-semibold md:text-5xl">
                Character Design
              </h4>
              <p className="mt-6 font-serif text-2xl leading-snug">“{p.intro}”</p>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <CharacterCard slot={slot("char_top")} />
            </Reveal>
          </div>

          {/* Justified rows: every image in a row shares one height and the row fills the width. */}
          <div className="mt-6 space-y-6 md:mt-8 md:space-y-8">
            {[
              ["char_fish", "char_female", "char_four"],
              ["char_seven"],
              ["char_children", "char_colorful"],
            ].map((row, r) => (
              <JustifiedRow key={r}>
                {row.map((id, i) => (
                  <JustifiedItem key={id} slot={slot(id)} delay={i * 80} />
                ))}
              </JustifiedRow>
            ))}
          </div>
        </section>

        {/* 02 — backgrounds */}
        <section aria-labelledby="nutopia-backgrounds" className="mt-24 border-t border-paper/20 pt-8 md:mt-32">
          <Reveal>
            <p className="label-mono text-signal">02 / Nutopia</p>
            <h4 id="nutopia-backgrounds" className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              Background Design
            </h4>
          </Reveal>

          <div className="mt-12" aria-label="Three views of the same room">
            <p className="label-mono text-paper/60">One room · three views</p>
            <div className="mt-4 grid gap-5 md:grid-cols-3 md:gap-6">
              {[1, 2, 3].map((n) => (
                <Reveal key={n} delay={n * 60}>
                  <Media slot={slot(`room_${n}`)} tone="dark" />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12" aria-label="Four different backgrounds">
            <p className="label-mono text-paper/60">Backgrounds</p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 md:gap-6">
              {[1, 2, 3, 4].map((n) => (
                <Reveal key={n} delay={n * 60}>
                  <Media slot={slot(`background_${n}`)} tone="dark" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal className="mt-16 md:ml-auto md:w-1/2">
          <ProcessList p={p} dark />
        </Reveal>
      </Container>
    </div>
  );
}

/** "732/1104" → 0.663 */
const ratio = (aspect = "1/1") => {
  const [w, h] = aspect.split("/").map(Number);
  return w && h ? w / h : 1;
};

/** Drawing on a white sheet, caption underneath. */
function CharacterCard({ slot }: { slot: MediaSlot | undefined }) {
  if (!slot) return null;
  return (
    <figure>
      <Media slot={slot} tone="dark" className="bg-white" />
      <figcaption className="mt-3 label-mono text-paper/60">{slot.caption ?? slot.label}</figcaption>
    </figure>
  );
}

function JustifiedRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-5 md:flex-nowrap md:gap-8">{children}</div>;
}

/**
 * On desktop each item grows in proportion to its aspect ratio, so all
 * images in a row end up the same height. On phones, portrait drawings
 * pair up two per row and landscape ones take the full width.
 */
function JustifiedItem({ slot, delay }: { slot: MediaSlot | undefined; delay: number }) {
  if (!slot) return null;
  const r = ratio(slot.aspect);
  return (
    <div
      className={cn(
        "min-w-0",
        r < 1 ? "[flex:var(--r)_1_0%]" : "basis-full md:[flex:var(--r)_1_0%]",
      )}
      style={{ "--r": r } as CSSProperties}
    >
      <Reveal delay={delay}>
        <CharacterCard slot={slot} />
      </Reveal>
    </div>
  );
}
