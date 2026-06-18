"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // layered parallax depth — each plane drifts at a different rate
  const backY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden haze"
    >
      {/* BACK plane — drifting separation sheets */}
      <motion.div style={{ y: backY }} className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-10%] top-[12%] h-[44vh] w-[34vh] rotate-[8deg] rounded-[4px] opacity-40 blur-[1px]"
          style={{ background: "linear-gradient(160deg, var(--cyan), transparent 70%)" }}
        />
        <div
          className="absolute left-[-8%] top-[40%] h-[40vh] w-[30vh] rotate-[-10deg] rounded-[4px] opacity-30 blur-[1px]"
          style={{ background: "linear-gradient(160deg, var(--magenta), transparent 72%)" }}
        />
      </motion.div>

      {/* MID plane — the violet press sheet, now grounded in a real press */}
      <motion.div
        style={{ y: midY }}
        className="pointer-events-none absolute right-[6%] top-[18%] hidden md:block"
        aria-hidden
      >
        <div className="cropmark">
          <figure
            className="relative h-[58vh] w-[40vh] overflow-hidden rotate-[3deg] rounded-[3px] shadow-[0_40px_90px_-30px_rgba(58,38,104,0.55)]"
          >
            {/* the running press, graded to the press-ink violet duotone */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-press.jpg"
              alt="Ink rolled onto the press at Instant Printing on Main Street"
              className="absolute inset-0 h-full w-full object-cover saturate-[0.7]"
            />
            {/* violet wash that turns the photo into a single-ink plate */}
            <div
              className="absolute inset-0 mix-blend-color"
              style={{ background: "linear-gradient(160deg, var(--violet-2), var(--violet-3))" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(155deg, rgba(91,63,160,0.30), rgba(58,38,104,0.40))" }}
            />
            {/* darkened foot so the type stays fully legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-3/85 via-violet-3/20 to-violet-3/35" />

            <div className="relative flex h-full flex-col justify-between p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper-3/80">
                proof · 355 main st
              </span>
              <span className="font-display text-[34px] leading-none text-paper-3 drop-shadow-[0_2px_10px_rgba(28,24,34,0.5)]">
                Fresh
                <br />
                off the
                <br />
                press.
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper-3/80">
                ready today
              </span>
            </div>
          </figure>
        </div>
      </motion.div>

      {/* FRONT content */}
      <motion.div
        style={{ y: frontY, opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1320px] flex-col justify-center px-5 pt-24 md:px-9"
      >
        <span className="kicker mb-6 flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--violet)" }} />
          Main Street · City of Orange, New Jersey
        </span>

        <h1 className="max-w-[15ch] font-display text-[clamp(2.9rem,9vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-ink">
          The block&apos;s own
          <br />
          <span className="relative inline-block">
            <span style={{ color: "var(--violet)" }}>print shop.</span>
          </span>
        </h1>

        <p className="mt-7 max-w-[46ch] text-[clamp(1rem,2.4vw,1.22rem)] leading-relaxed text-ink-2">
          Walk in with a file or an idea. Walk out with business cards, banners,
          copies, and prints done right, on Main Street since the neighborhood
          needed them.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-[3px] px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-paper-3 transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--violet)" }}
          >
            Plan a print run
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-[3px] border border-rule-2 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-violet hover:text-violet"
          >
            See what we print
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2">
          <span>Mon to Fri · 9 to 5</span>
          <span className="hidden sm:inline text-rule-2">/</span>
          <span>Cards · Banners · Copies</span>
          <span className="hidden sm:inline text-rule-2">/</span>
          <span>Walk-ins welcome</span>
        </div>

        {/* MOBILE press plate — brings the page to life on phones (desktop uses the floating plane) */}
        <div className="mt-10 md:hidden">
          <div className="cropmark">
            <figure className="relative aspect-[5/3] w-full overflow-hidden rounded-[3px] shadow-[0_24px_60px_-28px_rgba(58,38,104,0.55)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-press.jpg"
                alt="Ink rolled onto the press at Instant Printing on Main Street"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.7]"
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ background: "linear-gradient(160deg, var(--violet-2), var(--violet-3))" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(150deg, rgba(91,63,160,0.28), rgba(58,38,104,0.40))" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-3/85 via-transparent to-violet-3/20" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <span className="font-display text-[26px] leading-none text-paper-3 drop-shadow-[0_2px_10px_rgba(28,24,34,0.5)]">
                  Fresh off
                  <br />
                  the press.
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-paper-3/80">
                  ready today
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-2/70">
        scroll
      </div>
    </section>
  );
}
