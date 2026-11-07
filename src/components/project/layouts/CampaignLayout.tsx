import type { Project } from "@/content/types";
import { Caption, Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { cn, pad2 } from "@/lib/utils";
import { Chapter, Container, ProjectHeader, ProjectMeta } from "../parts";
import { Scroller } from "../Scroller";

/** Cleany — a long-form, chaptered campaign case study. */
export function CampaignLayout({ p }: { p: Project }) {
  const slot = (id: string) => p.media.find((m) => m.id === id);
  const stainGuide = p.media.filter((m) => m.id.startsWith("stain_guide_"));

  return (
    <Container>
      {/* Header */}
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <ProjectHeader p={p} />
        </Reveal>
        <Reveal className="md:col-span-4 md:pt-16" delay={120}>
          <ProjectMeta p={p} />
          <p className="mt-4 text-xs text-muted-foreground">
            Collaborative materials — produced within a team.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-10 md:ml-[33.33%] md:w-7/12">
        <p className="text-2xl leading-snug md:text-[2.1rem]">
          <span className="serif-italic text-signal-deep">Turning everyday garment care</span> into a
          clear, recognizable brand experience.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.intro}</p>
      </Reveal>

      {/* Chapter 01 — storefront */}
      <div className="mt-24 space-y-10">
        <Reveal>
          <Chapter n="01" title="Brand in the city — storefront system">
            <p>
              Translating a service hierarchy into street-level communication: what Cleany does, in
              which order, readable from the pavement — on the façade, in the flyer and on the card,
              in the brand's own blue and white identity.
            </p>
          </Chapter>
        </Reveal>
        <Reveal>
          <Media slot={slot("storefront")} />
          <Caption>{slot("storefront")?.caption}</Caption>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-4">
          <Reveal className="md:col-span-4">
            <Media slot={slot("flyer")} />
            <Caption>{slot("flyer")?.caption}</Caption>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-5 md:mb-6" delay={100}>
            <Media slot={slot("card")} />
            <Caption>{slot("card")?.caption}</Caption>
          </Reveal>
        </div>
      </div>

      {/* Chapter 02 — stain guide + motion */}
      <div className="mt-28 space-y-10">
        <Reveal>
          <Chapter n="02" title="The stain guide — educational social series">
            <p>
              A six-frame German-language series that opens with{" "}
              <span className="serif-italic">„Der wichtigste Fehler: Bloß kein Salz!"</span> and
              walks step by step through stain care — service expertise turned into accessible,
              saveable content.
            </p>
          </Chapter>
        </Reveal>

        <Reveal>
          <div className="-mx-5 bg-blush px-5 py-8 md:-mx-10 md:px-10">
            <Scroller label="Stain guide series">
              {stainGuide.map((m, i) => (
                <li key={m.id} className="w-[68vw] shrink-0 snap-start sm:w-[42vw] md:w-[22vw]">
                  <Media slot={m} className="bg-paper" />
                  <Caption>
                    Frame {pad2(i + 1)} / {pad2(stainGuide.length)}
                  </Caption>
                </li>
              ))}
            </Scroller>
          </div>
        </Reveal>

        <Reveal>
          <div aria-label="Cleany video collection">
            <p className="label-mono text-muted-foreground">In motion</p>
            <div className="mt-4 grid grid-cols-2 items-start gap-4 md:grid-cols-12 md:gap-6">
              <div className="col-span-2 mx-auto w-full max-w-sm md:col-span-5 md:mx-0 md:max-w-none">
                <Media slot={slot("motion_app")} />
                <Caption className="mt-3">Cleany24 · app promotion</Caption>
              </div>
              <div className="col-span-2 pt-6 md:col-span-6 md:col-start-7 md:pt-12">
                <p className="label-mono text-muted-foreground">Speaking fabrics</p>
                <h5 className="mt-3 font-display text-2xl font-semibold">
                  Fabric care · social content
                </h5>
                <div className="mt-6 grid grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Media slot={slot("motion_cashmere")} />
                    <Caption className="mt-3">Cashmere care</Caption>
                  </div>
                  <div>
                    <Media slot={slot("motion_fabric")} />
                    <Caption className="mt-3">Fabric care</Caption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Chapter 03 — audience promotions */}
      <div className="mt-28 space-y-10">
        <Reveal>
          <Chapter n="03" title="Audience-specific promotional communication">
            <p>
              Three communications, each written for a different audience with its own offer and
              call to action.
            </p>
          </Chapter>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          {[
            { id: "promo_wework", audience: "WeWork members", offer: "Member offer", action: "Redeem as a member", cls: "md:col-span-4" },
            { id: "promo_leather", audience: "Leather owners", offer: "Leather-cleaning offer", action: "Book specialist care", cls: "md:col-span-3 md:mt-24" },
            { id: "promo_cleany24", audience: "Busy residents", offer: "Cleany24 collection & delivery", action: "Schedule a pickup", cls: "md:col-span-5 md:mt-10" },
          ].map((promo, i) => (
            <Reveal key={promo.id} className={cn(promo.cls, "flex flex-col")} delay={i * 90}>
              <Media slot={slot(promo.id)} className="mb-3" />
              {/* mt-auto pins the row to the bottom so all three line up. */}
              <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-3 label-mono text-[0.65rem]">
                <div>
                  <dt className="text-muted-foreground">Audience</dt>
                  <dd className="mt-1">{promo.audience}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Offer</dt>
                  <dd className="mt-1">{promo.offer}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Action</dt>
                  <dd className="mt-1">{promo.action}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Chapter 04 — strategy */}
      <div className="mt-28 space-y-10">
        <Reveal>
          <Chapter n="04" title="Strategic thinking — planning & local discoverability">
            <p>
              The planning layer behind the visible work. These documents show{" "}
              <em>intent and structure</em>; they are planning materials, distinct from published
              execution.
            </p>
          </Chapter>
        </Reveal>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              title: "Audience & content strategy",
              source: "952048_content plan first week of May.pdf",
              body: "Defines target audiences, content goals, educational / promotional / engagement themes and a proposed May content schedule.",
            },
            {
              title: "Brand framework",
              source: "952049_Brand Board.pdf",
              body: "Shared team material setting out the Cleany palette and typography (Cormorant Garamond / Montserrat).",
              swatches: ["#D9E9F6", "#A5D8F3", "#1B365D"],
            },
            {
              title: "Digital discoverability",
              source: "Own responsibility",
              body: "SEO, GEO, website pages and blog, Google Business profile and local marketing. The analytics report at the end of this case study is the recorded evidence.",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col bg-paper p-6 md:p-8">
                <p className="label-mono text-signal-deep">Pillar {pad2(i + 1)}</p>
                <h5 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {pillar.title}
                </h5>
                <p className="mt-3 leading-relaxed">{pillar.body}</p>
                {pillar.swatches && (
                  <div className="mt-4 flex gap-2">
                    {pillar.swatches.map((hex) => (
                      <div key={hex} className="text-center">
                        <div className="h-10 w-10 border border-border" style={{ background: hex }} />
                        <p className="mt-1 label-mono text-[0.55rem]">{hex}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="mt-auto pt-5 label-mono text-[0.6rem] text-muted-foreground">
                  Source · {pillar.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="md:w-2/3">
          <Media slot={slot("website_ratgeber")} />
          <Caption>{slot("website_ratgeber")?.caption}</Caption>
        </Reveal>
      </div>

      {/* Scope + evidence */}
      <div className="mt-24 grid gap-10 border-t border-ink pt-8 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="label-mono text-muted-foreground">Scope of work</p>
          <p className="mt-3 text-xl leading-snug md:text-2xl">{p.process.join(" · ")}</p>
        </Reveal>
      </div>

      <Reveal className="mt-12 md:w-3/4">
        <p className="label-mono text-muted-foreground">Evidence of impact</p>
        <div className="mt-3">
          <Media slot={slot("analytics")} />
        </div>
        <Caption className="text-[0.65rem]">{slot("analytics")?.caption}</Caption>
      </Reveal>
    </Container>
  );
}
