import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getService } from "@/lib/site";
import { Container, PillButton } from "@/components/ui";
import { CtaBanner } from "@/components/CtaBanner";
import { RelatedServices } from "@/components/RelatedServices";

export function generateStaticParams() {
  return categories.flatMap((c) => c.services.map((s) => ({ category: c.slug, service: s.slug })));
}

async function resolve(params: PageProps<"/[category]/[service]">["params"]) {
  const { category, service } = await params;
  const slug = decodeURIComponent(service);
  return { category: getCategory(category), service: getService(category, slug) };
}

export async function generateMetadata({ params }: PageProps<"/[category]/[service]">): Promise<Metadata> {
  const { service } = await resolve(params);
  if (!service) return {};
  const firstPara = service.html.match(/<p>(.*?)<\/p>/)?.[1]?.replace(/<[^>]+>/g, "") ?? "";
  return { title: service.title, description: firstPara.slice(0, 160) };
}

const trust = [
  { label: "Deadline-aware filings", icon: <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6Z" /> },
  { label: "Clear scope and fees", icon: <path d="M12 4v16M16 8.5c0-1.7-1.8-2.5-4-2.5s-4 .8-4 2.7c0 3.8 8 2 8 5.8 0 1.9-1.8 2.9-4 2.9s-4-.9-4-2.6" strokeLinecap="round" /> },
  { label: "Privacy-aware process", icon: <><rect x="6" y="10.5" width="12" height="9" rx="2" /><path d="M9 10.5V8a3 3 0 0 1 6 0v2.5" /></> },
];

const moves = [
  { title: "Initial consultation", text: "Tell us about your needs and we’ll confirm this is the right fit." },
  { title: "Onboarding", text: "We set up the engagement, gather the right information, and confirm the responsible advisor." },
  { title: "Ongoing support", text: "We handle the work and stay available year-round for questions." },
];

export default async function ServicePage({ params }: PageProps<"/[category]/[service]">) {
  const { category, service } = await resolve(params);
  if (!category || !service) notFound();

  return (
    <>
      <section className="pt-10 md:pt-[60px]">
        <Container className="max-w-[1250px]">
          <Link href={`/${category.slug}`} className="inline-flex items-center gap-2 text-base font-light hover:opacity-70">
            <span aria-hidden>←</span> Back
          </Link>

          <div className="mt-8 flex flex-col gap-10 md:mt-10 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-6">
              <div className="hidden w-[120px] shrink-0 overflow-hidden rounded-xl border border-ink text-center sm:block">
                <p className="bg-sand py-1.5 text-xs font-normal uppercase">Tax Swami</p>
                <p className="bg-ink py-3 font-display font-medium text-[40px] leading-none text-cream">{service.number}</p>
                <p className="bg-sand py-1.5 text-xs font-normal uppercase">Service</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase">Your service dossier</p>
                <h1 className="mt-2 max-w-[560px] font-display font-medium text-[36px] leading-[1.1] md:text-[54px]">{service.title}</h1>
              </div>
            </div>

            <aside className="w-full shrink-0 rounded-[24px] bg-ink p-7 text-cream md:w-[334px]">
              <div className="flex items-center justify-between text-sm font-normal uppercase">
                <span>Let&apos;s talk</span>
                <span>30 min</span>
              </div>
              <p className="mt-8 text-center text-[26px] font-medium">Start with a clear plan.</p>
              <p className="mt-3 text-center text-base leading-[1.2] font-light">
                From tax planning to compliance and financial consultancy, we’re here to help you move forward with clarity and confidence.
              </p>
              <div className="mt-6 flex justify-center">
                <PillButton tone="light" />
              </div>
            </aside>
          </div>

          <ul className="mt-12 grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-14">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center justify-center gap-3 py-3 text-base font-light">
                <span className="flex size-9 items-center justify-center rounded-full bg-cream">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>{t.icon}</svg>
                </span>
                {t.label}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <article className="prose-service max-w-[760px]" dangerouslySetInnerHTML={{ __html: service.html }} />
            <aside className="rounded-[24px] bg-cream p-6 lg:sticky lg:top-24 lg:w-[334px] lg:shrink-0">
              <p className="text-xs font-light opacity-70">How the work moves</p>
              <p className="mt-2 font-display font-medium text-[28px] leading-tight">Three calm moves.</p>
              <p className="mt-2 text-sm font-light">A clear handoff from first conversation to year-round support.</p>
              <ol className="mt-6 divide-y divide-ink/15">
                {moves.map((m, i) => (
                  <li key={m.title} className="flex gap-5 py-5">
                    <span className="pt-1 text-sm font-normal">0{i + 1}</span>
                    <span>
                      <span className="block text-lg font-light">{m.title}</span>
                      <span className="mt-1 block text-sm font-light opacity-80">{m.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Container>
      </section>

      <RelatedServices services={category.services} />
      <CtaBanner />
    </>
  );
}
