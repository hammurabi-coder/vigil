/**
 * vigil Design Tokens
 * Neon Genesis Evangelion-inspired palette: NERV mission control interfaces
 * Monochrome-plus-accent palette, high-density data readouts
 * Single source of truth — consumed by tailwind.config.js
 */

// Color Math Design Tokens
// Utilizing HSL to maintain strict mathematical relationships between lightness steps

const HUE = 220
const SAT = '15%'

/** @type {Object} */
export const colors = {
  // mathematical lightness increments for the surface stack
  void: `hsl(${HUE}, ${SAT}, 12%)`,
  bg: {
    0: `hsl(${HUE}, ${SAT}, 14%)`, // main background
    1: `hsl(${HUE}, ${SAT}, 16%)`, // sidebar
    2: `hsl(${HUE}, ${SAT}, 18%)`, // header
    3: `hsl(${HUE}, ${SAT}, 20%)`, // deep panels
    4: `hsl(${HUE}, ${SAT}, 22%)`, // card backgrounds
  },
  // Borders
  border: {
    0: 'rgba(255,255,255,0.06)',
    1: 'rgba(255,255,255,0.12)',
    2: 'rgba(255,255,255,0.20)',
    3: 'rgba(255,255,255,0.32)',
  },
  // Orange — primary accent (H: 21, S: 100%, L: 55%)
  ora: {
    DEFAULT: 'hsl(21, 100%, 55%)',
    lo: 'hsla(21, 100%, 55%, 0.12)',
    xlo: 'hsla(21, 100%, 55%, 0.05)',
    300: 'hsl(21, 100%, 65%)',
    500: 'hsl(21, 100%, 55%)',
    700: 'hsl(21, 100%, 45%)',
  },
  // Red — alert/error (H: 353, S: 82%, L: 52%)
  red: {
    DEFAULT: 'hsl(353, 82%, 52%)',
    lo: 'hsla(353, 82%, 52%, 0.12)',
    xlo: 'hsla(353, 82%, 52%, 0.05)',
    300: 'hsl(353, 82%, 62%)',
    500: 'hsl(353, 82%, 52%)',
    700: 'hsl(353, 82%, 42%)',
  },
  // Amber — data readout values (H: 44, S: 65%, L: 51%)
  amb: {
    DEFAULT: 'hsl(44, 65%, 51%)',
    lo: 'hsla(44, 65%, 51%, 0.12)',
    300: 'hsl(44, 65%, 61%)',
    500: 'hsl(44, 65%, 51%)',
    700: 'hsl(44, 65%, 41%)',
  },
  // Teal — nominal/ok signal (H: 177, S: 68%, L: 46%)
  teal: {
    DEFAULT: 'hsl(177, 68%, 46%)',
    lo: 'hsla(177, 68%, 46%, 0.12)',
    xlo: 'hsla(177, 68%, 46%, 0.05)',
    300: 'hsl(177, 68%, 56%)',
    500: 'hsl(177, 68%, 46%)',
    700: 'hsl(177, 68%, 36%)',
  },
  // Text scale mathematical increments
  ink: {
    0: 'hsl(225, 10%, 98%)', // primary text
    1: 'hsl(225, 20%, 80%)', // secondary
    2: 'hsl(225, 20%, 60%)', // muted
    3: 'hsl(225, 20%, 40%)', // faint
  },
}

/** @type {Object} */
export const fontFamily = {
  display: ['Bebas Neue', 'sans-serif'],
  label: ['Barlow Condensed', 'sans-serif'],
  body: ['Barlow', 'sans-serif'],
  data: ['Share Tech Mono', 'monospace'],
}

/** @type {Object} */
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

/** @type {Object} */
export const chartColors = {
  ora: { stroke: colors.ora.DEFAULT, fill: colors.ora.xlo },
  red: { stroke: colors.red.DEFAULT, fill: colors.red.xlo },
  amb: { stroke: colors.amb.DEFAULT, fill: colors.amb.lo },
  teal: { stroke: colors.teal.DEFAULT, fill: colors.teal.xlo },
  grid: 'rgba(255,255,255,0.06)',
  gridLine: 'rgba(255,255,255,0.07)',
  tick: colors.ink[2],
  tooltip: {
    backgroundColor: colors.bg[2],
    borderColor: 'hsla(21, 100%, 55%, 0.4)',
    borderWidth: 1,
    titleColor: colors.ink[0],
    bodyColor: colors.ink[1],
    padding: 10,
  },
  glow: {
    ora: 'hsla(21, 100%, 55%, 0.35)',
    red: 'hsla(353, 82%, 52%, 0.35)',
    oraLight: 'hsla(21, 100%, 55%, 0.06)',
  },
}
