"use client";

import { useMemo, useRef, useState } from "react";
import { computeTax, inr, type Age, type Category, type Regime, type Residency, type TaxInput } from "@/lib/tax";

type Form = Record<keyof TaxInput, string> & { act: string; year: string; regime: Regime };

const initial: Form = {
  act: "1961",
  year: "2026-27",
  category: "individual",
  age: "below60",
  residency: "resident",
  regime: "new",
  salary: "1200000",
  houseProperty: "",
  business: "",
  otherSources: "",
  stcg: "",
  ltcg: "",
  capitalGainsRate: "20",
  standardDeduction: "75000",
  sec80C: "",
  sec80CCD1B: "",
  sec80D: "",
  homeLoanInterest: "",
  educationLoanInterest: "",
  otherDeductions: "",
  taxCredits: "",
};

const inputCls =
  "w-full rounded-lg border border-line bg-paper px-3 py-3 text-sm font-light focus:border-ink focus:outline-none";

function Card({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 md:p-6">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="mt-1 text-xs font-light">{sub}</p>
      <div className="mt-5 grid gap-x-4 gap-y-5 sm:grid-cols-2">{children}</div>
    </section>
  );
}

export function IncomeTaxCalculator() {
  const [mode, setMode] = useState<"basic" | "advanced">("basic");
  const [f, setF] = useState<Form>(initial);
  const resultRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const input: TaxInput = useMemo(() => {
    const num = (k: keyof TaxInput) => Number(f[k]) || 0;
    return {
      category: f.category as Category,
      age: f.age as Age,
      residency: f.residency as Residency,
      salary: num("salary"),
      houseProperty: num("houseProperty"),
      business: num("business"),
      otherSources: num("otherSources"),
      stcg: num("stcg"),
      ltcg: num("ltcg"),
      capitalGainsRate: num("capitalGainsRate"),
      standardDeduction: num("standardDeduction"),
      sec80C: num("sec80C"),
      sec80CCD1B: num("sec80CCD1B"),
      sec80D: num("sec80D"),
      homeLoanInterest: num("homeLoanInterest"),
      educationLoanInterest: num("educationLoanInterest"),
      otherDeductions: num("otherDeductions"),
      taxCredits: mode === "advanced" ? num("taxCredits") : 0,
    };
  }, [f, mode]);

  const results = useMemo(() => ({ new: computeTax(input, "new"), old: computeTax(input, "old") }), [input]);
  const r = results[f.regime];
  const other = results[f.regime === "new" ? "old" : "new"];
  const saving = Math.abs(results.old.payable - results.new.payable);
  const better: Regime | null = results.new.payable === results.old.payable ? null : results.new.payable < results.old.payable ? "new" : "old";

  const money = (k: keyof TaxInput, label: string, hint?: string) => (
    <div>
      <label className="mb-2 block text-xs font-semibold">{label}</label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">₹</span>
        <input type="number" inputMode="numeric" min={0} value={f[k]} onChange={set(k)} className={`${inputCls} pl-7`} />
      </div>
      {hint && <p className="mt-1.5 text-[11px] font-light">{hint}</p>}
    </div>
  );
  const select = (k: keyof Form, label: string, options: [string, string][]) => (
    <div>
      <label className="mb-2 block text-xs font-semibold">{label}</label>
      <select value={f[k]} onChange={set(k)} className={inputCls}>
        {options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
    </div>
  );

  const rows: [string, number][] = [
    ["Gross Income", r.grossIncome],
    ["Taxable Income", r.taxableIncome],
    ["Income Tax", r.incomeTax],
    ["87A Rebate", r.rebate87A],
    ["Capital Gains Tax", r.capitalGainsTax],
    ["Surcharge", r.surcharge],
    ["Health & Education Cess", r.cess],
    ["Tax Credits", r.taxCredits],
  ];

  return (
    <div className="rounded-3xl bg-white/50 p-4 md:p-8">
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase">Income tax calculator</p>
      <h1 className="mt-2 text-[32px] font-semibold tracking-tight md:text-[38px]">Income Tax Calculator</h1>
      <p className="mt-2 text-sm font-light">Estimate your income tax liability and compare the old and new tax regimes.</p>

      <div className="mt-6 grid grid-cols-2 rounded-xl border border-line bg-white p-1 text-sm font-medium" role="tablist">
        {(["basic", "advanced"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-lg py-2.5 transition-colors ${mode === m ? "bg-ink text-cream" : "hover:bg-paper"}`}
          >
            {m === "basic" ? "Basic Calculator" : "Advanced Calculator"}
          </button>
        ))}
      </div>

      <div className="mt-5 grid items-start gap-5 lg:grid-cols-[1fr_340px]">
        <div className="space-y-5">
          <Card title="Basic Information" sub="Enter your tax profile and applicable regime.">
            {select("act", "Applicable Act", [["1961", "Income Tax Act, 1961"], ["2025", "Income Tax Act, 2025"]])}
            {select("year", "Assessment Year", [["2026-27", "2026–27"]])}
            {select("category", "Taxpayer Category", [["individual", "Individual"], ["huf", "HUF"]])}
            {select("age", "Age", [["below60", "Below 60 years"], ["60to79", "60–79 years"], ["80plus", "80 years or above"]])}
            {select("residency", "Residential Status", [["resident", "Resident"], ["nonresident", "Non-Resident"], ["rnor", "RNOR"]])}
            {select("regime", "Preferred Tax Regime", [["new", "New Tax Regime"], ["old", "Old Tax Regime"]])}
          </Card>

          <Card title="Income Details" sub="Enter income under each applicable head.">
            {money("salary", "Salary Income")}
            {money("houseProperty", "House Property Income")}
            {money("business", "Business / Profession Income")}
            {money("otherSources", "Income from Other Sources")}
          </Card>

          <Card title="Capital Gains" sub="Capital gains are calculated separately from normal slab income.">
            {money("stcg", "Short-Term Capital Gains")}
            {money("ltcg", "Long-Term Capital Gains")}
            <div>
              <label className="mb-2 block text-xs font-semibold">Capital Gain Tax Rate</label>
              <div className="relative">
                <input type="number" min={0} max={100} value={f.capitalGainsRate} onChange={set("capitalGainsRate")} className={`${inputCls} pr-8`} />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm">%</span>
              </div>
              <p className="mt-1.5 text-[11px] font-light">Enter the applicable special tax rate.</p>
            </div>
          </Card>

          <Card title="Deduction Details" sub="Deductions below are primarily applicable to the old regime.">
            {money("standardDeduction", "Standard Deduction", "Maximum ₹75,000 under the new regime.")}
            {money("sec80C", "PPF / LIC / 80C", "Maximum ₹1,50,000.")}
            {money("sec80CCD1B", "NPS — 80CCD(1B)", "Maximum ₹50,000.")}
            {money("sec80D", "Mediclaim — 80D", "Maximum depends on age and conditions.")}
            {money("homeLoanInterest", "Housing Loan Interest", "Self-occupied home loan limit considered up to ₹2,00,000.")}
            {money("educationLoanInterest", "Higher Education Loan Interest")}
            {money("otherDeductions", "Other Deductions")}
          </Card>

          {mode === "advanced" && (
            <Card title="Taxes Already Paid" sub="TDS, TCS, advance tax and self-assessment tax reduce what is still payable.">
              {money("taxCredits", "Tax Credits (TDS / TCS / Advance Tax)")}
            </Card>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="flex-1 rounded-xl bg-ink py-3 text-sm font-semibold text-cream hover:bg-ink-soft"
            >
              Calculate Tax
            </button>
            <button
              type="button"
              onClick={() => setF(initial)}
              className="rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold hover:bg-paper"
            >
              Reset
            </button>
          </div>
        </div>

        <div ref={resultRef} className="scroll-mt-24 space-y-5 lg:sticky lg:top-24" aria-live="polite">
          <div className="rounded-2xl bg-ink p-5 text-cream">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-light">Estimated Tax</p>
                <p className="mt-1 text-[32px] font-semibold leading-none">{inr(r.payable)}</p>
                <p className="mt-2 text-[11px] font-light opacity-80">Estimated total tax including cess.</p>
              </div>
              <span className="rounded-full bg-cream px-2.5 py-1 text-[10px] font-semibold uppercase text-ink">
                {f.regime === "new" ? "New regime" : "Old regime"}
              </span>
            </div>
            <dl className="mt-5 divide-y divide-cream/15 text-xs">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between py-2.5">
                  <dt className="font-light">{k}</dt>
                  <dd className="font-semibold">{inr(v)}</dd>
                </div>
              ))}
              <div className="flex justify-between pt-4">
                <dt className="font-light">Estimated Tax Payable</dt>
                <dd className="font-semibold">{inr(r.payable)}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5">
            <h2 className="text-base font-semibold">Old vs New Regime</h2>
            <p className="mt-1 text-xs font-light">Estimated tax under both regimes.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {(["new", "old"] as const).map((k) => (
                <div key={k} className={`rounded-xl border p-3 ${k === f.regime ? "border-ink bg-paper" : "border-line"}`}>
                  <p className="text-[11px] font-light">{k === "new" ? "New Regime" : "Old Regime"}</p>
                  <p className="mt-1 text-base font-semibold">{inr(results[k].payable)}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 rounded-lg bg-[#e6efe9] px-3 py-2 text-[11px] font-semibold text-[#2f6b4a]">
              {better ? `${better === "new" ? "New" : "Old"} regime saves ${inr(saving)}` : "Both regimes give the same tax"}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5">
            <h2 className="text-base font-semibold">Calculation Summary</h2>
            <dl className="mt-4 space-y-3 text-xs">
              <div className="flex justify-between"><dt className="font-light">Gross income</dt><dd className="font-semibold">{inr(r.grossIncome)}</dd></div>
              <div className="flex justify-between"><dt className="font-light">Total deductions</dt><dd className="font-semibold">{inr(r.totalDeductions)}</dd></div>
              <div className="flex justify-between"><dt className="font-light">Taxable income</dt><dd className="font-semibold">{inr(r.taxableIncome)}</dd></div>
              <div className="flex justify-between"><dt className="font-light">{f.regime === "new" ? "Old" : "New"} regime tax</dt><dd className="font-semibold">{inr(other.payable)}</dd></div>
            </dl>
          </div>

          <p className="rounded-2xl border border-line bg-white p-4 text-[11px] leading-snug font-light">
            This calculator provides an independent tax estimate for planning purposes. It is not an official Income Tax Department calculator and does not cover every special-rate income, exemption, deduction, interest provision or filing circumstance.
          </p>
        </div>
      </div>
    </div>
  );
}
