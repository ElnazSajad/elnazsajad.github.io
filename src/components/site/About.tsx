import { skills, tools } from "@/content/profile";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="border-t border-ink py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-4">
          <p className="label-mono text-signal-deep">(About)</p>
          <h2 id="about-h" className="display-xl mt-4 text-6xl md:text-8xl">
            Thinking
            <br />
            <span className="serif-italic font-normal tracking-normal">with my</span>
            <br />
            hands.
          </h2>
        </Reveal>

        <Reveal className="space-y-6 text-xl leading-snug md:col-span-7 md:col-start-6 md:text-2xl" delay={100}>
          <p>
            My work spans digital marketing, creative strategy, visual communication, graphic design,
            animation and illustration. What ties it together is connecting the thinking to the
            making — I stay with an idea from the strategic question through to the final frame,
            file or print.
          </p>
          <p className="text-muted-foreground">
            A background in{" "}
            <span className="serif-italic text-foreground">fashion design and sewing</span> shaped
            how I see: material, construction and detail matter as much as the concept.
          </p>

          <div className="grid gap-10 pt-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 label-mono text-muted-foreground">Skills</p>
              <ul className="flex flex-wrap gap-2 text-sm">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border px-3 py-1">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 label-mono text-muted-foreground">Tools</p>
              <ul className="divide-y border-y text-base">
                {tools.map((t) => (
                  <li key={t} className="py-1.5">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
