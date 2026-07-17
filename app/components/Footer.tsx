export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-rule bg-paper-2">
      <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-9">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[34ch]">
            <div className="flex items-center gap-2.5">
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
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-2">
              The neighborhood print shop on Main Street in the City of Orange. Walk
              in with a file or an idea, walk out with it printed right.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-2/60">
                Visit
              </div>
              <a
                href="https://www.google.com/maps?q=355+Main+St,+Orange,+NJ+07050"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-[14px] leading-snug text-ink hover:text-violet transition-colors"
              >
                355 Main St
                <br />
                City of Orange, NJ 07050
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-2/60">
                Call
              </div>
              <a
                href="tel:+19736756266"
                className="mt-3 block text-[14px] text-ink hover:text-violet transition-colors"
              >
                (973) 675-6266
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-2/60">
                Hours
              </div>
              <p className="mt-3 text-[14px] leading-snug text-ink">
                Mon to Fri
                <br />
                9:00 AM to 5:00 PM
                <br />
                <span className="text-ink-2">Sat &amp; Sun closed</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-rule pt-6 text-[12px] text-ink-2 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Instant Printing · City of Orange, NJ</span>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2 hover:text-violet transition-colors"
          >
            built bysemaj.com
          </a>
        </div>
      </div>
    </footer>
  );
}
