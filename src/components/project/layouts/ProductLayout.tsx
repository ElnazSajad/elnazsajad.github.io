import type { Project } from "@/content/types";
import { Caption, Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { Container, ProcessList, ProjectMeta } from "../parts";

/**
 * Droplinked — three sizes, three roles:
 *   A  printed T-shirt   hero, the largest image
 *   B  main design       secondary, beside the hero
 *   C  logo sticker      smallest, under the main design
 */
export function ProductLayout({ p }: { p: Project }) {
  const slot = (id: string) => p.media.find((m) => m.id === id);
  const printed = slot("printed");
  const main = slot("main_design");
  const logo = slot("logo_sticker");

  return (
    <Container>
      <div className="grid gap-10 border-t border-ink pt-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="label-mono text-signal-deep">({p.number})</p>
          <p className="mt-2 label-mono text-muted-foreground">{p.period}</p>
        </Reveal>
        <Reveal className="md:col-span-9" delay={80}>
          <h3 className="display-xl text-[clamp(3.5rem,11vw,9.5rem)]">{p.title}</h3>
          <p className="mt-6 max-w-2xl text-xl leading-snug md:text-2xl">{p.intro}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8">
        {/* A — Hero: the design as worn. */}
        <Reveal className="md:col-span-7">
          <Media slot={printed} />
          <Caption>A — {printed?.caption}</Caption>
        </Reveal>

        {/* B + C — the artwork behind it, smaller, stepping down in size. */}
        {/* On phones they step down in width too, so the hero stays the biggest. */}
        <div className="flex flex-col gap-8 md:col-span-4 md:col-start-9 md:justify-between md:gap-10">
          <Reveal className="w-3/4 md:w-full" delay={100}>
            <Media slot={main} />
            <Caption>B — {main?.caption}</Caption>
          </Reveal>
          <Reveal className="w-3/5 md:w-3/4" delay={180}>
            <Media slot={logo} className="bg-ink" />
            <Caption>C — {logo?.caption}</Caption>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-border pt-8 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <ProjectMeta p={p} />
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
          <ProcessList p={p} />
        </Reveal>
      </div>
    </Container>
  );
}
