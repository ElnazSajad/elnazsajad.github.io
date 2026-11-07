import type { Project } from "@/content/types";
import { Caption, Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { Container, ProcessList, ProjectHeader } from "../parts";

/** Pissfool — playful, tilted collage on a mint background. */
export function PlaygroundLayout({ p }: { p: Project }) {
  const slot = (id: string) => p.media.find((m) => m.id === id);

  return (
    <div className="relative overflow-hidden bg-blush/60 py-24 md:py-36">
      {/* Slowly rotating dashed ring */}
      <div
        aria-hidden
        className="spin-slow pointer-events-none absolute top-20 -right-24 h-72 w-72 rounded-full border-[18px] border-dashed border-signal/80"
      />

      <Container className="relative">
        <Reveal>
          <ProjectHeader p={p} />
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.categories.map((c) => (
            <span key={c} className="rounded-full border border-ink px-3 py-1.5 label-mono">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-2xl leading-snug md:text-[1.75rem]">{p.intro}</p>
            <p className="mt-6 label-mono text-muted-foreground">
              {p.role} · {p.period}
            </p>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
            <div className="-rotate-2 bg-ink p-7 text-paper transition-transform duration-500 hover:rotate-0 md:p-10">
              <p className="label-mono text-signal">Audience milestone</p>
              <p className="display-xl mt-4 text-[clamp(3rem,8vw,6.5rem)]">
                160K<span className="text-signal">+</span>
              </p>
              <p className="mt-3 font-serif text-2xl italic">combined audience · millions of views</p>
              <p className="mt-4 text-sm text-paper/70">{p.outcome}</p>
            </div>
          </Reveal>
        </div>

        {/* Motion clips */}
        <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-end md:gap-6">
          <Reveal className="rotate-[-2deg] md:col-span-4">
            <Media slot={slot("clip_vertical")} className="bg-paper" />
            <Caption>Motion · vertical clip</Caption>
          </Reveal>
          <Reveal className="rotate-[1.5deg] md:col-span-5 md:col-start-7 md:mt-16" delay={120}>
            <Media slot={slot("clip_square")} className="bg-paper" />
            <Caption>Motion · square clip</Caption>
          </Reveal>
        </div>

        {/* Collage */}
        <div className="mt-20 grid grid-cols-2 items-start gap-4 md:grid-cols-12 md:gap-6">
          <Reveal className="rotate-[-3deg] md:col-span-3">
            <Media slot={slot("collage_1")} className="bg-paper" />
          </Reveal>
          <Reveal className="rotate-[2deg] md:col-span-2 md:mt-24" delay={80}>
            <Media slot={slot("collage_2")} className="bg-paper" />
          </Reveal>
          <Reveal className="rotate-[1.5deg] md:col-span-3 md:mt-8" delay={160}>
            <Media slot={slot("collage_3")} className="bg-paper" />
          </Reveal>
          <Reveal className="rotate-[-2deg] md:col-span-2 md:mt-32" delay={240}>
            <Media slot={slot("collage_4")} className="bg-paper" />
          </Reveal>
          <Reveal className="col-span-2 rotate-[3deg] md:col-span-2 md:mt-4" delay={300}>
            <Media slot={slot("collage_5")} className="bg-paper" />
          </Reveal>
        </div>

        <Reveal className="mt-20 md:w-5/12">
          <ProcessList p={p} />
        </Reveal>
      </Container>
    </div>
  );
}
