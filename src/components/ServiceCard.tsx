import Link from "next/link";
import type { Service } from "@/lib/site";
import { ArrowUpRight, PetalMark } from "./ui";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/${service.category}/${service.slug}`}
      className="group relative flex h-[148px] flex-col justify-between overflow-hidden rounded-xl bg-sand p-5 transition-colors hover:bg-cream md:h-[264px]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[26px] font-medium leading-none">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex size-7 items-center justify-center rounded-full border border-ink/40 transition-colors group-hover:bg-ink group-hover:text-cream">
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
      <PetalMark className="absolute -bottom-2 -right-2 size-[72px] text-sand-deep transition-transform duration-500 group-hover:rotate-90 md:size-[110px]" />
      <span className="relative max-w-[75%] text-base font-light">{service.title}</span>
    </Link>
  );
}
