import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionIntro } from "@/components/ui";
import { AlwaysOn } from "@/components/AlwaysOn";
import { Stats } from "@/components/Stats";
import { StorySection } from "@/components/StorySection";
import { CtaBanner } from "@/components/CtaBanner";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Tax Swami brings tax, accounting, and advisory work into one clear relationship. Founded by CA Vibha Gupta in 2019.",
};

const principles = [
  { title: "Multidisciplinary expertise", text: "Across tax, legal, finance and more." },
  { title: "Tailored solutions", text: "Built around your unique needs." },
  { title: "Experienced team", text: "Skilled professionals, diverse backgrounds." },
  { title: "Integrity & trust", text: "Transparency in every step." },
  { title: "Quality consultancy", text: "Practical advice, real outcomes." },
  { title: "Quick resolution", text: "Focused on what matters, when it matters." },
  { title: "Confidentiality", text: "Your data, your trust, always." },
  { title: "Compliance awareness", text: "Always ahead of regulatory changes." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 md:pt-[60px]">
        <Container>
          <SectionIntro
            eyebrow="About us"
            title={<span className="block max-w-[556px]">A financial partner that learns how the work fits together.</span>}
            aside="We brings tax, accounting, and advisory work into one clear relationship. The result is less repetition, better context, and a next step clients can understand."
          />
          <div className="mt-12 grid items-center gap-10 border-t border-line pt-10 md:grid-cols-[452px_1fr] md:gap-6">
            <div>
              <p className="inline-block bg-cream px-1 text-sm font-normal uppercase">Active proof</p>
              <h2 className="mt-6 font-display text-[32px] leading-[1.1] md:mt-[230px] md:text-[40px]">Year-round support</h2>
              <p className="mt-4 text-base font-light">Questions do not wait for tax season. Neither do we.</p>
            </div>
            <AlwaysOn />
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-[100px]">
        <Container className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[650px]">
            <p className="eyebrow">Meet our founder</p>
            <h2 className="mt-6 font-display text-[40px] leading-[1.1] md:text-[54px]">
              Driven by purpose.
              <br />
              Guided by experience.
            </h2>
            <p className="mt-6 text-base leading-[1.3] font-light">
              Vibha Gupta founded Tax Swami with a simple belief: professional financial and legal guidance should be clear, accessible, and practical. With experience across taxation, litigation, finance, and corporate law, the approach focuses on understanding each situation thoroughly and providing clear, considered, and actionable advice. At Tax Swami, this philosophy extends to a multidisciplinary team with expertise in taxation, accounting, legal advisory, compliance, and business consulting. By bringing these perspectives together, we help individuals and businesses navigate complex financial, legal, and regulatory matters with greater clarity and confidence.
            </p>
            <p className="mt-6 inline-block bg-cream px-1 text-sm font-normal uppercase">CA Vibha Gupta, Founder</p>
          </div>
          <div className="relative aspect-[480/515] w-full shrink-0 overflow-hidden rounded-[28px] md:w-[480px]">
            <Image src="/images/founder.jpg" alt="Founder portrait" fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <Stats />
        </Container>
      </section>

      <StorySection />

      {/* Principles */}
      <section className="py-16 md:py-[100px]">
        <Container>
          <SectionIntro
            eyebrow="Why clients work with us"
            title="The principles that guide us."
            aside="We combine technical excellence with practical insight to help our clients achieve sustainable success and make confident financial and legal decisions."
          />
        </Container>
        <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:thin]">
          <ol className="mx-auto flex w-max snap-x snap-mandatory gap-4 px-5 md:px-[calc((100vw-1300px)/2+0px)] xl:px-[max(20px,calc((100vw-1300px)/2))]">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="relative flex h-[280px] w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl bg-ink p-5 text-cream md:w-[337px]"
              >
                <span className="text-sm font-normal">0{i + 1}</span>
                <span>
                  <span className="block text-[22px] font-medium md:text-[26px]">{p.title}</span>
                  <span className="mt-2 block text-base font-light">{p.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ink py-16 text-cream md:py-[100px]">
        <Container>
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-6 font-display text-[32px] leading-[1.1] md:text-[40px]">
            One team. Multiple disciplines.
            <br />
            One clear direction.
          </h2>
          <p className="mt-6 max-w-[560px] text-base leading-[1.2] font-light">
            We combine technical excellence with practical insight to help our clients achieve sustainable success and make confident financial and legal decisions.
          </p>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 md:py-[100px]">
        <Container>
          <SectionIntro
            eyebrow="Our Team"
            title="Meet Our Dedicated Team"
            aside="A dedicated group of professionals, each bringing depth, experience, and a shared commitment to your success."
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={i} className="relative aspect-[293/269] overflow-hidden rounded-2xl bg-ink">
                <Image src={m.photo} alt={m.name} fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-4 pt-10 text-center text-cream">
                  <p className="text-sm font-normal uppercase md:text-base">{m.name}</p>
                  <p className="text-xs font-normal">{m.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
