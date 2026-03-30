<script>
  /**
   * Ticker — horizontal strip of key metrics
   * @prop {Array<{label:string, value:string, delta?:string, deltaDir?:'up'|'down'}>} items
   */
  export let items = []
</script>

<div class="border-b0 flex gap-0.5 border-t">
  {#each items as item (item.label)}
    <div class="flex-1 bg-bg-0 px-3 py-3 text-center font-data">
      <div class="mb-1.5 text-2xs text-ink-2">{item.label}</div>
      <div class="text-base tabular-nums text-amb">{item.value}</div>
      {#if item.delta}
        <div class="mt-0.5 text-2xs {item.deltaDir === 'up' ? 'text-teal' : 'text-red'}">
          {item.deltaDir === 'up' ? '↑' : '↓'}
          {item.delta}
        </div>
      {/if}
    </div>
  {/each}
</div>
