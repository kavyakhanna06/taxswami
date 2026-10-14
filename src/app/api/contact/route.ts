import { site } from "@/lib/site";

// Sends contact-form enquiries by email through Resend (https://resend.com).
// Setup: add RESEND_API_KEY in Vercel → Project → Settings → Environment Variables.
// Optional: CONTACT_TO (defaults to the site email) and CONTACT_FROM (a sender on a domain verified in Resend).
// Until RESEND_API_KEY is set this returns 503 and the form falls back to opening a pre-filled email.

type Enquiry = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  businessType?: string;
  message?: string;
  company?: string; // honeypot
};

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success.
  if (clean(body.company)) return Response.json({ ok: true });

  const e = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 200),
    service: clean(body.service, 80),
    businessType: clean(body.businessType, 80),
    message: clean(body.message, 4000),
  };
  if (!e.name || (!e.email && !e.phone)) {
    return Response.json({ error: "Please add your name and an email or phone number." }, { status: 400 });
  }
  if (e.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)) {
    return Response.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "Email sending is not configured" }, { status: 503 });

  const rows = [
    ["Name", e.name],
    ["Phone", e.phone],
    ["Email", e.email],
    ["Service", e.service],
    ["Business type", e.businessType],
    ["Message", e.message],
  ].filter(([, v]) => v);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Tax Swami website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO || site.email],
      reply_to: e.email || undefined,
      subject: `New enquiry from ${e.name}${e.service ? ` — ${e.service}` : ""}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "Could not send right now" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
