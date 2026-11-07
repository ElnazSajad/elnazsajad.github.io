import type { Project } from "@/content/types";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
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
          <div className="grid items-start gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="label-mono text-signal">01 / Nutopia</p>
              <h4 id="nutopia-characters" className="mt-4 font-display text-4xl font-semibold md:text-5xl">
                Character Design
              </h4>
              <p className="mt-6 font-serif text-2xl leading-snug">“{p.intro}”</p>
            </Reveal>
            <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
              <Media slot={slot("char_top")} tone="dark" />
            </Reveal>
          </div>

          <div className="mt-8 grid items-start gap-5 md:grid-cols-12 md:gap-6">
            {[
              { id: "char_fish", cls: "md:col-span-3" },
              { id: "char_female", cls: "md:col-span-4" },
              { id: "char_four", cls: "md:col-span-5" },
              { id: "char_seven", cls: "md:col-span-5" },
              { id: "char_children", cls: "md:col-span-4" },
              { id: "char_colorful", cls: "md:col-span-3" },
            ].map((item, i) => (
              <Reveal key={item.id} className={item.cls} delay={i * 60}>
                <Media slot={slot(item.id)} tone="dark" />
              </Reveal>
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
