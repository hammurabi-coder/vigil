<script>
  import { onMount, onDestroy } from 'svelte'
  import { colorValues } from '$lib/tokens/theme.js'

  /**
   * NodeGrid — animated operational sector map
   * @prop {number} cols
   * @prop {string[]} rows — row labels e.g. ['A','B','C','D']
   * @prop {Record<string,string>} overrides — { 'A1': 'ok', 'B3': 'alert' }
   * @prop {boolean} animate — randomly flicker nodes
   * @prop {number} interval — ms between random flickers
   */
  export let cols = 8
  /** @type {string[]} */
  export let rows = ['A', 'B', 'C', 'D', 'E', 'F']
  /** @type {Record<string,string>} */
  export let overrides = {}
  /** @type {boolean} */
  export let animate = true
  /** @type {number} */
  export let interval = 700

  const cv = colorValues
  const stateMap = {
    ok: { bg: cv.teal, label: 'ACTIVE' },
    warn: { bg: cv.ora, label: 'WARN' },
    alert: { bg: cv.red, label: 'ALERT' },
    off: { bg: cv.ink[2], label: 'OFFLINE' },
  }

  function randomState() {
    const r = Math.random()
    return r < 0.35 ? 'ok' : r < 0.5 ? 'warn' : r < 0.6 ? 'alert' : r < 0.75 ? 'off' : ''
  }

  let nodes = []
  $: nodes = rows.flatMap((r) =>
    Array.from({ length: cols }, (_, i) => {
      const id = `${r}${i + 1}`
      return { id, state: overrides[id] ?? randomState() }
    })
  )

  let timer
  onMount(() => {
    if (!animate) return
    timer = setInterval(() => {
      const idx = Math.floor(Math.random() * nodes.length)
      nodes[idx] = { ...nodes[idx], state: randomState() }
      nodes = nodes
    }, interval)
  })
  onDestroy(() => clearInterval(timer))
</script>

<div class="grid gap-1" style="grid-template-columns: repeat({cols}, 1fr)">
  {#each nodes as node (node.id)}
    {@const s = stateMap[node.state] ?? {}}
    <div
      class="border-b1 flex aspect-square cursor-default items-center justify-center
             border border-white/10 font-data text-[10px] transition-all duration-150
             hover:border-ora"
      style="background-color: {s.bg ?? 'transparent'}; color: {s.bg ?? 'inherit'}"
    >
      {node.id}
    </div>
  {/each}
</div>

{#if $$slots.legend !== undefined}
  <slot name="legend" />
{:else}
  <div class="mt-4 flex flex-wrap gap-4 font-data text-[10px]">
    {#each Object.entries(stateMap) as [key, { bg, label }] (key)}
      <div class="flex items-center gap-2">
        <div class="h-1.5 w-1.5 rounded-full" style="background-color: {bg}"></div>
        <span style="color: {bg}">{label}</span>
      </div>
    {/each}
  </div>
{/if}
