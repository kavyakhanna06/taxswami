import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { GstCalculator } from "@/components/GstCalculator";

export const metadata: Metadata = {
  title: "GST Calculator",
  description: "Add or remove GST and see the taxable amount, CGST, SGST or IGST and the total payable.",
};

export default function GstCalculatorPage() {
  return (
    <section className="py-12 md:py-[60px]">
      <Container>
        <GstCalculator />
      </Container>
    </section>
  );
}
