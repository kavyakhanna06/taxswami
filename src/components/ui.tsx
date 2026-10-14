import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M4 12h16m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Pill "Book a consultation" style button. `tone="light"` for use on dark panels. */
export function PillButton({
  href = "/contact",
  children = "Book a consultation",
  tone = "dark",
  className = "",
}: {
  href?: string;
  children?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const colors =
    tone === "dark" ? "bg-ink text-cream hover:bg-ink-soft" : "bg-cream text-ink hover:bg-white";
  return (
    <Link
      href={href}
      className={`inline-flex h-9 items-center gap-2.5 rounded-full px-7 text-[18px] font-light whitespace-nowrap transition-colors ${colors} ${className}`}
    >
      {children}
      <ArrowRight className="size-5" />
    </Link>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1300px] px-5 md:px-8 xl:px-0 ${className}`}>{children}</div>;
}

/** Eyebrow label on the left, short supporting copy on the right. */
export function SectionIntro({
  eyebrow,
  title,
  aside,
  asideLabel,
  dark = false,
  titleSize = "md",
}: {
  eyebrow: string;
  title?: ReactNode;
  aside?: ReactNode;
  asideLabel?: string;
  dark?: boolean;
  titleSize?: "md" | "lg";
}) {
  const text = dark ? "text-cream" : "text-ink";
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-start md:justify-between ${text}`}>
      <div className="max-w-[560px]">
        <p className="eyebrow">{eyebrow}</p>
        {title && (
          <h2
            className={`mt-4 font-display leading-[1.1] ${titleSize === "lg" ? "text-[40px] md:text-[54px]" : "text-[32px] md:text-[40px]"}`}
          >
            {title}
          </h2>
        )}
      </div>
      {aside && (
        <div className="max-w-[326px] md:pt-0">
          <p className="text-base leading-[1.2] font-light">{aside}</p>
          {asideLabel && (
            <p
              className={`mt-5 inline-block rounded-md px-1 text-sm font-normal uppercase ${dark ? "bg-cream text-ink" : "bg-cream text-ink"}`}
            >
              {asideLabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/** Decorative quarter-circle mark used on the service cards. */
export function PetalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <path d="M0 0h50a50 50 0 0 1-50 50Z" fill="currentColor" />
      <path d="M100 0v50A50 50 0 0 1 50 0Z" fill="currentColor" />
      <path d="M0 100V50a50 50 0 0 1 50 50Z" fill="currentColor" />
      <path d="M100 100H50a50 50 0 0 1 50-50Z" fill="currentColor" />
    </svg>
  );
}
