import type { ReactNode } from "react";
import type { Project } from "@/content/types";
import { cn, pad2 } from "@/lib/utils";

/** "(01) — Selected work" eyebrow + giant project title. */
export function ProjectHeader({ p, className, dark }: { p: Project; className?: string; dark?: boolean }) {
  return (
    <header className={className}>
      <p className={cn("label-mono", dark ? "text-signal" : "text-signal-deep")}>
        ({p.number}) — Selected work
      </p>
      <h3 className={cn("display-xl mt-4 text-[clamp(3.5rem,13vw,11rem)]", dark && "text-paper")}>
        {p.title}
      </h3>
    </header>
  );
}

/** Role / Period / Discipline definition list. */
export function ProjectMeta({ p, dark }: { p: Project; dark?: boolean }) {
  const dd = dark ? "text-paper" : "text-foreground";
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-3 label-mono",
        dark ? "text-paper/70" : "text-muted-foreground",
      )}
    >
      <div>
        <dt className="opacity-60">Role</dt>
        <dd className={cn("mt-1", dd)}>{p.role}</dd>
      </div>
      <div>
        <dt className="opacity-60">Period</dt>
        <dd className={cn("mt-1", dd)}>
          {p.period}
          {p.location ? ` · ${p.location}` : ""}
        </dd>
      </div>
      <div className="col-span-2">
        <dt className="opacity-60">Discipline</dt>
        <dd className={cn("mt-1", dd)}>{p.categories.join(" / ")}</dd>
      </div>
    </dl>
  );
}

/** Ruled list of responsibilities. */
export function ProcessList({ p, numbered, dark }: { p: Project; numbered?: boolean; dark?: boolean }) {
  return (
    <div>
      <p className={cn("label-mono mb-3", dark ? "text-paper/60" : "text-muted-foreground")}>
        Process / Responsibilities
      </p>
      <ul className={cn("divide-y border-y", dark && "divide-paper/15 border-paper/15")}>
        {p.process.map((item, i) => (
          <li key={item} className="flex items-baseline gap-4 py-2.5 text-[0.95rem]">
            {numbered && (
              <span className={cn("label-mono", dark ? "text-signal" : "text-signal-deep")}>
                {pad2(i + 1)}
              </span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Numbered chapter heading used inside the Cleany case study. */
export function Chapter({
  n,
  title,
  children,
  label = "Chapter",
}: {
  n: string;
  title: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="grid gap-6 border-t border-ink pt-6 md:grid-cols-12">
      <p className="label-mono text-signal-deep md:col-span-2">
        {label} {n}
      </p>
      <h4 className="font-display text-3xl leading-tight font-semibold tracking-tight md:col-span-4 md:text-4xl">
        {title}
      </h4>
      <div className="text-[1.05rem] leading-relaxed md:col-span-5 md:col-start-8">{children}</div>
    </div>
  );
}

/** Page-width container used by every section. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1440px] px-5 md:px-10", className)}>{children}</div>;
}
