<script>
  /**
   * ProgressBar
   * @prop {string} label
   * @prop {number} value — 0–100
   * @prop {'ora'|'teal'|'red'|'amb'} color
   * @prop {boolean} showValue
   * @prop {{warn:number, alert:number}} thresholds
   */
  export let label = ''
  /** @type {number} */
  export let value = 0
  /** @type {'ora'|'teal'|'red'|'amb'|'auto'} */
  export let color = 'ora'
  /** @type {boolean} */
  export let showValue = true
  /** @type {{warn:number, alert:number}} */
  export let thresholds = { warn: 65, alert: 85 }

  const colorMap = {
    ora: { bg: 'bg-ora', text: 'text-ora' },
    teal: { bg: 'bg-teal', text: 'text-teal' },
    red: { bg: 'bg-red', text: 'text-red' },
    amb: { bg: 'bg-amb', text: 'text-amb' },
  }

  $: capped = Math.min(100, Math.max(0, value))
  $: autoColor = value >= thresholds.alert ? 'red' : value >= thresholds.warn ? 'ora' : 'teal'
  $: resolved = color === 'auto' ? autoColor : color
  $: styles = colorMap[resolved] ?? colorMap.ora
</script>

<div class="flex flex-col gap-1">
  {#if label || showValue}
    <div class="flex justify-between font-data text-[11px] uppercase tracking-wider text-ink-2">
      <span>{label}</span>
      {#if showValue}<span class={styles.text}>{capped}%</span>{/if}
    </div>
  {/if}
  <div class="bg-b1 relative h-px">
    <div class="{styles.bg} relative h-full transition-all duration-500" style="width: {capped}%">
      <div class="absolute -right-px -top-1 h-2.5 w-px bg-ink-0"></div>
    </div>
  </div>
</div>
