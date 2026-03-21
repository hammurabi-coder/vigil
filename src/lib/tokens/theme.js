/**
 * EVA–NASA Design Tokens
 * Single source of truth — consumed by tailwind.config.js
 * Import in app code for runtime access if needed.
 */

export const colors = {
  void:  '#000000',
  bg: {
    0: '#05050C',
    1: '#0A0A16',
    2: '#0F0F1F',
    3: '#151528',
    4: '#1C1C34',
  },
  // Borders (use as bg with opacity in tailwind via bg-b0 etc.)
  border: {
    0: 'rgba(255,255,255,0.04)',
    1: 'rgba(255,255,255,0.09)',
    2: 'rgba(255,255,255,0.16)',
    3: 'rgba(255,255,255,0.28)',
  },
  ora: {
    DEFAULT: '#FF6B1A',
    dim:     '#7A3008',
    mid:     '#CC4E00',
    lo:      'rgba(255,107,26,0.14)',
    xlo:     'rgba(255,107,26,0.06)',
    300:     '#FF9050',
    500:     '#FF6B1A',
    700:     '#CC4E00',
    900:     '#7A3008',
  },
  red: {
    DEFAULT: '#E82038',
    lo:      'rgba(232,32,56,0.16)',
    xlo:     'rgba(232,32,56,0.07)',
    300:     '#FF5068',
    500:     '#E82038',
    700:     '#8C0018',
  },
  amb: {
    DEFAULT: '#D4A832',
    lo:      'rgba(212,168,50,0.14)',
    300:     '#EDD070',
    500:     '#D4A832',
    700:     '#7A5800',
  },
  teal: {
    DEFAULT: '#26C4BC',
    lo:      'rgba(38,196,188,0.14)',
    xlo:     'rgba(38,196,188,0.06)',
    300:     '#5EEAE0',
    500:     '#26C4BC',
    700:     '#105C58',
  },
  ink: {
    0: '#E8E4DA',   // primary text
    1: '#98948A',   // secondary text
    2: '#48463E',   // muted text
    3: '#26241E',   // faint text
  },
}

export const fontFamily = {
  display: ['Bebas Neue', 'sans-serif'],
  label:   ['Barlow Condensed', 'sans-serif'],
  body:    ['Barlow', 'sans-serif'],
  data:    ['Share Tech Mono', 'monospace'],
}

export const fontSize = {
  '2xs': ['0.65rem',  { lineHeight: '1', letterSpacing: '0.3em' }],
  xs:    ['0.75rem',  { lineHeight: '1.4' }],
  sm:    ['0.875rem', { lineHeight: '1.5' }],
  base:  ['1rem',     { lineHeight: '1.6' }],
  lg:    ['1.125rem', { lineHeight: '1.5' }],
  xl:    ['1.5rem',   { lineHeight: '1.3' }],
  '2xl': ['2rem',     { lineHeight: '1.1' }],
  '3xl': ['3rem',     { lineHeight: '1' }],
  '4xl': ['4.5rem',   { lineHeight: '0.9' }],
  hero:  ['7rem',     { lineHeight: '0.85' }],
}

/** Chart.js palette — import directly into chart components */
export const chartColors = {
  ora:  { stroke: colors.ora.DEFAULT, fill: colors.ora.xlo },
  red:  { stroke: colors.red.DEFAULT, fill: colors.red.xlo },
  amb:  { stroke: colors.amb.DEFAULT, fill: colors.amb.lo  },
  teal: { stroke: colors.teal.DEFAULT, fill: colors.teal.xlo },
  grid: 'rgba(255,255,255,0.05)',
  tick: colors.ink[2],
  tooltip: {
    backgroundColor: '#0A0A16',
    borderColor:     'rgba(255,107,26,0.35)',
    borderWidth:     1,
    titleColor:      colors.amb.DEFAULT,
    bodyColor:       colors.ink[1],
    padding:         10,
  },
}
