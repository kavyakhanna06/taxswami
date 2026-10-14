# Tax Swami website

Next.js (App Router) + Tailwind CSS rebuild of the Tax Swami Framer site. Deployed on Vercel; every push to `main` redeploys.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit things

| What | File |
| --- | --- |
| Address, email, phones, social links | `src/lib/site.ts` |
| Service categories (names, taglines, order) | `src/lib/site.ts` |
| Every service page's write-up | `src/content/services.json` |
| Notices in the top scrolling bar | `src/content/announcements.ts` |
| FAQ questions and answers | `src/content/faqs.ts` |
| Team cards on About | `src/content/team.ts` |
| Colours and fonts | `src/app/globals.css` (`@theme` block) |
| Income tax / GST maths | `src/lib/tax.ts` |

Adding a service: add an entry to `src/content/services.json` with `category`, `slug`, `title`, `number` and `html`. It appears on its category page and gets its own page at `/<category>/<slug>`.

## Contact form email

The form posts to `/api/contact`, which emails enquiries through [Resend](https://resend.com).
In Vercel → Project → Settings → Environment Variables add:

- `RESEND_API_KEY` (required)
- `CONTACT_TO` — inbox to receive enquiries (defaults to info@taxswami.com)
- `CONTACT_FROM` — sender, e.g. `Tax Swami <hello@taxswami.com>` once the domain is verified in Resend

Until `RESEND_API_KEY` is set, submitting the form opens the visitor's email app with the details pre-filled.

## Reference capture

`tools/capture/` and the manual "Capture Framer site" GitHub Action snapshot the original Framer site (text, layout, images, screenshots) into the `capture` branch. It only runs when started by hand from the Actions tab.
