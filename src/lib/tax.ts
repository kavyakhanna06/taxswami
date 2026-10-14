// Income tax estimate for Tax Year / AY 2026-27 (FY 2025-26 rates, which the
// Income-tax Act, 2025 carries forward). Planning estimate only.

export type Regime = "new" | "old";
export type Age = "below60" | "60to79" | "80plus";
export type Category = "individual" | "huf";
export type Residency = "resident" | "nonresident" | "rnor";

export type TaxInput = {
  category: Category;
  age: Age;
  residency: Residency;
  salary: number;
  houseProperty: number;
  business: number;
  otherSources: number;
  stcg: number;
  ltcg: number;
  capitalGainsRate: number; // percent
  standardDeduction: number;
  sec80C: number;
  sec80CCD1B: number;
  sec80D: number;
  homeLoanInterest: number;
  educationLoanInterest: number;
  otherDeductions: number;
  taxCredits: number; // TDS / advance tax already paid
};

export type TaxResult = {
  regime: Regime;
  grossIncome: number;
  totalDeductions: number;
  taxableIncome: number; // normal-rate income after deductions
  incomeTax: number; // slab tax before rebate
  rebate87A: number;
  capitalGainsTax: number;
  surcharge: number;
  cess: number;
  taxCredits: number;
  totalTax: number; // tax + surcharge + cess, before credits
  payable: number; // after credits, never below 0
};

const n = (v: number) => (Number.isFinite(v) && v > 0 ? v : 0);

type Slab = [upTo: number, rate: number];

const NEW_SLABS: Slab[] = [
  [400000, 0],
  [800000, 0.05],
  [1200000, 0.1],
  [1600000, 0.15],
  [2000000, 0.2],
  [2400000, 0.25],
  [Infinity, 0.3],
];

function oldSlabs(age: Age, category: Category): Slab[] {
  const exempt = category === "huf" ? 250000 : age === "80plus" ? 500000 : age === "60to79" ? 300000 : 250000;
  return [
    [exempt, 0],
    [Math.max(exempt, 500000), 0.05],
    [1000000, 0.2],
    [Infinity, 0.3],
  ];
}

function slabTax(income: number, slabs: Slab[]) {
  let tax = 0;
  let lower = 0;
  for (const [upTo, rate] of slabs) {
    if (income <= lower) break;
    tax += (Math.min(income, upTo) - lower) * rate;
    lower = upTo;
  }
  return tax;
}

function surchargeRate(income: number, regime: Regime) {
  if (income > 50000000) return regime === "new" ? 0.25 : 0.37;
  if (income > 20000000) return 0.25;
  if (income > 10000000) return 0.15;
  if (income > 5000000) return 0.1;
  return 0;
}

export function computeTax(input: TaxInput, regime: Regime): TaxResult {
  const salary = n(input.salary);
  const gross = salary + n(input.houseProperty) + n(input.business) + n(input.otherSources);
  const gains = n(input.stcg) + n(input.ltcg);
  const grossIncome = gross + gains;

  // Deductions
  let deductions: number;
  if (regime === "new") {
    deductions = Math.min(n(input.standardDeduction), 75000, salary);
  } else {
    const seniorD = input.age === "below60" ? 25000 : 50000;
    deductions =
      Math.min(n(input.standardDeduction), 50000, salary) +
      Math.min(n(input.sec80C), 150000) +
      Math.min(n(input.sec80CCD1B), 50000) +
      Math.min(n(input.sec80D), seniorD) +
      Math.min(n(input.homeLoanInterest), 200000) +
      n(input.educationLoanInterest) +
      n(input.otherDeductions);
  }
  deductions = Math.min(deductions, gross);
  const taxableIncome = gross - deductions;

  const slabs = regime === "new" ? NEW_SLABS : oldSlabs(input.age, input.category);
  const incomeTax = slabTax(taxableIncome, slabs);

  // Section 87A: resident individuals only; applies to slab tax, not special-rate gains.
  let rebate87A = 0;
  if (input.category === "individual" && input.residency !== "nonresident") {
    if (regime === "new") {
      if (taxableIncome <= 1200000) rebate87A = Math.min(incomeTax, 60000);
      else rebate87A = Math.max(0, incomeTax - (taxableIncome - 1200000)); // marginal relief
    } else if (taxableIncome <= 500000) {
      rebate87A = Math.min(incomeTax, 12500);
    }
  }
  const slabAfterRebate = incomeTax - rebate87A;

  const capitalGainsTax = gains * (Math.min(Math.max(input.capitalGainsRate || 0, 0), 100) / 100);

  // Surcharge on total income; capped at 15% on the capital-gains portion; with marginal relief.
  const totalIncome = taxableIncome + gains;
  const rate = surchargeRate(totalIncome, regime);
  let surcharge = slabAfterRebate * rate + capitalGainsTax * Math.min(rate, 0.15);
  if (rate > 0) {
    const thresholds = [5000000, 10000000, 20000000, 50000000];
    const threshold = [...thresholds].reverse().find((t) => totalIncome > t)!;
    const lowerRate = surchargeRate(threshold, regime);
    const baseTax = slabAfterRebate + capitalGainsTax;
    // tax (with surcharge) payable at the threshold, scaled from the current tax mix
    const taxAtThreshold =
      slabTax(Math.max(0, threshold - gains), slabs) * (1 + lowerRate) + capitalGainsTax * (1 + Math.min(lowerRate, 0.15));
    const maxTotal = taxAtThreshold + (totalIncome - threshold);
    if (baseTax + surcharge > maxTotal) surcharge = Math.max(0, maxTotal - baseTax);
  }

  const cess = (slabAfterRebate + capitalGainsTax + surcharge) * 0.04;
  const totalTax = Math.round(slabAfterRebate + capitalGainsTax + surcharge + cess);
  const taxCredits = n(input.taxCredits);

  return {
    regime,
    grossIncome,
    totalDeductions: deductions,
    taxableIncome,
    incomeTax: Math.round(incomeTax),
    rebate87A: Math.round(rebate87A),
    capitalGainsTax: Math.round(capitalGainsTax),
    surcharge: Math.round(surcharge),
    cess: Math.round(cess),
    taxCredits,
    totalTax,
    payable: Math.max(0, totalTax - taxCredits),
  };
}

export const inr = (v: number, decimals = 0) =>
  "₹" + v.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// ---------- GST ----------
export type GstMode = "add" | "remove";
export type GstSplit = "cgst-sgst" | "igst";

export function computeGst(amount: number, ratePct: number, mode: GstMode) {
  const a = n(amount);
  const r = n(ratePct) / 100;
  const taxable = mode === "add" ? a : a / (1 + r);
  const gst = taxable * r;
  return { taxable, gst, total: taxable + gst };
}
