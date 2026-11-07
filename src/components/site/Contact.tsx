import { useState } from "react";
import { profile } from "@/content/profile";
import { Container } from "@/components/project/parts";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard unavailable (e.g. insecure context) — the mailto link still works. */
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-h" className="bg-ink py-24 text-paper md:py-36">
      <Container>
        <p className="label-mono text-signal">(Contact)</p>
        <h2 id="contact-h" className="display-xl mt-6 text-[clamp(3.5rem,12vw,10rem)]">
          Let’s make
          <br />
          <span className="serif-italic font-normal tracking-normal">something.</span>
        </h2>

        <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline inline-block font-display text-[clamp(1.4rem,4vw,3.25rem)] font-semibold break-all transition-colors hover:text-signal"
          >
            {profile.email} <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="label-mono text-paper/60 transition-colors hover:text-signal"
          >
            <span aria-live="polite">{copied ? "Copied ✓" : "Copy address"}</span>
          </button>
        </div>

        <ul className="mt-16 grid gap-px border-t border-paper/20 sm:grid-cols-3">
          {profile.socials.map((s) => (
            <li key={s.name} className="border-b border-paper/20 py-4">
              {s.href ? (
                <a href={s.href} target="_blank" rel="noreferrer" className="link-underline label-mono">
                  {s.name} ↗
                </a>
              ) : (
                <span className="label-mono text-paper/60">
                  {s.name} — <span className="text-paper/40">link to be added</span>
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-20 flex justify-between label-mono text-paper/50">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="link-underline">
            Back to top ↑
          </a>
        </div>
      </Container>
    </section>
  );
}
