import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const projectIds = projects.map((p) => p.id);

export function Header() {
  const active = useActiveSection(["work", ...projectIds, "about", "contact"]);
  const current = active && projectIds.includes(active) ? "work" : active;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to work
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b bg-background/85 backdrop-blur transition-colors duration-300",
          scrolled ? "border-border" : "border-transparent",
        )}
      >
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10"
          aria-label="Primary"
        >
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            {profile.name}
            <span className="text-signal-deep">.</span>
          </a>
          <ul className="flex gap-5 md:gap-8">
            {links.map((link) => {
              const isCurrent = current === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isCurrent ? "true" : undefined}
                    className={cn(
                      "link-underline py-1 label-mono transition-colors",
                      isCurrent && "text-signal-deep",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
