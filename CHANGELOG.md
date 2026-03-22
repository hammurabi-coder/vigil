# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-03-21

### Added

- **PolyForm Noncommercial License 2.0.0-pre.2** implementation.
- `Modal`, `Toast`, `Select`, `Sidebar`, `Sparkline`, and `Topbar` added to the public component export map (`src/lib/index.js`).
- Complete `$$restProps` sprawling across foundational interactive primitives (`Input`, `Button`, `Panel`).
- Semantic `aria-live` regions integrated into `LogPanel`.
- Extensible `<slot name="header">` implementations for `Panel`.

### Changed

- **Aesthetic Overhaul (H95 S24):** Core theme globally refactored from "Evangelion / NASA Aero" slateslop to a physical "Public Works / Civic Utility" True Military Olive Drab baseline.
- All internal branding terminology scrubbed of intellectual property constraints ("Evangelion" / "Aero") and converted to generic "Public Infrastructure" nomenclature.
- Reduced strict hardcoded layout variables (e.g., eradicated `<div style="height: 55%">` in favor of Tailwind arbitrary values like `h-[55%]`).
- Integrated `tabular-nums` formatting into metric components (`Ticker`, `DataReadout`) to stabilize rendering jitter.

### Removed

- Deprecated string-based branding locks and pure-black (`#000000`) static fallbacks in favor of programmatic HSL math (`hsl(95, 10%, 16%)`).
