"use client";

const ITEMS = [
  "Business cards",
  "Signs & banners",
  "Copies",
  "Document printing",
  "Photo prints",
  "Faxing",
  "Flyers",
  "Booklets",
];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-rule py-4"
      style={{ background: "var(--violet)" }}
      aria-hidden
    >
      <div className="flex w-max animate-[ipscroll_30s_linear_infinite] gap-0">
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 items-center">
            {ITEMS.map((it, i) => (
              <span key={`${set}-${i}`} className="flex items-center">
                <span className="px-7 font-display text-[clamp(1.1rem,3vw,1.55rem)] font-medium text-paper-3">
                  {it}
                </span>
                <span className="text-paper-3/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ipscroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
