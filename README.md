# vigil

Dark operational interface library. Svelte + Tailwind. No border-radius. No grey panels.

---

## Quick start

```bash
npm install
npm run dev
```

Full component showcase at `http://localhost:5173`.

---

## Scripts

| Command         | What it does                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Dev server + showcase             |
| `npm run build` | Build showcase + package to dist/ |
| `npm run check` | svelte-check prop validation      |
| `npm run lint`  | ESLint + Prettier                 |

---

## Design tokens

Single source of truth in `src/lib/tokens/theme.js`.

### Accents

| Token    | Hue  | Use               |
| -------- | ---- | ----------------- |
| `ora`    | 21°  | Primary action    |
| `red`    | 353° | Alert/error       |
| `amb`    | 44°  | Data readout      |
| `sky`    | 200° | Info              |
| `kelly`  | 145° | Success/nominal   |
| `violet` | 265° | Neutral indicator |

### Luma scale

`luma[0]` (98%) → `luma[3]` (55%) — text hierarchy on dark background.

---

## Structure

```
src/lib/
├── components/       ← all components
├── tokens/theme.js   ← design tokens
└── index.js          ← barrel export
```
