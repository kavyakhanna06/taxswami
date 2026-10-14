import Image from "next/image";

const phrase = "Tax and legal advisory partner.   ·   ";

/** Hero photo with a cream ribbon of scrolling text curving across it. */
export function HeroBanner() {
  const text = phrase.repeat(14);
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[28px] md:h-[340px] md:rounded-[40px]">
      <Image
        src="/images/hero.jpg"
        alt="Advisor reviewing tax documents with a calculator"
        fill
        priority
        sizes="(min-width: 1300px) 1300px, 100vw"
        className="object-cover grayscale"
      />
      <svg
        viewBox="0 0 1300 340"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
        aria-hidden
      >
        <defs>
          <path id="hero-curve" d="M-200 330 C 200 260, 420 120, 760 150 S 1260 60, 1520 -40" />
        </defs>
        <use href="#hero-curve" fill="none" stroke="#f7f5f4" strokeWidth="46" strokeLinecap="round" />
        <text className="font-display" fontSize="26" fill="#344948" dy="9">
          <textPath href="#hero-curve" startOffset="0">
            {text}
            <animate attributeName="startOffset" from="0" to="-1240" dur="22s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
      <p className="sr-only">Tax and legal advisory partner.</p>
    </div>
  );
}
