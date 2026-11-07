import { disciplines, profile } from "@/content/profile";
import { Container } from "@/components/project/parts";

export function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section className="grid-lines relative min-h-[100svh] pt-28 pb-16 md:pt-36">
      <Container className="flex flex-col">
        <div className="flex justify-between label-mono text-muted-foreground">
          <span>Portfolio — {profile.year}</span>
          <span className="hidden md:inline">Based in {profile.location}</span>
        </div>

        <h1 className="display-xl mt-10 text-[clamp(4.5rem,19vw,17rem)]">
          <span className="block">{first}</span>
          <span className="block md:pl-[16%]">
            {last}
            <span className="serif-italic font-normal tracking-normal text-signal-deep">*</span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="label-mono leading-relaxed md:col-span-4">
            <span className="text-signal-deep">*</span> Creative Designer,
            <br />
            Visual Storytelling &amp;
            <br />
            Brand Communication
          </p>
          <p className="text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.2] md:col-span-7 md:col-start-6">
            I work where the idea and the image meet. A brief becomes a{" "}
            <span className="serif-italic text-signal-deep">concept</span>, the concept a{" "}
            <span className="serif-italic">strategy</span>, and the strategy something you can
            actually see — a campaign, a character, a feed, a printed piece.
          </p>
        </div>
      </Container>

      {/* Ticker — content is doubled so the loop is seamless. */}
      <div className="marquee-track mt-16 overflow-hidden border-y py-4" aria-hidden>
        <div className="marquee flex w-max gap-10 font-serif text-3xl whitespace-nowrap italic">
          {[0, 1].flatMap((copy) =>
            disciplines.map((word) => (
              <span key={`${copy}-${word}`} className="flex items-center gap-10">
                {word}
                <span className="text-signal-deep not-italic">✦</span>
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
