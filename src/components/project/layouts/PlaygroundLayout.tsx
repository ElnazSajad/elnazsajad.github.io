import type { ReactNode } from "react";
import type { Project } from "@/content/types";
import { Caption, Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { Chapter, Container, ProcessList, ProjectHeader } from "../parts";

/**
 * Pissfool — a four-part case study on a mint background:
 *   01 Social media growth & reach
 *   02 The beginning — the green character
 *   03 Creative exploration — multiple characters
 *   04 The signature character — traditional vs AI-assisted animation
 *
 * Every image / video is a slot in projects.ts, looked up here by id.
 */
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
        {/* ---------------------------------------------------------- Intro */}
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

        <Reveal className="mt-12 md:ml-[33.33%] md:w-7/12">
          <p className="text-2xl leading-snug md:text-[2.1rem]">
            <span className="serif-italic text-signal-deep">Illustration, animation and storytelling</span>{" "}
            made for the feed.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.intro}</p>
          <p className="mt-6 label-mono text-muted-foreground">
            {p.role} · {p.period}
          </p>
        </Reveal>

        {/* ------------------------------------------- 01 Growth & reach */}
        <div className="mt-24 space-y-10 md:mt-32">
          <Reveal>
            <Chapter label="Part" n="01" title="Social media growth & reach">
              <p>
                Pissfool lives on social media. Its presence across Instagram, TikTok and YouTube is
                where the work meets its audience — the screenshots below record the channel's
                growth, reach and performance.
              </p>
            </Chapter>
          </Reveal>

          <div className="grid items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="mb-3 label-mono text-muted-foreground">Follow the work</p>
              <ul className="divide-y divide-ink/15 border-y border-ink/15">
                {(p.links ?? []).map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-baseline justify-between gap-4 py-4"
                      >
                        <span className="link-underline font-display text-2xl font-semibold md:text-3xl">
                          {link.name}
                        </span>
                        <span className="label-mono text-signal-deep transition-transform duration-300 group-hover:translate-x-1">
                          {link.handle || "Visit"} ↗
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-baseline justify-between gap-4 py-4">
                        <span className="font-display text-2xl font-semibold text-ink/50 md:text-3xl">
                          {link.name}
                        </span>
                        <span className="label-mono text-muted-foreground">Link to be added</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            {p.outcome && (
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
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { id: "growth_1", caption: "Screenshot 01 · growth" },
              { id: "growth_2", caption: "Screenshot 02 · reach & performance" },
            ].map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <Media slot={slot(item.id)} className="bg-paper" />
                <Caption>{item.caption}</Caption>
              </Reveal>
            ))}
          </div>
        </div>

        {/* --------------------------------------- 02 The green character */}
        <div className="mt-28 space-y-10 md:mt-36">
          <Reveal>
            <Chapter label="Part" n="02" title="The beginning — the green character">
              <p>
                Where Pissfool started: the original green character and the first animations.
                Every movement was made by hand — drawn frame by frame in Photoshop and animated in
                Adobe After Effects.
              </p>
              <Method className="mt-5" kind="hand" tools="Photoshop frame-by-frame · After Effects" />
            </Chapter>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-12 md:gap-8">
            <Reveal className="rotate-[-2deg] md:col-span-3 md:col-start-3">
              <Media slot={slot("green_1")} className="bg-paper" />
              <Caption>Green character · 01</Caption>
            </Reveal>
            <Reveal className="mt-12 rotate-[2deg] md:col-span-3 md:col-start-8 md:mt-24" delay={120}>
              <Media slot={slot("green_2")} className="bg-paper" />
              <Caption>Green character · 02</Caption>
            </Reveal>
          </div>
        </div>

        {/* ------------------------------------ 03 Multiple characters */}
        <div className="mt-28 space-y-10 md:mt-36">
          <Reveal>
            <Chapter label="Part" n="03" title="Creative exploration — multiple characters">
              <p>
                A period of experimenting: new characters, new voices and different ways of telling
                a story. Every one of these characters was originally illustrated and animated by
                hand, without AI.
              </p>
              <Method className="mt-5" kind="hand" tools="Illustrated & animated by hand" />
            </Chapter>
          </Reveal>

          <Reveal>
            <Media slot={slot("cast_all")} className="bg-paper" />
            <Caption>The cast · every character created for Pissfool</Caption>
          </Reveal>

          {/* Swipeable row on phones, three columns on desktop. */}
          <ol className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mx-auto md:grid md:max-w-4xl md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
            {["cast_video_1", "cast_video_2", "cast_video_3"].map((id, i) => (
              <li key={id} className="w-[62vw] shrink-0 snap-start sm:w-[40vw] md:w-auto">
                <Reveal delay={i * 90}>
                  <Media slot={slot(id)} className="bg-paper" />
                  <Caption>Character clip · 0{i + 1}</Caption>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* ------------------------------------- 04 Signature character */}
        <div className="mt-28 space-y-10 md:mt-36">
          <Reveal>
            <Chapter label="Part" n="04" title="The signature character — manual & AI-assisted animation">
              <p>
                A character of my own, recognisable across every post. It has been animated in two
                different ways, shown separately below so the method behind each piece is clear:
                traditional, hand-made animation, and AI-assisted animation.
              </p>
            </Chapter>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* A — Traditional */}
            <Reveal className="h-full">
              <TechniquePanel
                letter="A"
                title="Traditional animation"
                method={<Method kind="hand" tools="Photoshop · After Effects" />}
                text="Created manually — drawn frame by frame in Photoshop and animated in After Effects."
              >
                {["signature_manual_1", "signature_manual_2"].map((id, i) => (
                  <div key={id}>
                    <Media slot={slot(id)} className="bg-paper" />
                    <Caption>Traditional · 0{i + 1}</Caption>
                  </div>
                ))}
              </TechniquePanel>
            </Reveal>

            {/* B — AI-assisted */}
            <Reveal className="h-full" delay={120}>
              <TechniquePanel
                dark
                letter="B"
                title="AI-assisted animation"
                method={<Method kind="ai" tools="AI-assisted techniques" />}
                text="Created using AI-assisted animation techniques, building on the established character."
              >
                {["signature_ai_1", "signature_ai_2"].map((id, i) => (
                  <div key={id}>
                    <Media slot={slot(id)} tone="dark" />
                    <Caption className="text-paper/60">AI-assisted · 0{i + 1}</Caption>
                  </div>
                ))}
              </TechniquePanel>
            </Reveal>
          </div>
        </div>

        {/* ---------------------------------------------------- Process */}
        <Reveal className="mt-24 md:ml-auto md:w-5/12">
          <ProcessList p={p} numbered />
        </Reveal>
      </Container>
    </div>
  );
}

/** Small badge that states how a piece was made. */
function Method({
  kind,
  tools,
  className,
}: {
  kind: "hand" | "ai";
  tools: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 label-mono",
          kind === "hand" ? "border border-ink bg-paper text-ink" : "bg-signal text-ink",
        )}
      >
        <span aria-hidden>{kind === "hand" ? "✎" : "✦"}</span>
        {kind === "hand" ? "Hand-made · no AI" : "AI-assisted"}
      </span>
      <span className="label-mono opacity-70">{tools}</span>
    </div>
  );
}

/** One side of the traditional vs AI-assisted comparison. */
function TechniquePanel({
  letter,
  title,
  method,
  text,
  dark,
  children,
}: {
  letter: string;
  title: string;
  method: ReactNode;
  text: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      aria-label={title}
      className={cn(
        "flex h-full flex-col p-6 md:p-10",
        dark ? "bg-ink text-paper" : "border border-ink bg-paper",
      )}
    >
      <p className={cn("label-mono", dark ? "text-signal" : "text-signal-deep")}>{letter} —</p>
      <h5 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h5>
      <div className="mt-4">{method}</div>
      <p className={cn("mt-4 leading-relaxed", dark ? "text-paper/75" : "text-muted-foreground")}>
        {text}
      </p>
      <div className="mt-auto grid grid-cols-2 gap-4 pt-8 md:gap-6">{children}</div>
    </section>
  );
}
