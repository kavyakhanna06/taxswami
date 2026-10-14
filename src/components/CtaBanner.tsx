import { Container, PillButton } from "./ui";

const steps = [
  { label: "01 / Bring", title: "The real question", text: "A deadline, decision, notice, or backlog." },
  { label: "02 / Clarify", title: "The priority", text: "What matters now—and what can wait." },
  { label: "03 / Leave with", title: "The next move", text: "A practical first action and the right support." },
];

/** Dark "Your Finances. Our Expertise." panel shown at the bottom of most pages. */
export function CtaBanner({ eyebrow = "Let's talk", withSteps = false }: { eyebrow?: string; withSteps?: boolean }) {
  return (
    <section className="py-16 md:py-[100px]">
      <Container>
        <div className="rounded-[28px] bg-ink px-6 py-10 text-cream md:rounded-[40px] md:px-10 md:py-10">
          <div className="flex items-center justify-between border-b border-cream/30 pb-5 md:ml-[30px]">
            <p className="eyebrow">{eyebrow}</p>
            <p className="text-sm font-light md:text-base">30 MIN · NO PRESSURE</p>
          </div>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-[40px] leading-[1.1] md:text-[54px]">
                Your Finances.
                <br />
                Our Expertise.
              </h2>
              <p className="mt-4 max-w-[488px] text-base leading-[1.2] font-light">
                From tax planning to compliance and financial consultancy, we’re here to help you move forward with clarity and confidence.
              </p>
            </div>
            <PillButton tone="light" />
          </div>
          {withSteps && (
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.label} className="border-t border-cream/30 pt-5">
                  <p className="text-sm font-normal uppercase">{s.label}</p>
                  <p className="mt-3 text-[22px] font-medium md:text-[26px]">{s.title}</p>
                  <p className="mt-2 text-base font-light">{s.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
