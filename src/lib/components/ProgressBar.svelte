<script>
  /**
   * ProgressBar
   * @prop {string} label
   * @prop {number} value — 0–100
   * @prop {'ora'|'violet'|'red'|'amb'} color
   * @prop {boolean} showValue
   * @prop {{warn:number, alert:number}} thresholds
   */
  export let label = ''
  /** @type {number} */
  export let value = 0
  /** @type {'ora'|'violet'|'red'|'amb'|'auto'} */
  export let color = 'ora'
  /** @type {boolean} */
  export let showValue = true
  /** @type {{warn:number, alert:number}} */
  export let thresholds = { warn: 65, alert: 85 }

  const colorMap = {
    ora: { bg: 'bg-ora', text: 'text-ora' },
    violet: { bg: 'bg-violet', text: 'text-violet' },
    kelly: { bg: 'bg-kelly', text: 'text-kelly' },
    red: { bg: 'bg-red', text: 'text-red' },
    amb: { bg: 'bg-amb', text: 'text-amb' },
  }

  $: capped = Math.min(100, Math.max(0, value))
  $: autoColor = value >= thresholds.alert ? 'red' : value >= thresholds.warn ? 'ora' : 'kelly'
  $: resolved = color === 'auto' ? autoColor : color
  $: styles = colorMap[resolved] ?? colorMap.ora
</script>

<div class="flex flex-col gap-1">
  {#if label || showValue}
    <div class="text-luma-2 flex justify-between font-data text-xs uppercase tracking-wider">
      <span>{label}</span>
      {#if showValue}<span class={styles.text}>{capped}%</span>{/if}
    </div>
  {/if}
  <div class="bg-b1 relative h-px">
    <div class="{styles.bg} relative h-full transition-all duration-500" style="width: {capped}%">
      <div class="bg-luma-0 absolute -right-px -top-1 h-2.5 w-px"></div>
    </div>
  </div>
</div>
