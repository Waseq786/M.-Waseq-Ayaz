# Muhammad Waseq Ayaz — Portfolio

A Next.js 14 (App Router) + TypeScript portfolio built from your CV, with
Tailwind CSS, Framer Motion for the scroll and hover motion, and a small
react-three-fiber scene for the hero's rotating faceted form.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

- `app/` — root layout, global styles, and the single page (`page.tsx`)
  that assembles every section.
- `components/` — one file per section: `Hero`, `About`, `Work`, `Skills`,
  `Experience`, `Certifications`, `Contact`, plus `Navbar`, `Footer`, and
  `HeroScene` (the 3D piece, loaded client-only).
- `public/images/` — five photos pulled from what you uploaded, resized
  and re-compressed for the web: `hero.jpg`, `about.jpg`, `coding.jpg`,
  `speaking.jpg`, `creative.jpg`.

## Things worth checking before you publish it

- **Content**: every fact on the page is pulled from your CV. Skim it once
  for anything you'd rather phrase differently — the "About" and "Work"
  copy in particular is written, not just listed.
- **Photos**: I picked five that read as professional/on-brand rather than
  using all nineteen. Swap any of the files in `public/images/` for a
  different shot with the same filename and it'll drop straight in.
- **Contact links**: email, phone and WhatsApp are wired from the numbers
  on your CV — confirm they're the ones you want public.
- **Deploying**: this deploys the same way your current site does — push
  to a Git repo and import it on Vercel, or run `npm run build && npm run
  start` on any Node host.

## Design notes

Palette is ink navy / brass / muted teal / rust, with Fraunces for display
type and Inter for body and UI text — deliberately away from the
cream-and-terracotta or dark-and-neon defaults. The one non-scroll-triggered
motion moment is the rotating wireframe form behind the hero photo; every
other animation (card reveals, the tilting hero photo, the certifications
accordion) responds to scrolling into view or to your cursor.
# M.-Waseq-Ayaz
