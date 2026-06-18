"use client";
import { motion } from "motion/react";

const HOURS = [
  { d: "Monday", h: "9:00 AM to 5:00 PM" },
  { d: "Tuesday", h: "9:00 AM to 5:00 PM" },
  { d: "Wednesday", h: "9:00 AM to 5:00 PM" },
  { d: "Thursday", h: "9:00 AM to 5:00 PM" },
  { d: "Friday", h: "9:00 AM to 5:00 PM" },
  { d: "Saturday", h: "Closed" },
  { d: "Sunday", h: "Closed" },
];

const MAP_SRC =
  "https://www.google.com/maps?q=355+Main+St,+Orange,+NJ+07050&output=embed";

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink text-paper">
      <div className="haze pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 py-24 md:px-9 md:py-32 lg:grid-cols-[1.05fr_1fr]">
        {/* left: address + hours */}
        <div>
          <span className="kicker" style={{ color: "var(--violet-2)" }}>
            04 / Come by
          </span>
          <h2 className="mt-4 max-w-[15ch] font-display text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.0] tracking-[-0.01em] text-paper-3">
            On Main Street, ready when you are.
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                The shop
              </div>
              <a
                href={MAP_SRC.replace("&output=embed", "")}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block font-display text-[1.3rem] leading-snug text-paper-3 ink-underline"
              >
                355 Main St
                <br />
                City of Orange, NJ 07050
              </a>
              <a
                href="tel:+19736756266"
                className="mt-4 inline-block font-mono text-[13px] tracking-[0.06em] text-paper/80 hover:text-violet-2 transition-colors"
              >
                (973) 675-6266
              </a>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55">
                Hours
              </div>
              <ul className="mt-3 space-y-1.5">
                {HOURS.map((row) => {
                  const closed = row.h === "Closed";
                  return (
                    <li key={row.d} className="flex items-center justify-between gap-4 text-[13.5px]">
                      <span className="text-paper/75">{row.d}</span>
                      <span className={closed ? "text-paper/35" : "text-paper-3"}>
                        {closed ? "Closed" : row.h}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+19736756266"
              className="inline-flex items-center gap-2 rounded-[3px] px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-paper-3 transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--violet)" }}
            >
              Call the shop
            </a>
            <a
              href={MAP_SRC.replace("&output=embed", "")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[3px] border border-paper/25 px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-paper-3 transition-colors hover:border-violet-2 hover:text-violet-2"
            >
              Get directions
            </a>
          </div>
        </div>

        {/* right: keyless google map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="cropmark relative min-h-[320px] overflow-hidden rounded-[5px] border border-paper/15"
        >
          <iframe
            title="Instant Printing on Main Street, City of Orange NJ"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-[1.05]"
            style={{ border: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
