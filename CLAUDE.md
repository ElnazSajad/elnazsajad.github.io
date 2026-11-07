# Portfolio — notes for Claude

Single-page portfolio for Elnaz Sajad (creative designer, Berlin). Vite 8 + React 19 + TypeScript + Tailwind v4.
No router, no backend. See README.md for the folder map and editing workflow.

## Conventions
- Content lives in `src/content/` and is typed by `src/content/types.ts`. Prefer editing data over hard-coding in layouts.
- Each project picks a `layout` (campaign / storybook / playground / product / swatch). Each layout is art-directed
  and looks up media slots by `id`, so renaming a slot id means updating the matching layout.
- Empty media slots (no `src` / `video`) render as hatched placeholders. That's intentional.
- Design tokens are CSS variables in `src/styles.css` (`--paper`, `--ink`, `--signal`, `--signal-deep`, `--moss`, `--blush`),
  exposed to Tailwind as `bg-ink`, `text-signal-deep`, etc. Custom utilities: `label-mono`, `display-xl`, `serif-italic`,
  `link-underline`, `grid-lines`, `placeholder-hatch`.
- Fonts: Bricolage Grotesque (display/sans), Instrument Serif (italic accents), JetBrains Mono (labels), all from Google Fonts in `index.html`.
- Wrap new blocks in `<Reveal>` for the fade-up entrance; stagger siblings with `delay`.
- Media: originals go in `source-media/<project>/`, run `npm run media`, reference `/media/<project>/<name>.webp`.

## Checks
- `npm run build` must pass (it type-checks first).
- Check at 375px and 1440px widths. There should be no horizontal page scroll.
