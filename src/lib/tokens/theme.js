/**
 * vigil Design Tokens
 * Neon Genesis Evangelion-inspired palette: NERV mission control interfaces
 * Monochrome-plus-accent palette, high-density data readouts
 * Single source of truth — consumed by tailwind.config.js
 */

/** @type {Object} */
export const colors = {
  void: '#000000',
  bg: {
    0: '#05050C', // main background
    1: '#0B0D14', // sidebar
    2: '#11141D', // header
    3: '#181C27', // deep panels
    4: '#202533', // card backgrounds
  },
  // Borders
  border: {
    0: 'rgba(255,255,255,0.06)',
    1: 'rgba(255,255,255,0.12)',
    2: 'rgba(255,255,255,0.20)',
    3: 'rgba(255,255,255,0.32)',
  },
  // Orange — primary accent (FF6B1A)
  ora: {
    DEFAULT: '#FF6B1A',
    lo: 'rgba(255,107,26,0.12)',
    xlo: 'rgba(255,107,26,0.05)',
    300: '#FF8A47',
    500: '#FF6B1A',
    700: '#CC5515',
  },
  // Red — alert/error (E82038)
  red: {
    DEFAULT: '#E82038',
    lo: 'rgba(232,32,56,0.12)',
    xlo: 'rgba(232,32,56,0.05)',
    300: '#ED4D60',
    500: '#E82038',
    700: '#B91A2D',
  },
  // Amber — data readout values (D4A832)
  amb: {
    DEFAULT: '#D4A832',
    lo: 'rgba(212,168,50,0.12)',
    300: '#E0BD5B',
    500: '#D4A832',
    700: '#AA8628',
  },
  // Teal — nominal/ok signal (26C4BC)
  teal: {
    DEFAULT: '#26C4BC',
    lo: 'rgba(38,196,188,0.12)',
    xlo: 'rgba(38,196,188,0.05)',
    300: '#51D0C9',
    500: '#26C4BC',
    700: '#1E9D96',
  },
  // Text scale
  ink: {
    0: '#FFFFFF', // primary text
    1: '#A0AAB8', // secondary
    2: '#64748B', // muted
    3: '#334155', // faint
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
    borderColor: 'rgba(255,107,26,0.4)',
    borderWidth: 1,
    titleColor: colors.ink[0],
    bodyColor: colors.ink[1],
    padding: 10,
  },
  glow: {
    ora: 'rgba(255,107,26,0.35)',
    red: 'rgba(232,32,56,0.35)',
    oraLight: 'rgba(255,107,26,0.06)',
  },
}
