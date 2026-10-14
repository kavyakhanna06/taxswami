"use client";

import { useState } from "react";
import { computeGst, inr, type GstMode, type GstSplit } from "@/lib/tax";

// Rates offered on the original site. GST 2.0 (Sept 2025) moved most goods to 5%/18% with a 40% rate;
// add or remove rates here as needed.
const RATES = [5, 12, 18, 28];

export function GstCalculator() {
  const [mode, setMode] = useState<GstMode>("add");
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState(18);
  const [split, setSplit] = useState<GstSplit>("cgst-sgst");

  const r = computeGst(Number(amount) || 0, rate, mode);
  const half = rate / 2;
  const money = (v: number) => inr(v, 2);

  const seg = (active: boolean) =>
    `rounded-lg py-2.5 text-sm font-medium transition-colors ${active ? "bg-white shadow-sm" : "hover:bg-white/60"}`;

  return (
    <div className="grid overflow-hidden rounded-3xl border border-line bg-white/40 md:grid-cols-2">
      <div className="p-6 md:p-8">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase">Tax Tool</p>
        <h1 className="mt-2 text-[28px] font-semibold tracking-tight">GST Calculator</h1>
        <p className="mt-2 max-w-[440px] text-sm font-light">
          Calculate GST instantly and see the taxable amount, tax breakdown and final payable amount.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl bg-sand/60 p-1" role="tablist">
          <button type="button" role="tab" aria-selected={mode === "add"} className={seg(mode === "add")} onClick={() => setMode("add")}>
            Add GST
          </button>
          <button type="button" role="tab" aria-selected={mode === "remove"} className={seg(mode === "remove")} onClick={() => setMode("remove")}>
            Remove GST
          </button>
        </div>

        <label htmlFor="gst-amount" className="mt-6 block text-xs font-semibold">
          {mode === "add" ? "Amount before GST" : "Amount including GST"}
        </label>
        <div className="relative mt-2">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm">₹</span>
          <input
            id="gst-amount"
            type="number"
            inputMode="decimal"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-line bg-white py-3.5 pl-9 pr-4 text-base focus:border-ink focus:outline-none"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="gst-rate" className="block text-xs font-semibold">GST rate</label>
            <select
              id="gst-rate"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm focus:border-ink focus:outline-none"
            >
              {RATES.map((v) => (
                <option key={v} value={v}>{v}%</option>
              ))}
            </select>
          </div>
          <div>
            <p className="block text-xs font-semibold">Tax type</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(["cgst-sgst", "igst"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={split === s}
                  onClick={() => setSplit(s)}
                  className={`rounded-xl border py-3.5 text-xs font-semibold ${split === s ? "border-sand bg-sand" : "border-line bg-white hover:bg-paper"}`}
                >
                  {s === "igst" ? "IGST" : "CGST + SGST"}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-[11px] font-light">
          For intra-state transactions, GST is split equally between CGST and SGST. For inter-state transactions, the full amount is IGST.
        </p>
      </div>

      <div className="flex flex-col justify-between border-t border-line p-6 md:border-l md:border-t-0 md:p-8" aria-live="polite">
        <div>
          <p className="text-xs font-semibold">Total including GST</p>
          <p className="mt-1 text-[36px] font-semibold tracking-tight">{money(r.total)}</p>
          <dl className="mt-4 divide-y divide-line border-y border-line text-xs">
            <div className="flex justify-between py-3"><dt className="font-light">Taxable amount</dt><dd className="font-semibold">{money(r.taxable)}</dd></div>
            {split === "cgst-sgst" ? (
              <>
                <div className="flex justify-between py-3"><dt className="font-light">CGST ({half}%)</dt><dd className="font-semibold">{money(r.gst / 2)}</dd></div>
                <div className="flex justify-between py-3"><dt className="font-light">SGST ({half}%)</dt><dd className="font-semibold">{money(r.gst / 2)}</dd></div>
              </>
            ) : (
              <div className="flex justify-between py-3"><dt className="font-light">IGST ({rate}%)</dt><dd className="font-semibold">{money(r.gst)}</dd></div>
            )}
            <div className="flex justify-between py-3"><dt className="font-light">Total GST</dt><dd className="font-semibold">{money(r.gst)}</dd></div>
          </dl>
        </div>
        <p className="mt-10 text-[11px] font-light">
          This calculator is for general estimation purposes only. Actual GST treatment can depend on the nature and place of supply.
        </p>
      </div>
    </div>
  );
}
