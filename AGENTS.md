# AGENTS.md
## Context for AI coding agents

This file is for you. Read it before touching anything.

---

## What this is

**vigil** is a dark operational UI component library built in Svelte + Tailwind.

The aesthetic is a fusion of:
- **Neon Genesis Evangelion** — NERV mission control interfaces, monochrome-plus-accent palette, high-density data readouts, annotation typography
- **NASA SP-168 (1970s identity guide)** — geometric precision, rectilinear everything, no border-radius, corner notches, technical annotation language, orange as the primary accent

The result is a design language suited to dashboards, data tools, and operational interfaces. Not a general-purpose UI kit — it has a specific, committed aesthetic.

**Name:** vigil (lowercase always)  
**Tagline:** dark operational component library

---

## Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | SvelteKit | Compiles to vanilla JS, clean component model, `$lib` alias, first-party library tooling via `@sveltejs/package` |
| Styling | Tailwind v3 | Utility-first, custom theme maps 1:1 to design tokens |
| Charts | Chart.js 4 | Loaded via CDN in components, configured with vigil palette |
| Build | Vite | Standard SvelteKit |
| Linting | ESLint flat config + Prettier + prettier-plugin-svelte + prettier-plugin-tailwindcss | |

---

## Design tokens — single source of truth

**`src/lib/tokens/theme.js`** — all values live here. Nothing is hardcoded anywhere else.

Key token groups:
- `colors.void` / `colors.bg[0–4]` — true black → dark navy surface stack
- `colors.ora` — orange, the primary system accent (FF6B1A)
- `colors.red` — alert/error (E82038)
- `colors.amb` — amber, data readout values (D4A832)
- `colors.teal` — nominal/ok signal (26C4BC)
- `colors.ink[0–3]` — text scale from primary to faint
- `chartColors` — Chart.js palette object imported directly into chart components

`tailwind.config.js` imports from `theme.js` — changing a token cascades everywhere.

---

## Component library

All components are in `src/lib/components/`. Barrel export at `src/lib/index.js`.

### Current components

**Primitives**
- `Panel` — surface container with variants: `default`, `deep`, `raised`, `accent`, `alert`, `teal`. Props: `title`, `badge`, `badgeVariant`, `flush`
- `Badge` — inline status chip. Variants: `ok`, `warn`, `alert`, `muted`
- `Button` — variants: `primary`, `outline`, `ghost`, `danger`. Sizes: `sm`, `md`, `lg`
- `Input` — monospaced field with label. States: `default`, `error`
- `SectionLabel` — section divider with orange rule
- `LogoMark` — animated crosshair logo mark

**Data display**
- `DataReadout` — large operational number display. Colors: `default` (amber), `ok` (teal), `alert` (red, blinking), `primary` (white). Sizes: `sm`, `md`, `lg`, `xl`
- `StatusList` — vertical list of dot + label + value rows. Dot variants: `ok`, `warn`, `alert`, `off`
- `ProgressBar` — 2px track with tick marker. Color `auto` selects red/orange/teal by threshold
- `NodeGrid` — animated operational sector map. Props: `cols`, `rows[]`, `overrides{}`, `animate`, `interval`
- `LogPanel` — scrollable system event log. Auto-scrolls on new entries
- `Ticker` — horizontal strip of key metrics with delta indicators
- `DataTable` — data table with per-column color config

**Charts** (all wrap Chart.js, configured with vigil palette)
- `LineChart` — multi-dataset line with fill support and dashed threshold lines
- `BarChart` — vertical or horizontal (`orientation` prop). Auto-colors by value with `color="auto"`
- `AreaChart` — stacked area
- `RadarChart` — multi-dataset spider
- `DonutChart` — doughnut with legend
- `ScatterChart` — scatter with custom point styles (used for threat/anomaly mapping)

---

## Showcase / review site

`src/routes/+page.svelte` — a full-page component showcase. This is the dev environment and the review tool. Run `npm run dev` and open localhost to see every component live with real data.

Features:
- Sticky sidebar nav with IntersectionObserver active-section tracking
- Live clock and elapsed timer
- All 9 sections: Colors → Type → Panels → Readouts → Charts → Status → Controls → Data → Log
- Real data wired into every component

---

## Design rules — do not violate

1. **True black base.** `--void: #000000`, `--bg-0: #05050C`. No grey backgrounds. No cream panels.
2. **Zero border-radius everywhere.** `rounded-none` is the default. Never add radius without explicit design decision.
3. **Monospaced data.** All numeric values, timestamps, labels use `font-data` (Share Tech Mono).
4. **Orange is the only primary accent.** Don't introduce other accent colors without discussion.
5. **Teal = nominal/ok only.** Don't repurpose it for general UI elements.
6. **Red = alert/error only.** Same rule.
7. **No shadows except glow on interactive states.** Box shadows are orange/red glow only, not elevation.
8. **Tailwind classes only.** No inline styles except for dynamic values (widths, heights from props). No `<style>` blocks in components unless absolutely necessary.
9. **All design token references go through Tailwind classes** mapped from `theme.js`. Never hardcode hex values in components.

---

## Immediate next tasks (pick these up)

### Priority 1 — Linting and tooling
- [ ] Confirm ESLint flat config works with current eslint-plugin-svelte version
- [ ] Confirm prettier-plugin-tailwindcss class sorting works in `.svelte` files
- [ ] Add `lint` and `format` to pre-commit hook via `simple-git-hooks` + `lint-staged`
- [ ] Run `npm run check` and fix any svelte-check warnings

### Priority 2 — Component hardening
- [ ] `NodeGrid`: the legend uses dynamic Tailwind class construction (`bg-{c}`, `text-{c}`) which gets purged. Fix by using explicit color map or inline styles for legend dots
- [ ] Chart components: Chart.js is loaded via `<svelte:head>` CDN script — replace with proper `import` from the devDependency so it's bundled correctly for library consumers
- [ ] `ProgressBar`: `color="auto"` logic is in the component — consider moving threshold config to a prop `thresholds={{ warn: 65, alert: 85 }}`
- [ ] `DataTable`: add optional sort on column click
- [ ] All components: audit prop JSDoc comments for completeness

### Priority 3 — New components needed
- [ ] `Topbar` — standard page header with LogoMark, title, meta right side, live clock slot
- [ ] `Sidebar` — collapsible nav sidebar (extract from showcase page)
- [ ] `Select` / `Dropdown` — styled select matching Input aesthetic
- [ ] `Modal` — dark overlay panel for confirmations / dialogs
- [ ] `Toast` / `Alert` — transient notification system
- [ ] `Sparkline` — inline mini chart for use inside DataReadout or table cells

### Priority 4 — Docs
- [ ] Add a `COMPONENTS.md` with one example snippet per component
- [ ] Consider Storybook or Histoire for isolated component stories

---

## Conventions

- Component files: `PascalCase.svelte`
- Token keys: `camelCase` in JS, `kebab-case` in Tailwind classes
- Exported component props: documented with JSDoc `@prop` in `<script>` block
- No TypeScript for now — plain JS with JSDoc types
- Commit style: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`)
