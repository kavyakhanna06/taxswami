import { Container, SectionIntro } from "./ui";

const expertise = ["Taxation & GST", "Audits & Assurance", "Corporate & Personal Tax", "Financial & Legal Consulting"];

const pillars = [
  { title: "Experienced Team", text: "Led by CA Vibha Gupta & Experts." },
  { title: "Comprehensive Solutions", text: "Tax, Finance & Legal Solutions." },
  { title: "Client-First Approach", text: "Strategies for Compliance & Growth." },
  { title: "Your Trusted Partner", text: "Guidance with Clarity & Care." },
];

/** "Who we are" intro, the dark "How we work differently" story card and the four pillars. */
export function StorySection() {
  return (
    <section className="py-16 md:py-[100px]">
      <Container>
        <SectionIntro
          eyebrow="Who we are"
          title="Your Trusted Partner in Tax & Financial Consultancy"
          aside="More than just numbers — we're your long-term financial partners, committed to your growth, compliance, and success."
          asideLabel="CA Vibha Gupta, Founder"
        />

        <div className="mt-14 flex flex-col gap-10 rounded-[28px] bg-ink px-6 py-10 text-cream md:mt-[60px] md:flex-row md:justify-between md:rounded-[40px] md:px-10 md:py-[52px]">
          <div className="max-w-[668px]">
            <div className="flex items-center justify-between md:block">
              <p className="text-sm font-normal uppercase">Our Story</p>
              <p className="text-sm font-normal uppercase md:hidden">● Since 2019</p>
            </div>
            <h2 className="mt-8 font-display text-[40px] leading-[1.1] md:text-[54px]">How we work differently</h2>
            <p className="mt-4 text-base leading-[1.2] font-light">
              CA Vibha Gupta, Founder of Tax Swami and Proprietor of Vibha Gupta &amp; Co., established the firm in 2019 with a vision to provide reliable and professional consultancy services.
            </p>
            <p className="mt-4 text-base leading-[1.2] font-light">
              At Tax Swami, our team of Chartered Accountants (CA), Cost &amp; Management Accountants (CMA), Advocates, and MBA professionals offers comprehensive solutions in taxation, accounting, financial management, and legal consulting.
            </p>
          </div>
          <div className="flex flex-col items-end gap-8">
            <p className="hidden text-sm font-normal uppercase md:block">● Since 2019</p>
            <div className="w-full rounded-[28px] bg-cream p-5 text-ink md:w-[348px]">
              <p className="text-sm font-normal uppercase">Our Expertise</p>
              <ol className="mt-5 space-y-4">
                {expertise.map((e, i) => (
                  <li key={e} className="flex items-center gap-5 border-b border-ink/15 pb-2 last:border-0">
                    <span className="text-[26px] font-medium leading-none">0{i + 1}</span>
                    <span className="text-base font-light">{e}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:mt-[60px] lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.title}>
              <p className="text-sm font-normal">0{i + 1}</p>
              <p className="mt-3 text-[22px] font-medium md:text-[26px]">{p.title}</p>
              <p className="mt-3 text-base font-light">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
