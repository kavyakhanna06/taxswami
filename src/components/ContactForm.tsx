"use client";

import { useState } from "react";
import { categories, site } from "@/lib/site";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

const field =
  "w-full rounded-full border border-ink/25 bg-transparent px-4 py-3.5 text-sm font-light placeholder:text-ink/45 focus:border-ink focus:outline-none";
const label = "mb-2 block text-xs font-semibold";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus({ kind: "sent" });
        e.currentTarget?.reset();
        return;
      }
      const json = await res.json().catch(() => ({}));
      if (res.status === 400) {
        setStatus({ kind: "error", message: json.error });
        return;
      }
    } catch {
      // network failure: fall through to the email fallback
    }

    // Email sending isn't set up (or failed): open a pre-filled email instead.
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service || "-"}`,
      `Business type: ${data.businessType || "-"}`,
      "",
      data.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`;
    setStatus({ kind: "sent", message: "Your email app should open with the details filled in. Send it and we’ll reply within one business day." });
  }

  if (status.kind === "sent") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[24px] bg-cream p-8 text-center text-ink">
        <p className="font-display font-medium text-[28px]">Thank you.</p>
        <p className="mt-3 max-w-[360px] text-base font-light">
          {status.message ?? "We’ve got your note. A real person will reply within one business day."}
        </p>
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="mt-6 text-sm underline underline-offset-4">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] bg-cream p-5 text-ink md:p-7" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Name</label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder="Enter your name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>Phone Number</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+ 91" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-email" className={label}>Email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" className={field} />
        </div>
        <div>
          <label htmlFor="cf-service" className={label}>Service</label>
          <select id="cf-service" name="service" defaultValue="" className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22><path d=%22m3 4.5 3 3 3-3%22 fill=%22none%22 stroke=%22%23344948%22/></svg>')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat`}>
            <option value="" disabled>Select…</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.title}>{c.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-type" className={label}>Business type</label>
          <select id="cf-type" name="businessType" defaultValue="" className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22><path d=%22m3 4.5 3 3 3-3%22 fill=%22none%22 stroke=%22%23344948%22/></svg>')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat`}>
            <option value="" disabled>Select…</option>
            <option>Individual</option>
            <option>Small business</option>
            <option>Corporation</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={label}>How can we help?</label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            placeholder="Tell us what changed, what date matters, and what a useful outcome would look like."
            className={`${field} rounded-2xl`}
          />
        </div>
        {/* honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>
      {status.kind === "error" && <p className="mt-4 text-sm text-red-800" role="alert">{status.message}</p>}
      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="mt-6 w-full rounded-full bg-ink py-2.5 text-base font-light text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
