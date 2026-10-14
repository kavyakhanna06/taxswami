const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "55+", label: "Awards Achievement" },
  { value: "11.7+", label: "No of Users" },
];

export function Stats({ className = "" }: { className?: string }) {
  return (
    <div className={`grid divide-y divide-line rounded-2xl border border-line md:grid-cols-3 md:divide-x md:divide-y-0 ${className}`}>
      {stats.map((s) => (
        <div key={s.label} className="px-7 py-6 md:py-7">
          <p className="font-display text-[44px] leading-none md:text-[54px]">{s.value}</p>
          <p className="mt-2 text-base font-light">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
