"use client";

import { useState } from "react";
import type { Service } from "@/lib/site";
import { ServiceCard } from "./ServiceCard";

export function RelatedServices({ services }: { services: Service[] }) {
  const [count, setCount] = useState(4);
  return (
    <section className="pt-16 md:pt-[100px]">
      <div className="mx-auto w-full max-w-[1250px] px-5 md:px-8 xl:px-0">
        <h2 className="text-center font-display font-medium text-[28px]">Related Services</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.slice(0, count).map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
        {count < services.length && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setCount((c) => c + 4)}
              className="rounded-full bg-ink px-7 py-2 text-base font-light text-cream hover:bg-ink-soft"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
