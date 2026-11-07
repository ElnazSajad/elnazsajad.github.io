import { projects } from "@/content/projects";
import { Container } from "@/components/project/parts";
import { ProjectSection } from "@/components/project/ProjectSection";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h">
      <Container className="pt-24">
        <div className="flex items-end justify-between border-b border-ink pb-4">
          <h2 id="work-h" className="display-xl text-5xl md:text-7xl">
            Selected <span className="serif-italic font-normal tracking-normal">work</span>
          </h2>
          <span className="label-mono text-muted-foreground">
            01—{String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Index */}
        <ol className="mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-2 md:grid-cols-5">
          {projects.map((p) => (
            <li key={p.id} className="border-b py-3">
              <a href={`#${p.id}`} className="group flex items-baseline gap-3">
                <span className="label-mono text-signal-deep">{p.number}</span>
                <span className="link-underline font-display text-lg font-semibold">{p.title}</span>
                <span
                  aria-hidden
                  className="ml-auto font-mono text-sm text-signal-deep opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-y-0.5 group-hover:opacity-100"
                >
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Container>

      {projects.map((p) => (
        <ProjectSection key={p.id} project={p} />
      ))}
    </section>
  );
}
