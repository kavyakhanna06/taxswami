"use client";

import { useState } from "react";
import { Container } from "./ui";
import { faqs } from "@/content/faqs";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-[100px]">
      <Container className="grid gap-10 md:grid-cols-[340px_1fr] md:gap-[70px]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display text-[32px] leading-[1.1] md:text-[40px]">Money questions, decoded.</h2>
          <p className="mt-5 max-w-[326px] text-base leading-[1.2] font-light">
            Straight answers on pricing, process, notice support, and getting started - without the accounting fog.
          </p>
        </div>
        <ul className="divide-y divide-line border-b border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  type="button"
                  className="flex w-full items-start gap-5 py-6 text-left md:gap-7"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="pt-2 text-sm font-normal tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="block text-[20px] leading-tight font-medium md:text-[26px]">{f.q}</span>
                    <span
                      className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-2 text-base leading-[1.2] font-light">{f.a}</span>
                      </span>
                    </span>
                  </span>
                  <span
                    className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-ink transition-colors ${isOpen ? "bg-ink text-cream" : ""}`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 16 16" className={`size-3.5 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
