import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [svelte({ hot: false })],
  test: {
    browser: {
      provider: playwright.provider,
      instances: [{ browser: 'chromium' }],
    },
    pool: 'forks',
    globals: true,
    include: ['tests/**/*.{test,spec}.{js,ts}'],
  },
})
