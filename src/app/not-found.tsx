import Link from "next/link";
import { Container, PillButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-[44px] leading-tight md:text-[64px]">This page doesn&apos;t exist.</h1>
        <p className="mx-auto mt-4 max-w-[420px] text-base font-light">
          The link may be old, or the page may have moved. Start from home or tell us what you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className="text-base underline underline-offset-4">Back to home</Link>
          <PillButton />
        </div>
      </Container>
    </section>
  );
}
