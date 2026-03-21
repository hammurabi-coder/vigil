<script>
  /**
   * Ticker — horizontal strip of key metrics
   * @prop {Array<{label:string, value:string, delta?:string, deltaDir?:'up'|'down'}>} items
   */
  export let items = []
</script>

<div class="flex gap-[2px] border-t border-b0">
  {#each items as item}
    <div class="flex-1 px-2 py-2.5 bg-bg-0 text-center font-data">
      <div class="text-[8px] tracking-widest text-ink-2 uppercase mb-1">{item.label}</div>
      <div class="text-[14px] text-amb">{item.value}</div>
      {#if item.delta}
        <div class="text-[8px] mt-0.5 {item.deltaDir === 'up' ? 'text-teal' : 'text-red'}">
          {item.deltaDir === 'up' ? '↑' : '↓'} {item.delta}
        </div>
      {/if}
    </div>
  {/each}
</div>
