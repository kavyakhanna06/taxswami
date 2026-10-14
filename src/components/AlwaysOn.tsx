const nodes = [
  { n: "01", label: "Clear engagement", x: 50, y: 6 },
  { n: "02", label: "Year-round support", x: 86, y: 27, active: true },
  { n: "03", label: "Jurisdiction aware", x: 86, y: 70 },
  { n: "04", label: "One consistent contact", x: 50, y: 92 },
  { n: "05", label: "Secure by default", x: 14, y: 70 },
  { n: "06", label: "Proactive planning", x: 14, y: 27 },
];

const ticker = "Clear answers  /  Year-round support  /  Qualified guidance  /  Privacy-aware process  /  ";

/** About-page diagram: six commitments orbiting an "Always on" hub. */
export function AlwaysOn() {
  return (
    <div>
      <div className="relative mx-auto aspect-[823/560] w-full max-w-[823px]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden>
          <ellipse cx="50" cy="49" rx="36" ry="43" fill="none" stroke="#344948" strokeOpacity="0.15" strokeWidth="0.2" strokeDasharray="0.8 0.8" vectorEffect="non-scaling-stroke" />
        </svg>
        {nodes.map((p) => (
          <div
            key={p.n}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <p className={`text-xs ${p.active ? "font-bold" : "font-light"}`}>{p.n}</p>
            <p className={`mt-1 text-[10px] uppercase whitespace-nowrap md:text-xs ${p.active ? "font-bold" : "font-light"}`}>{p.label}</p>
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 size-[96px] -translate-x-1/2 -translate-y-1/2 md:size-[122px]">
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite]" aria-hidden>
            <span className="absolute left-1/2 top-1/2 h-px w-[90px] origin-left bg-ink md:w-[120px]" />
          </div>
          <div className="relative flex size-full flex-col items-center justify-center rounded-full bg-ink text-center text-cream shadow-[0_20px_40px_-20px_rgba(52,73,72,0.6)]">
            <span className="text-[10px] font-bold tracking-wide text-[#a2bdba] md:text-xs">TAXSWAMI</span>
            <span className="text-base leading-tight font-medium md:text-[20px]">ALWAYS</span>
            <span className="text-base leading-tight font-medium md:text-[20px]">ON</span>
          </div>
        </div>
      </div>
      <div className="mt-8 overflow-hidden border-y border-line py-3" aria-hidden>
        <div className="flex w-max animate-marquee whitespace-nowrap text-xs font-bold uppercase">
          <span>{ticker.repeat(4)}</span>
          <span>{ticker.repeat(4)}</span>
        </div>
      </div>
    </div>
  );
}
