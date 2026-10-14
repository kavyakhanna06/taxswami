import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Complex tax matters. Clear, confident decisions. Talk to Tax Swami about income tax, GST, audits, accounting and corporate compliance.",
};

const steps = [
  { label: "01 / Read", title: "We read the brief.", text: "A team member reviews the context and the date that matters most." },
  { label: "02 / Reply", title: "A real person replies.", text: "Your Taxswami team confirms the next step within one business day." },
  { label: "03 / Map", title: "We map next move.", text: "You leave the first conversation knowing exactly what happens next." },
];

const pretty = (p: string) => p.replace(/^\+91(\d{10})$/, "+91 $1");

export default function ContactPage() {
  return (
    <>
      <section className="pt-14 md:pt-[60px]">
        <Container>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[820px]">
              <p className="eyebrow">Direct line / Open file</p>
              <h1 className="mt-4 font-display font-medium text-[40px] leading-[1.1] md:text-[54px]">
                Complex tax matters. Clear, confident decisions.
              </h1>
              <p className="mt-6 max-w-[820px] text-base leading-[1.2] font-light">
                From income tax and GST to audits, accounting, corporate compliance, and tax litigation, Tax Swami helps individuals and businesses navigate financial and regulatory complexity with precision. Bring us the problem. We&apos;ll help you find the way forward.
              </p>
            </div>
            <aside className="w-full shrink-0 rounded-[24px] bg-ink p-7 text-cream md:w-[334px]">
              <div className="flex items-center justify-between text-xs font-normal uppercase">
                <span>Direct line</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-cream" /> Open</span>
              </div>
              <p className="mt-6 font-display font-medium text-[32px] leading-[1.1]">Talk to a real person, not a portal.</p>
              <p className="mt-5 text-sm font-light">We reply within one business day and confirm the next clear step.</p>
              <div className="mt-5 space-y-2.5">
                <a href={`mailto:${site.email}`} className="block rounded-lg bg-cream py-1.5 text-center text-sm font-light text-ink hover:bg-white">{site.email}</a>
                {site.phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block rounded-lg bg-cream py-1.5 text-center text-sm font-light text-ink hover:bg-white">{pretty(p)}</a>
                ))}
              </div>
            </aside>
          </div>

          <ol className="mt-16 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
            {steps.map((s) => (
              <li key={s.label} className="border-b border-line px-0 py-7 last:border-b-0 md:border-b-0 md:px-6">
                <p className="text-xs font-normal uppercase">{s.label}</p>
                <p className="mt-4 text-[22px] font-medium">{s.title}</p>
                <p className="mt-3 text-sm font-light">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="form" className="scroll-mt-24 py-16 md:py-[100px]">
        <Container>
          <div className="grid gap-10 rounded-[28px] bg-ink p-5 text-cream md:grid-cols-[1fr_1.15fr] md:rounded-[24px] md:p-7">
            <div className="md:pl-7 md:pt-2">
              <p className="eyebrow">Open a file / Start here</p>
              <h2 className="mt-4 font-display font-medium text-[32px] leading-[1.15] md:text-[40px]">Give us the shape of the problem.</h2>
              <p className="mt-5 max-w-[300px] text-base leading-[1.2] font-light">No polished brief required. A few honest details are enough.</p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <Faq />
      <CtaBanner />
    </>
  );
}
