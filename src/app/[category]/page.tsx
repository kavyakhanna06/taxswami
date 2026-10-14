import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/site";
import { Container } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[category]">): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return { title: c.title, description: `${c.tagline}. ${c.services.map((s) => s.title).join(", ")}.` };
}

export default async function CategoryPage({ params }: PageProps<"/[category]">) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  return (
    <section className="pb-20 pt-14 md:pb-[100px] md:pt-[60px]">
      <Container>
        <h1 className="text-center font-display text-[44px] leading-[1.05] md:text-[74px]">{c.title}</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
          {c.services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
