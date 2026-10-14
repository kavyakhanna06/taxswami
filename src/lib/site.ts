import servicesData from "@/content/services.json";

// Site-wide content: contact details, navigation and the service catalogue.
// Edit here and every page that uses it updates.

export const site = {
  name: "Tax Swami",
  description:
    "Tax and legal advisory partner. Taxation, GST, accounting, audits, corporate compliance and financial consultancy for individuals and businesses.",
  address: "Sd- 194, Tower Apartments, Kohat enclave, Pitampura, Delhi - 110034, India",
  email: "info@taxswami.com",
  phones: ["+919818211597", "+919958484489"],
  founder: "CA Vibha Gupta",
  // The Framer site had no links on Instagram, YouTube or X yet. Fill these in and the icons become links.
  socials: {
    instagram: "",
    whatsapp: "https://wa.me/919818211597",
    youtube: "",
    x: "",
  },
  resourceLink: "https://www.incometax.gov.in",
};

export type Service = {
  category: string;
  slug: string;
  title: string;
  number: string;
  html: string;
};
export type Category = {
  slug: string;
  title: string;
  tagline: string;
  services: Service[];
};

const allServices = Object.values(servicesData as Record<string, Service>);

const categoryMeta = [
  { slug: "business-registration", title: "Business Registration", tagline: "Simple, Secure Business Registration" },
  { slug: "licenses", title: "Licenses", tagline: "Essential Licenses for Legal Compliance" },
  { slug: "filing-returns", title: "Filing & Returns", tagline: "Timely Filing, Accurate Business Returns" },
  { slug: "audit-assurance", title: "Audit Assurance", tagline: "Reliable Audits, Greater Financial Confidence" },
  { slug: "advisory-consultancy", title: "Advisory Consultancy", tagline: "Expert Guidance for Business Growth" },
  { slug: "trade-patent", title: "Trade & Patent", tagline: "Protect Your Brand and Innovations" },
];

export const categories: Category[] = categoryMeta.map((c) => ({
  ...c,
  services: allServices
    .filter((s) => s.category === c.slug)
    .sort((a, b) => Number(a.number) - Number(b.number)),
}));

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getService(category: string, slug: string) {
  return getCategory(category)?.services.find((s) => s.slug === slug);
}

export const nav = {
  main: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
  ],
  contact: { href: "/contact", label: "Contact" },
};
