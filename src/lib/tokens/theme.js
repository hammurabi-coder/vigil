/**
 * vigil Design Tokens
 * Retro NASA-inspired palette: medium-dark backgrounds, classic NASA blue, cream accents
 * Clean, geometric, space-age aesthetic
 * Single source of truth — consumed by tailwind.config.js
 */

/**
 * Color architecture:
 * - Base: Medium-dark blue (#1E2640) — like a 1970s control room background
 * - Primary: NASA Blue (#0055A4) — the classic agency blue
 * - Secondary: Cream/Off-white (#F5F3E7) — retro text, like old NASA print
 * - Accent: Red (#DC2626) — for alerts, US flag red
 * - Teal kept for nominal/ok
 */
export const colors = {
  void: '#0D1220',
  bg: {
    0: '#1E2640', // medium-dark navy — like a 1970s control room
    1: '#252C4A', // lighter navy
    2: '#2F3860', // medium navy
    3: '#3A4478', // lighter purple-navy
    4: '#465595', // even lighter
  },
  // Borders
  border: {
    0: 'rgba(255,255,255,0.06)',
    1: 'rgba(255,255,255,0.12)',
    2: 'rgba(255,255,255,0.20)',
    3: 'rgba(255,255,255,0.32)',
  },
  // NASA Blue — primary accent, the classic agency blue
  nasa: {
    DEFAULT: '#0055A4',
    dim: '#003366',
    mid: '#004080',
    lo: 'rgba(0,85,164,0.12)',
    xlo: 'rgba(0,85,164,0.05)',
    300: '#3377CC',
    500: '#0055A4',
    700: '#003366',
    900: '#001A33',
  },
  // Cream — retro off-white for text/accent
  cream: {
    DEFAULT: '#F5F3E7',
    dim: '#C9C7B8',
    mid: '#E8E6D8',
    lo: 'rgba(245,243,231,0.10)',
    300: '#FAF9F3',
    500: '#F5F3E7',
    700: '#C9C7B8',
  },
  // Alert red — US flag red
  red: {
    DEFAULT: '#DC2626',
    lo: 'rgba(220,38,38,0.12)',
    xlo: 'rgba(220,38,38,0.05)',
    300: '#EF4444',
    500: '#DC2626',
    700: '#991B1B',
  },
  // Data amber — kept for data readouts
  amb: {
    DEFAULT: '#F59E0B',
    lo: 'rgba(245,158,11,0.12)',
    300: '#FCD34D',
    500: '#F59E0B',
    700: '#B45309',
  },
  // Teal — nominal/ok signal
  teal: {
    DEFAULT: '#14B8A6',
    lo: 'rgba(20,184,166,0.12)',
    xlo: 'rgba(20,184,166,0.05)',
    300: '#5EEAD4',
    500: '#14B8A6',
    700: '#0F766E',
  },
  // Text scale — optimized for medium-dark backgrounds
  ink: {
    0: '#F5F3E7', // cream — primary text
    1: '#CBD5E1', // light blue-gray
    2: '#94A3B8', // muted
    3: '#64748B', // faint
  },
}

/**
 *
 */
export const fontFamily = {
  display: ['Bebas Neue', 'sans-serif'],
  label: ['Barlow Condensed', 'sans-serif'],
  body: ['Barlow', 'sans-serif'],
  data: ['Share Tech Mono', 'monospace'],
}

/**
 *
 */
export const fontSize = {
  '2xs': ['0.625rem', { lineHeight: '1', letterSpacing: '0.3em' }],
  xs: ['0.75rem', { lineHeight: '1.4' }],
  sm: ['0.875rem', { lineHeight: '1.5' }],
  base: ['1rem', { lineHeight: '1.6' }],
  lg: ['1.125rem', { lineHeight: '1.5' }],
  xl: ['1.5rem', { lineHeight: '1.2' }],
  '2xl': ['2rem', { lineHeight: '1.1' }],
  '3xl': ['3rem', { lineHeight: '1' }],
  '4xl': ['4.5rem', { lineHeight: '0.9' }],
  hero: ['6rem', { lineHeight: '0.85' }],
}

/** Chart.js palette */
export const chartColors = {
  nasa: { stroke: colors.nasa.DEFAULT, fill: colors.nasa.xlo },
  red: { stroke: colors.red.DEFAULT, fill: colors.red.xlo },
  amb: { stroke: colors.amb.DEFAULT, fill: colors.amb.lo },
  teal: { stroke: colors.teal.DEFAULT, fill: colors.teal.xlo },
  cream: { stroke: colors.cream.DEFAULT, fill: colors.cream.lo },
  grid: 'rgba(255,255,255,0.06)',
  tick: colors.ink[2],
  tooltip: {
    backgroundColor: '#1E2640',
    borderColor: 'rgba(0,85,164,0.4)',
    borderWidth: 1,
    titleColor: colors.cream.DEFAULT,
    bodyColor: colors.ink[1],
    padding: 10,
  },
}
