import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { IncomeTaxCalculator } from "@/components/IncomeTaxCalculator";

export const metadata: Metadata = {
  title: "Income Tax Calculator",
  description: "Estimate your income tax for AY 2026-27 and compare the old and new tax regimes.",
};

export default function IncomeTaxCalculatorPage() {
  return (
    <section className="py-12 md:py-[60px]">
      <Container className="max-w-[1200px]">
        <IncomeTaxCalculator />
      </Container>
    </section>
  );
}
