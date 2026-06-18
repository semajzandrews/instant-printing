"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Item = {
  src: string;
  label: string;
  note: string;
  span: string;
  depth: number;
};

const ITEMS: Item[] = [
  { src: "/work-swatches.jpg", label: "Color matching", note: "Proofed to the right ink before the run", span: "md:col-span-7 md:row-span-2", depth: 40 },
  { src: "/work-design.jpg", label: "Business cards", note: "Designed, proofed, and cut in house", span: "md:col-span-5", depth: 70 },
  { src: "/work-copies.jpg", label: "Copies & documents", note: "Black, color, single sheet or boxes", span: "md:col-span-5", depth: 55 },
  { src: "/work-type.jpg", label: "Layout & typesetting", note: "Flyers, booklets, programs", span: "md:col-span-6", depth: 50 },
  { src: "/work-documents.jpg", label: "Resumes & reports", note: "Clean, professional, ready to hand out", span: "md:col-span-6", depth: 65 },
];

function Plate({ item, i }: { item: Item; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : item.depth, reduce ? 0 : -item.depth]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`cropmark group relative overflow-hidden rounded-[4px] border border-rule ${item.span}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 -m-[10%]">
        <div
          className="absolute inset-0 z-10 mix-blend-color"
          style={{ background: "linear-gradient(180deg, rgba(91,63,160,0.42), rgba(58,38,104,0.34))" }}
        />
        <div className="absolute inset-0 z-10 bg-violet-3/10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.label}
          className="h-full w-full object-cover saturate-[0.85] transition-transform duration-[1.2s] group-hover:scale-[1.04]"
        />
      </motion.div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-3 p-5">
        <div>
          <div className="font-display text-[clamp(1.1rem,2.4vw,1.5rem)] font-semibold leading-tight text-paper-3">
            {item.label}
          </div>
          <div className="mt-1 max-w-[34ch] text-[13px] leading-snug text-paper-3/75">
            {item.note}
          </div>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-3/60">
          {String(i + 1).padStart(2, "0")}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-[1320px] px-5 py-24 md:px-9 md:py-32">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="kicker">01 / What comes off the press</span>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,5.5vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink">
            Everyday work, printed like it matters.
          </h2>
        </div>
        <p className="max-w-[38ch] text-[15px] leading-relaxed text-ink-2">
          One counter, a real press, and a person who looks at your file before it
          runs. The kind of shop a neighborhood keeps.
        </p>
      </div>

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-12">
        {ITEMS.map((it, i) => (
          <Plate key={it.src} item={it} i={i} />
        ))}
      </div>
    </section>
  );
}
