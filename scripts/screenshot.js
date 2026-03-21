import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

const url = process.argv[2] || 'http://localhost:5173/'
const name = process.argv[3] || 'screenshot'

console.log(`Taking screenshot of ${url}...`)

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(2000)

  await page.screenshot({
    path: `./screenshots/${name}.png`,
    fullPage: true,
  })

  console.log(`Screenshot saved to ./screenshots/${name}.png`)
} catch (err) {
  console.error('Failed to take screenshot:', err.message)
  process.exit(1)
} finally {
  await browser.close()
}
