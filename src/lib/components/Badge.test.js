import { compile } from 'svelte/compiler'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, it, expect } from 'vitest'

function readComponent(name) {
  return readFileSync(resolve(`src/lib/components/${name}.svelte`), 'utf8')
}

describe('Badge compiled output', () => {
  it('ok variant uses border-kelly', () => {
    const src = readComponent('Badge')
    const { js } = compile(src, { generate: 'client', filename: 'Badge.svelte' })
    const code = js.code
    // ok → border-kelly text-kelly
    expect(code).toContain('border-kelly')
    expect(code).toContain('text-kelly')
  })

  it('warn variant uses border-ora', () => {
    const src = readComponent('Badge')
    const { js } = compile(src, { generate: 'client', filename: 'Badge.svelte' })
    expect(js.code).toContain('border-ora')
    expect(js.code).toContain('text-ora')
  })

  it('alert variant uses border-red', () => {
    const src = readComponent('Badge')
    const { js } = compile(src, { generate: 'client', filename: 'Badge.svelte' })
    expect(js.code).toContain('border-red')
    expect(js.code).toContain('text-red')
  })

  it('muted variant uses b2 border and luma text', () => {
    const src = readComponent('Badge')
    const { js } = compile(src, { generate: 'client', filename: 'Badge.svelte' })
    expect(js.code).toContain('border-b2')
    expect(js.code).toContain('text-luma-3')
  })

  it('all variant class strings are correct', () => {
    const src = readComponent('Badge')
    const { js } = compile(src, { generate: 'client', filename: 'Badge.svelte' })
    const match = js.code.match(/variants\s*=\s*\{([^}]+)\}/)
    expect(match).toBeTruthy()
    const variants = match[0]
    expect(variants).toContain('border-kelly')
    expect(variants).toContain('border-ora')
    expect(variants).toContain('border-red')
    expect(variants).toContain('border-b2')
    expect(variants).toContain('text-luma-3')
  })
})
