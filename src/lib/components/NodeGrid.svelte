<script>
  import { onMount, onDestroy } from 'svelte'

  /**
   * NodeGrid — animated operational sector map
   * @prop {number} cols
   * @prop {string[]} rows   — row labels e.g. ['A','B','C','D']
   * @prop {Record<string,string>} overrides — { 'A1': 'ok', 'B3': 'alert' }
   * @prop {boolean} animate — randomly flicker nodes
   * @prop {number} interval — ms between random flickers
   */
  export let cols = 8
  /**
   *
   */
  export let rows = ['A', 'B', 'C', 'D', 'E', 'F']
  /**
   *
   */
  export let overrides = {}
  /**
   *
   */
  export let animate = true
  /**
   *
   */
  export let interval = 700

  function randomState() {
    const r = Math.random()
    return r < 0.35 ? 'ok' : r < 0.5 ? 'warn' : r < 0.6 ? 'alert' : r < 0.75 ? 'off' : ''
  }

  let nodes = []
  $: {
    nodes = rows.flatMap((r) =>
      Array.from({ length: cols }, (_, i) => {
        const id = `${r}${i + 1}`
        return { id, state: overrides[id] ?? randomState() }
      })
    )
  }

  const nodeCls = {
    ok: 'border-teal text-teal bg-teal-xlo',
    warn: 'border-nasa text-nasa bg-nasa-xlo',
    alert: 'border-red text-red bg-red-xlo animate-blink',
    off: 'opacity-20',
    '': 'border-b1 text-ink-2',
  }

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
    <div
      class="flex aspect-square cursor-default items-center justify-center
             border font-data text-[10px] transition-all duration-150
             hover:border-nasa hover:text-nasa
             {nodeCls[node.state] ?? nodeCls['']}"
    >
      {node.id}
    </div>
  {/each}
</div>

{#if $$slots.legend !== undefined}
  <slot name="legend" />
{:else}
  <div class="mt-4 flex flex-wrap gap-4 font-data text-[10px]">
    {#each [['ok', 'ACTIVE'], ['warn', 'WARN'], ['alert', 'ALERT'], ['off', 'OFFLINE']] as [state, label]}
      <div class="flex items-center gap-2">
        <div
          class="h-1.5 w-1.5 rounded-full {state === 'ok'
            ? 'bg-teal'
            : state === 'warn'
              ? 'bg-nasa'
              : state === 'alert'
                ? 'bg-red'
                : 'bg-ink-2'}"
        ></div>
        <span
          class={state === 'ok'
            ? 'text-teal'
            : state === 'warn'
              ? 'text-nasa'
              : state === 'alert'
                ? 'text-red'
                : 'text-ink-2'}>{label}</span
        >
      </div>
    {/each}
  </div>
{/if}
