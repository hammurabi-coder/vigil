/**
 * vigil Design Tokens
 * Civic utility-inspired palette: VIGIL operational control interfaces
 * Monochrome-plus-accent palette, high-density data readouts
 * Single source of truth — consumed by tailwind.config.js
 */

// Color Math Design Tokens
// Utilizing HSL to maintain strict mathematical relationships between lightness steps

const HUE = 120
const SAT = '25%'

/** @type {Object} */
export const colors = {
  // mathematical lightness increments for the surface stack
  void: '#000000',
  bg: {
    0: `hsl(${HUE}, ${SAT}, 3%)`, // main background
    1: `hsl(${HUE}, ${SAT}, 6%)`, // sidebar
    2: `hsl(${HUE}, ${SAT}, 8%)`, // header
    3: `hsl(${HUE}, ${SAT}, 11%)`, // deep panels
    4: `hsl(${HUE}, ${SAT}, 14%)`, // card backgrounds
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
  // Sky blue — cool info/accent (H: 200, S: 75%, L: 60%)
  sky: {
    DEFAULT: 'hsl(200, 75%, 55%)',
    lo: 'hsla(200, 75%, 55%, 0.12)',
    xlo: 'hsla(200, 75%, 55%, 0.05)',
    300: 'hsl(200, 75%, 70%)',
    500: 'hsl(200, 75%, 55%)',
    700: 'hsl(200, 75%, 40%)',
  },
  // Kelly green — success/active signal (H: 145, S: 70%, L: 48%)
  kelly: {
    DEFAULT: 'hsl(145, 70%, 48%)',
    lo: 'hsla(145, 70%, 48%, 0.12)',
    xlo: 'hsla(145, 70%, 48%, 0.05)',
    300: 'hsl(145, 70%, 60%)',
    500: 'hsl(145, 70%, 48%)',
    700: 'hsl(145, 70%, 36%)',
  },
  // Amber — data readout values (H: 44, S: 65%, L: 51%)
  amb: {
    DEFAULT: 'hsl(44, 65%, 51%)',
    lo: 'hsla(44, 65%, 51%, 0.12)',
    300: 'hsl(44, 65%, 61%)',
    500: 'hsl(44, 65%, 51%)',
    700: 'hsl(44, 65%, 41%)',
  },
  // Violet — nominal/ok signal (H: 265, S: 70%, L: 65%)
  // teal key kept as alias so all bg-teal, text-teal, border-teal utilities still work
  violet: {
    DEFAULT: 'hsl(265, 70%, 65%)',
    lo: 'hsla(265, 70%, 65%, 0.12)',
    xlo: 'hsla(265, 70%, 65%, 0.05)',
    300: 'hsl(265, 70%, 75%)',
    500: 'hsl(265, 70%, 65%)',
    700: 'hsl(265, 70%, 55%)',
  },
  teal: {
    DEFAULT: 'hsl(265, 70%, 65%)',
    lo: 'hsla(265, 70%, 65%, 0.12)',
    xlo: 'hsla(265, 70%, 65%, 0.05)',
    300: 'hsl(265, 70%, 75%)',
    500: 'hsl(265, 70%, 65%)',
    700: 'hsl(265, 70%, 55%)',
  },
  // Text scale mathematical increments
  ink: {
    0: 'hsl(210, 15%, 98%)', // primary text
    1: 'hsl(210, 15%, 85%)', // secondary
    2: 'hsl(210, 15%, 70%)', // muted
    3: 'hsl(210, 15%, 55%)', // faint
  },
}

/** @type {Object} */
export const fontFamily = {
  display: ['Barlow Condensed', 'sans-serif'],
  label: ['Barlow Condensed', 'sans-serif'],
  body: ['Barlow', 'sans-serif'],
  data: ['Share Tech Mono', 'monospace'],
}

/** @type {Object} */
export const fontSize = {
  '2xs': ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.15em' }], // 11px
  xs: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.05em' }], // 13px
  sm: ['0.9375rem', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 15px
  base: ['1.0625rem', { lineHeight: '1.6' }], // 17px
  lg: ['1.1875rem', { lineHeight: '1.5' }], // 19px
  xl: ['1.5rem', { lineHeight: '1.2' }],
  '2xl': ['2rem', { lineHeight: '1.1' }],
  '3xl': ['2.625rem', { lineHeight: '1.05' }],
  '4xl': ['3.25rem', { lineHeight: '1' }],
  '5xl': ['4rem', { lineHeight: '0.9' }],
  hero: ['6rem', { lineHeight: '0.85' }],
}

/** @type {Object} */
export const colorValues = {
  teal: 'hsl(265, 70%, 65%)',
  ora: 'hsl(21, 100%, 55%)',
  red: 'hsl(353, 82%, 52%)',
  sky: 'hsl(200, 75%, 55%)',
  kelly: 'hsl(145, 70%, 48%)',
  ink: {
    0: 'hsl(210, 15%, 98%)',
    1: 'hsl(210, 15%, 85%)',
    2: 'hsl(210, 15%, 70%)',
    3: 'hsl(210, 15%, 55%)',
  },
}

/** @type {Object} */
export const chartColors = {
  ora: { stroke: colors.ora.DEFAULT, fill: colors.ora.xlo },
  red: { stroke: colors.red.DEFAULT, fill: colors.red.xlo },
  amb: { stroke: colors.amb.DEFAULT, fill: colors.amb.lo },
  teal: { stroke: colors.violet.DEFAULT, fill: colors.violet.xlo },
  sky: { stroke: colors.sky.DEFAULT, fill: colors.sky.xlo },
  kelly: { stroke: colors.kelly.DEFAULT, fill: colors.kelly.xlo },
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
