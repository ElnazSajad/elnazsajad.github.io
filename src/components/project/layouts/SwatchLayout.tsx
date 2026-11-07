import type { Project } from "@/content/types";
import { Caption, Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { pad2 } from "@/lib/utils";
import { Container, ProcessList, ProjectMeta } from "../parts";

/** Tabassom Printing — mounted fabric swatches on a mint board. */
export function SwatchLayout({ p }: { p: Project }) {
  const [first, ...restOfTitle] = p.title.split(" ");

  return (
    <Container>
      <div className="grid gap-8 bg-secondary p-6 md:grid-cols-12 md:p-12">
        <Reveal className="md:col-span-5">
          <p className="label-mono text-signal-deep">({p.number})</p>
          <h3 className="display-xl mt-4 text-[clamp(2.8rem,7vw,6rem)]">
            {first}
            <br />
            <span className="serif-italic font-normal tracking-normal">{restOfTitle.join(" ")}</span>
          </h3>
          <p className="mt-6 text-lg leading-snug">{p.intro}</p>
          <div className="mt-8">
            <ProjectMeta p={p} />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:col-span-7">
          {p.media.map((m, i) => (
            <Reveal key={m.id} delay={i * 70}>
              <div className="bg-paper p-2 pb-3 shadow-sm">
                <Media slot={m} />
                <Caption>Swatch {pad2(i + 1)}</Caption>
              </div>
            </Reveal>
          ))}
          <div className="col-span-2 mt-2">
            <ProcessList p={p} />
          </div>
        </div>
      </div>
    </Container>
  );
}
