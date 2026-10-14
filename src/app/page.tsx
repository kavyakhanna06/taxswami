import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/site";
import { ArrowUpRight, Container, PillButton, SectionIntro } from "@/components/ui";
import { HeroBanner } from "@/components/HeroBanner";
import { Stats } from "@/components/Stats";
import { StorySection } from "@/components/StorySection";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";

const process = [
  { label: "01 / Talk", title: "Initial Consultation", text: "Discuss your needs and get expert guidance with a tailored consultation." },
  { label: "02 / Plan", title: "Tailored Planning", text: "Customized strategies, precise execution, optimal results." },
  { label: "03 / Act", title: "Implementation", text: "Effective execution for successful outcomes." },
  { label: "04 / Check", title: "Review & Optimize", text: "Optimize processes for efficiency, quality & excellence." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-5">
        <Container>
          <HeroBanner />
          <div className="mt-10 flex flex-col gap-10 md:mt-20 md:flex-row md:items-end md:justify-between">
            <div>
              <PillButton />
              <h1 className="mt-3 max-w-[600px] font-display font-normal text-[48px] leading-[1.1] md:text-[74px]">
                Tax and legal advisory partner.
              </h1>
            </div>
            <div className="max-w-[360px]">
              <p className="text-base leading-[1.2] font-light">
                Helping individuals and businesses navigate complex tax and financial matters with clarity and confidence.
              </p>
              <div className="mt-6 inline-flex items-stretch gap-4 bg-cream p-4">
                <div>
                  <div className="flex -space-x-3.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Image
                        key={n}
                        src={`/images/person-${n}.jpg`}
                        alt=""
                        width={42}
                        height={42}
                        className="size-[42px] rounded-full border-2 border-cream object-cover"
                      />
                    ))}
                  </div>
                  <p className="mt-2 flex items-end gap-2">
                    <span className="font-display font-medium text-[40px] leading-none">2K+</span>
                    <span className="w-[80px] text-xs leading-tight font-light">Happy clients and business</span>
                  </p>
                </div>
                <Link href="#services" className="flex w-[120px] items-start justify-between bg-paper p-2 text-base leading-[1.2] font-light hover:bg-white">
                  Explore services <ArrowUpRight className="size-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
          <Stats className="mt-16" />
        </Container>
      </section>

      <StorySection />

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-ink py-16 text-cream md:py-[100px]">
        <Container>
          <SectionIntro
            dark
            eyebrow="Services"
            aside="Start with the support you need today. Every service connects with the next, without making you repeat your story."
            asideLabel="06 Connected service paths"
          />
          <ul className="mt-16 border-t border-cream/25">
            {categories.map((c, i) => (
              <li key={c.slug} className="border-b border-cream/25">
                <Link
                  href={`/${c.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 gap-y-1 py-7 md:grid-cols-[64px_1fr_1fr_auto] md:px-4 md:py-[45px]"
                >
                  <span className="text-[22px] font-medium md:text-[26px]">0{i + 1}</span>
                  <span className="text-[22px] font-medium transition-transform group-hover:translate-x-2 md:text-[26px]">{c.title}</span>
                  <span className="col-start-2 text-sm font-light opacity-80 md:col-start-3">{c.tagline}</span>
                  <span className="row-span-2 row-start-1 col-start-3 flex size-11 items-center justify-center rounded-full border border-cream/50 transition-colors group-hover:bg-cream group-hover:text-ink md:col-start-4 md:row-span-1">
                    <ArrowUpRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-[100px]">
        <Container>
          <SectionIntro
            eyebrow="How it works"
            aside="We've designed a streamlined approach to ensure you get the best results, tailored to your specific needs."
            asideLabel="Call/ plan/ implement/ review"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-[328px_1fr]">
            <div className="flex flex-col justify-center rounded-[28px] bg-ink p-8 text-cream">
              <p className="text-sm font-normal uppercase">Your path to success</p>
              <p className="mt-6 text-[40px] font-medium leading-none">01-04</p>
              <p className="mt-4 text-base leading-[1.2] font-light">A structured, step-by-step process to turn your goals into real results.</p>
              <ul className="mt-14 space-y-4 text-sm font-normal uppercase">
                {process.map((p) => (
                  <li key={p.title} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-cream" /> {p.title}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="divide-y divide-line rounded-[28px] border border-line">
              {process.map((p) => (
                <li key={p.title} className="flex flex-col gap-3 px-6 py-7 md:flex-row md:items-center md:gap-6 md:px-10 md:py-[44px]">
                  <span className="inline-flex w-[104px] shrink-0 justify-center rounded-full bg-cream/40 py-2 text-sm font-normal uppercase">
                    {p.label}
                  </span>
                  <span>
                    <span className="block text-[22px] font-medium md:text-[26px]">{p.title}</span>
                    <span className="mt-1.5 block text-sm font-light">{p.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-[100px]">
        <Container>
          <SectionIntro
            eyebrow="Client experience"
            title="Good work leaves a paper trail."
            aside="Clients value clear communication, orderly processes, and advice that connects today’s work with the next decision."
          />
          <figure className="mt-14 rounded-[28px] bg-ink px-6 py-10 text-cream md:rounded-[40px] md:px-10 md:py-11">
            <blockquote className="mt-10 font-display font-medium text-[28px] leading-[1.15] md:text-[40px]">
              Tax Swami made our tax process simple and stress-free. Their expert guidance and support gave us complete confidence.
            </blockquote>
            <figcaption className="mt-16 md:mt-[100px]">
              <p className="text-[22px] font-medium md:text-[26px]">Mukesh Kumar</p>
              <p className="mt-2 text-sm font-normal uppercase">Business Client</p>
            </figcaption>
          </figure>
        </Container>
      </section>

      <Faq />
      <CtaBanner eyebrow="A clearer next move" withSteps />
    </>
  );
}
