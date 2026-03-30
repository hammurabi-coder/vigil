import { colors, fontFamily, fontSize, chartColors } from './src/lib/tokens/theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        void: colors.void,
        bg: colors.bg,
        ora: colors.ora,
        red: colors.red,
        amb: colors.amb,
        teal: colors.teal,
        ink: colors.ink,
        glow: chartColors.glow,
      },
      fontFamily: {
        display: fontFamily.display,
        label: fontFamily.label,
        body: fontFamily.body,
        data: fontFamily.data,
      },
      fontSize,
      borderRadius: {
        none: '0',
        sm: '1px',
        DEFAULT: '2px',
        md: '4px',
        lg: '8px',
      },
      letterSpacing: {
        widest2: '0.35em',
        widest: '0.25em',
        wider: '0.15em',
        wide: '0.08em',
      },
      animation: {
        pip: 'pip 2.8s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'blink-slow': 'blink 1.8s ease-in-out infinite',
      },
      keyframes: {
        pip: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.4)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
}
