"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "motion/react";

/* SIGNATURE — "Into Register"
   Three offset separation plates (cyan, magenta, violet key) drift into
   perfect register as the section scrolls through center, resolving into one
   crisp printed sheet. Scroll-coupled transform only. Degrades to the
   registered sheet under prefers-reduced-motion. */

function Plate({
  color,
  blend,
  x,
  y,
  rot,
  label,
}: {
  color: string;
  blend: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  rot: MotionValue<number>;
  label: string;
}) {
  return (
    <motion.div
      style={{ x, y, rotate: rot, mixBlendMode: blend as React.CSSProperties["mixBlendMode"] }}
      className="absolute inset-0 grid place-items-center"
      aria-hidden
    >
      <div
        className="relative h-[clamp(220px,40vw,360px)] w-[clamp(170px,30vw,280px)] rounded-[3px]"
        style={{ background: color, opacity: 0.92 }}
      >
        <span className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.3em] text-paper-3/70">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Pressroom() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // register progress: plates are offset at the edges (0 and 1), aligned at center (0.5)
  const k = reduce ? 0 : 1; // kill drift under reduced motion

  // cyan plate
  const cX = useTransform(scrollYProgress, [0, 0.5, 1], [-90 * k, 0, 70 * k]);
  const cY = useTransform(scrollYProgress, [0, 0.5, 1], [40 * k, 0, -50 * k]);
  const cR = useTransform(scrollYProgress, [0, 0.5, 1], [-6 * k, 0, 5 * k]);
  // magenta plate
  const mX = useTransform(scrollYProgress, [0, 0.5, 1], [80 * k, 0, -60 * k]);
  const mY = useTransform(scrollYProgress, [0, 0.5, 1], [-50 * k, 0, 45 * k]);
  const mR = useTransform(scrollYProgress, [0, 0.5, 1], [7 * k, 0, -5 * k]);
  // violet key plate
  const vX = useTransform(scrollYProgress, [0, 0.5, 1], [20 * k, 0, -20 * k]);
  const vY = useTransform(scrollYProgress, [0, 0.5, 1], [60 * k, 0, -55 * k]);
  const vR = useTransform(scrollYProgress, [0, 0.5, 1], [-3 * k, 0, 3 * k]);

  // crisp sheet fades up only near full register
  const sheetOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.62],
    [0, reduce ? 1 : 1, 0]
  );
  const sheetScale = useTransform(scrollYProgress, [0.38, 0.5, 0.62], [0.97, 1, 0.97]);

  return (
    <section id="pressroom" className="relative bg-paper-2">
      {/* tall track drives the convergence; sticky stage stays pinned across it.
          NOTE: no overflow-hidden/clip on this chain or sticky breaks. */}
      <div ref={ref} className="relative h-[240svh]">
        {/* sticky stage holds the convergence in view while you scroll past it */}
        <div className="sticky top-0 flex h-[100svh] items-center">
          <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-9">
            {/* copy */}
            <div className="order-2 md:order-1">
              <span className="kicker">02 / The pressroom</span>
              <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,5vw,3.3rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink">
                The moment it all snaps into register.
              </h2>
              <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-2">
                Color separations come in offset, plate by plate. Then they line up,
                and a stack of paper becomes the thing you imagined. That alignment is
                the whole job, and we sweat it on every run.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2">
                <span>Cyan</span>
                <span>Magenta</span>
                <span style={{ color: "var(--violet)" }}>Key</span>
                <span className="text-ink">Registered</span>
              </div>
            </div>

            {/* convergence stage */}
            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden">
                {/* drifting plates */}
                <Plate color="var(--cyan)" blend="multiply" x={cX} y={cY} rot={cR} label="C" />
                <Plate color="var(--magenta)" blend="multiply" x={mX} y={mY} rot={mR} label="M" />
                <Plate color="var(--violet)" blend="multiply" x={vX} y={vY} rot={vR} label="K" />

                {/* crisp registered sheet at peak alignment */}
                <motion.div
                  style={{ opacity: sheetOpacity, scale: sheetScale }}
                  className="absolute inset-0 grid place-items-center"
                  aria-hidden
                >
                  <div className="cropmark relative h-[clamp(220px,40vw,360px)] w-[clamp(170px,30vw,280px)] rounded-[3px] bg-paper-3 shadow-[0_30px_70px_-25px_rgba(58,38,104,0.5)]">
                    <div className="flex h-full flex-col justify-between p-6">
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-violet">
                        in register
                      </span>
                      <div className="space-y-3">
                        <div className="h-2.5 w-3/4 rounded-sm" style={{ background: "var(--violet)" }} />
                        <div className="h-px w-full bg-ink/15" />
                        <div className="h-px w-5/6 bg-ink/15" />
                        <div className="h-px w-2/3 bg-ink/15" />
                      </div>
                      <span className="font-display text-[24px] font-semibold leading-none text-ink">
                        Instant
                        <br />
                        Printing
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* registration crosshair */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 opacity-50" aria-hidden>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <circle cx="22" cy="22" r="10" stroke="var(--ink)" strokeWidth="1" />
                    <path d="M22 0v44M0 22h44" stroke="var(--ink)" strokeWidth="0.75" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
