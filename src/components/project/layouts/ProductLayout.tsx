import type { Project } from "@/content/types";
import { Caption, Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { Container, ProcessList, ProjectMeta } from "../parts";

/** Droplinked — clean product sheet: artwork → applications. */
export function ProductLayout({ p }: { p: Project }) {
  const [artwork, ...rest] = p.media;
  const variants = rest.slice(0, 3);
  const applications = rest[3];

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

      <div className="mt-14 grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <Media slot={artwork} />
          <Caption>A — Artwork</Caption>
        </Reveal>
        <div className="grid grid-cols-3 gap-4 md:col-span-8">
          {variants.map((m, i) => (
            <Reveal key={m.id} delay={i * 80}>
              <Media slot={m} />
              <Caption>
                {String.fromCharCode(66 + i)} — {m.label}
              </Caption>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <Media slot={applications} />
        </Reveal>
        <Reveal className="space-y-8 md:col-span-4" delay={100}>
          <ProjectMeta p={p} />
          <ProcessList p={p} />
        </Reveal>
      </div>
    </Container>
  );
}
