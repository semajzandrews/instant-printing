"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Pressroom", href: "#pressroom" },
  { label: "Services", href: "#services" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 28);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:px-9">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="grid h-7 w-7 place-items-center rounded-[3px] text-paper-3"
            style={{ background: "var(--violet)" }}
            aria-hidden
          >
            <span className="font-mono text-[13px] font-medium leading-none">ip</span>
          </span>
          <span className="font-display text-[19px] font-semibold tracking-tight text-ink">
            Instant Printing
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-2 hover:text-violet transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+19736756266"
          className="hidden md:inline-flex items-center gap-2 rounded-[3px] px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-3 transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--violet)" }}
        >
          (973) 675-6266
        </a>

        {/* mobile: 46px call icon */}
        <a
          href="tel:+19736756266"
          aria-label="Call Instant Printing"
          className="md:hidden grid h-[46px] w-[46px] place-items-center rounded-[3px] text-paper-3"
          style={{ background: "var(--violet)" }}
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
