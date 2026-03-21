<script>
  /**
   * ProgressBar
   * @prop {string} label
   * @prop {number} value   — 0–100
   * @prop {'nasa'|'teal'|'red'|'amb'} color
   * @prop {boolean} showValue
   */
  export let label = ''
  /**
   *
   */
  export let value = 0
  /**
   *
   */
  export let color = 'nasa'
  /**
   *
   */
  export let showValue = true

  const fills = {
    nasa: 'bg-nasa',
    teal: 'bg-teal',
    red: 'bg-red',
    amb: 'bg-amb',
  }

  const valueColors = {
    nasa: 'text-nasa',
    teal: 'text-teal',
    red: 'text-red',
    amb: 'text-amb',
  }

  $: capped = Math.min(100, Math.max(0, value))
  $: autoColor = value >= 85 ? 'red' : value >= 65 ? 'nasa' : 'teal'
  $: resolvedColor = color === 'auto' ? autoColor : color
</script>

<div class="flex flex-col gap-1">
  {#if label || showValue}
    <div class="flex justify-between font-data text-[11px] uppercase tracking-wider text-ink-2">
      <span>{label}</span>
      {#if showValue}
        <span class={valueColors[resolvedColor] ?? 'text-ink-2'}>{capped}%</span>
      {/if}
    </div>
  {/if}
  <div class="bg-b1 relative h-px">
    <div
      class="{fills[resolvedColor] ?? fills.nasa} relative h-full transition-all duration-500"
      style="width: {capped}%"
    >
      <!-- tick mark -->
      <div class="absolute -right-px -top-1 h-2.5 w-px bg-ink-0"></div>
    </div>
  </div>
</div>
