# vigil

> dark operational component library

Svelte + Tailwind. Public Works × Civic 70s. True black. No border-radius. No grey panels.

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:5173
```

The dev server runs the full component showcase — every module in one scrollable page with a sticky nav. That's your review environment.

## Scripts

| Command            | What it does                             |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start showcase dev server                |
| `npm run build`    | Build showcase + package library         |
| `npm run package`  | Package src/lib to dist/ for consumption |
| `npm run lint`     | ESLint + Prettier check                  |
| `npm run lint:fix` | Auto-fix lint + format                   |
| `npm run format`   | Prettier write                           |
| `npm run check`    | svelte-check type/prop validation        |

## Structure

```
vigil/
├── src/
│   ├── lib/
│   │   ├── components/       ← all exported components
│   │   ├── tokens/theme.js   ← single source of truth for all design tokens
│   │   └── index.js          ← barrel export
│   └── routes/
│       └── +page.svelte      ← showcase / review site
├── tailwind.config.js        ← imports from tokens/theme.js
├── AGENTS.md                 ← full brief for AI coding agents
└── README.md
```

## Design brief

See AGENTS.md for the full design spec, token reference, component inventory, and task backlog.
