import Link from "next/link";
import { categories, site } from "@/lib/site";
import { PillButton } from "./ui";

function SocialIcon({ name }: { name: "instagram" | "whatsapp" | "youtube" | "x" }) {
  const paths: Record<string, React.ReactNode> = {
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" />
      </>
    ),
    whatsapp: (
      <path d="M5 19.5 6.1 16A7.6 7.6 0 1 1 9 18.7Zm4.3-10.6c-.3.6-.3 1.6.6 2.9s2.4 2.8 4 3.2c.9.3 1.5-.2 1.8-.7.2-.4 0-.7-.3-.9l-1.1-.6c-.3-.1-.5 0-.7.2l-.4.5c-.9-.3-1.9-1.2-2.3-2.1l.4-.4c.2-.2.2-.5.1-.7l-.5-1.2c-.2-.4-.5-.5-.9-.4-.3.1-.6.4-.7.9Z" strokeLinejoin="round" />
    ),
    youtube: (
      <>
        <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
        <path d="m10.5 9.8 3.8 2.2-3.8 2.2Z" fill="currentColor" stroke="none" />
      </>
    ),
    x: <path d="M5 5l14 14M19 5l-5.6 6.3M10.6 13.7 5 19" strokeLinecap="round" />,
  };
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      {paths[name]}
    </svg>
  );
}

const socials = [
  { name: "instagram", label: "Instagram" },
  { name: "whatsapp", label: "WhatsApp" },
  { name: "youtube", label: "YouTube" },
  { name: "x", label: "X" },
] as const;

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-cream">
      <div className="mx-auto w-full max-w-[1300px] px-5 pt-20 md:px-8 xl:px-0">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="space-y-4 text-base font-light">
            <p className="max-w-[305px] leading-[1.2]">{site.address}</p>
            <p><a href={`mailto:${site.email}`} className="hover:opacity-70">{site.email}</a></p>
            {site.phones.map((p) => (
              <p key={p}><a href={`tel:${p}`} className="hover:opacity-70">{p}</a></p>
            ))}
            <div className="flex gap-2.5 pt-2">
              {socials.map((s) => {
                const href = site.socials[s.name];
                const cls = "flex size-11 items-center justify-center rounded-full border border-cream/60";
                return href ? (
                  <a key={s.name} href={href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`${cls} hover:bg-cream hover:text-ink`}>
                    <SocialIcon name={s.name} />
                  </a>
                ) : (
                  <span key={s.name} className={cls} aria-hidden>
                    <SocialIcon name={s.name} />
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex gap-16 md:gap-[120px]">
            <div>
              <p className="text-sm font-normal uppercase text-cream/40">Explore</p>
              <ul className="mt-6 space-y-4 text-base font-light">
                <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                <li><Link href="/about" className="hover:opacity-70">About</Link></li>
                <li><Link href="/#services" className="hover:opacity-70">Services</Link></li>
                <li><Link href="/contact" className="hover:opacity-70">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-normal uppercase text-cream/40">What we handle</p>
              <ul className="mt-6 space-y-4 text-base font-light">
                {categories.map((c) => (
                  <li key={c.slug}><Link href={`/${c.slug}`} className="hover:opacity-70">{c.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-0">
          <span className="h-px flex-1 bg-cream/60" />
          <PillButton tone="light" />
        </div>
        <p className="mt-6 text-xs font-light">© {site.name} 2026 All Rights Reserved</p>
      </div>

      <div className="mt-14 flex w-max animate-marquee whitespace-nowrap" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="pr-[0.4em] font-display font-normal text-[96px] leading-[0.7] md:text-[200px]">
            Tax Swami
          </span>
        ))}
      </div>
    </footer>
  );
}
