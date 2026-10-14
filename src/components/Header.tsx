"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { categories, site } from "@/lib/site";
import { PillButton } from "./ui";

const resourceLinks = [
  { href: "/income-tax-calculater", label: "Income Tax Calculator" },
  { href: "/gst-calculator", label: "GST Calculator" },
  { href: site.resourceLink, label: "Income Tax e-Filing portal", external: true },
];

type MenuKey = "services" | "resources" | null;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 12 12" className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
      <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on navigation, outside click and Escape.
  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setMenu(null), setMobileOpen(false));
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = (k: Exclude<MenuKey, null>) => setMenu((m) => (m === k ? null : k));

  return (
    <header ref={navRef} className="sticky top-0 z-40 border-b border-line/70 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] w-full max-w-[1300px] items-center justify-between px-5 md:px-8 xl:px-0">
        <Link href="/" className="font-display text-2xl font-medium tracking-tight">
          Tax Swami
        </Link>

        <nav className="hidden items-center gap-6 text-base font-light lg:flex" aria-label="Main">
          <Link href="/" className="hover:opacity-70">Home</Link>
          <Link href="/about" className="hover:opacity-70">About us</Link>

          <div className="relative" onMouseEnter={() => setMenu("services")} onMouseLeave={() => setMenu(null)}>
            <button
              type="button"
              className="flex items-center gap-1.5 hover:opacity-70"
              aria-expanded={menu === "services"}
              onClick={() => toggle("services")}
            >
              Services <Chevron open={menu === "services"} />
            </button>
            {menu === "services" && (
              <div className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3">
                <ul className="rounded-2xl border border-line bg-paper p-2 shadow-[0_18px_40px_-20px_rgba(52,73,72,0.35)]">
                  {categories.map((c, i) => (
                    <li key={c.slug}>
                      <Link
                        href={`/${c.slug}`}
                        className="flex items-baseline gap-3 rounded-xl px-3 py-2.5 hover:bg-sand"
                      >
                        <span className="text-xs font-normal tabular-nums opacity-60">0{i + 1}</span>
                        <span>{c.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setMenu("resources")} onMouseLeave={() => setMenu(null)}>
            <button
              type="button"
              className="flex items-center gap-1.5 hover:opacity-70"
              aria-expanded={menu === "resources"}
              onClick={() => toggle("resources")}
            >
              Tax Resource Bank <Chevron open={menu === "resources"} />
            </button>
            {menu === "resources" && (
              <div className="absolute left-1/2 top-full w-[280px] -translate-x-1/2 pt-3">
                <ul className="rounded-2xl border border-line bg-paper p-2 shadow-[0_18px_40px_-20px_rgba(52,73,72,0.35)]">
                  {resourceLinks.map((l) => (
                    <li key={l.href}>
                      {l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="block rounded-xl px-3 py-2.5 hover:bg-sand">
                          {l.label} ↗
                        </a>
                      ) : (
                        <Link href={l.href} className="block rounded-xl px-3 py-2.5 hover:bg-sand">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:opacity-70">Contact</Link>
        </nav>

        <div className="hidden lg:block">
          <PillButton />
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full bg-ink text-cream lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            {mobileOpen ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M4 8h16M4 16h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-100px)] overflow-y-auto border-t border-line bg-paper px-5 pb-8 pt-4 lg:hidden">
          <ul className="space-y-1 text-lg font-light">
            <li><Link href="/" className="block py-2">Home</Link></li>
            <li><Link href="/about" className="block py-2">About us</Link></li>
            <li>
              <p className="eyebrow mt-3 mb-1 opacity-70">Services</p>
              <ul>
                {categories.map((c) => (
                  <li key={c.slug}><Link href={`/${c.slug}`} className="block py-2 pl-4">{c.title}</Link></li>
                ))}
              </ul>
            </li>
            <li>
              <p className="eyebrow mt-3 mb-1 opacity-70">Tax Resource Bank</p>
              <ul>
                {resourceLinks.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="block py-2 pl-4">{l.label} ↗</a>
                    ) : (
                      <Link href={l.href} className="block py-2 pl-4">{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/contact" className="block py-2">Contact</Link></li>
          </ul>
          <PillButton className="mt-6" />
        </div>
      )}
    </header>
  );
}
