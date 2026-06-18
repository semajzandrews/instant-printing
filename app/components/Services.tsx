"use client";
import { motion } from "motion/react";

type Svc = { n: string; name: string; body: string; tags: string[]; icon: React.ReactNode };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES: Svc[] = [
  {
    n: "01",
    name: "Business cards",
    body: "Stocks, finishes, and a clean cut. Bring your design or sketch it with us at the counter.",
    tags: ["Matte / gloss", "Same week"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10h5M7 13h7" />
        <circle cx="16.5" cy="11" r="1.6" />
      </svg>
    ),
  },
  {
    n: "02",
    name: "Signs & banners",
    body: "Wide format for grand openings, sales, events, and yard signs that hold up outside.",
    tags: ["Large format", "Indoor / outdoor"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 4h16v10H4z" />
        <path d="M8 14v6M16 14v6M4 8h16" />
      </svg>
    ),
  },
  {
    n: "03",
    name: "Copies & documents",
    body: "Black and color, single sheets to boxed reports, collated and ready to hand out.",
    tags: ["B&W / color", "Collation"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <rect x="7" y="3" width="11" height="14" rx="1.5" />
        <path d="M7 7H5a1.5 1.5 0 0 0-1.5 1.5V20A1.5 1.5 0 0 0 5 21.5h9A1.5 1.5 0 0 0 15.5 20v-1" />
      </svg>
    ),
  },
  {
    n: "04",
    name: "Photo prints",
    body: "Sharp photo printing from your files, sized for frames, gifts, and keepsakes.",
    tags: ["From your files", "Multiple sizes"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="12" cy="13" r="3.4" />
        <path d="M8 6l1.2-2h5.6L16 6" />
      </svg>
    ),
  },
  {
    n: "05",
    name: "Flyers & booklets",
    body: "Layout, typesetting, folding, and binding for menus, programs, and handouts.",
    tags: ["Layout help", "Folding / binding"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 5c-2-1.4-4.5-1.8-7-1v13c2.5-.8 5-.4 7 1 2-1.4 4.5-1.8 7-1V4c-2.5-.8-5-.4-7 1z" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
  {
    n: "06",
    name: "Faxing",
    body: "Send and receive faxes at the counter when a document still needs to go the old way.",
    tags: ["Send / receive", "Walk-in"],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" {...stroke}>
        <path d="M7 9V4h10v5" />
        <rect x="3" y="9" width="18" height="8" rx="2" />
        <path d="M7 17v3h10v-3M16 12.5h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-[1320px] px-5 py-24 md:px-9 md:py-32">
      <div className="mb-12 max-w-[40ch]">
        <span className="kicker">03 / On the menu</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink">
          Whatever the block needs printed.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[5px] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.n}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col gap-4 bg-paper p-7 transition-colors hover:bg-paper-3"
          >
            <div className="flex items-start justify-between">
              <span
                className="grid h-11 w-11 place-items-center rounded-[4px] text-paper-3 transition-transform group-hover:-translate-y-0.5"
                style={{ background: "var(--violet)" }}
              >
                {s.icon}
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink-2/50">{s.n}</span>
            </div>
            <h3 className="font-display text-[1.35rem] font-semibold leading-tight text-ink">{s.name}</h3>
            <p className="text-[14px] leading-relaxed text-ink-2">{s.body}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-rule px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
