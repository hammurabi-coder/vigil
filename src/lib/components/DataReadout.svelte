<script>
  /**
   * DataReadout — operational numeric display
   * @prop {string|number} value
   * @prop {string} label   — small uppercase label above
   * @prop {string} unit    — small text below
   * @prop {'default'|'ok'|'alert'|'primary'} color
   * @prop {'sm'|'md'|'lg'|'xl'} size
   */
  export let value = '—'
  export let label = ''
  export let unit = ''
  export let color = 'default' // default = amber
  export let size = 'md'

  const colorMap = {
    default: 'text-amb',
    ok: 'text-teal',
    alert: 'text-red animate-blink-slow',
    primary: 'text-ink-0',
    warn: 'text-ora',
  }

  const sizeMap = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-[52px]',
    xl: 'text-hero',
  }

  $: valCls = [
    colorMap[color] ?? colorMap.default,
    sizeMap[size] ?? sizeMap.md,
    'font-data leading-none tracking-tight',
  ].join(' ')
</script>

<div class="select-none font-data">
  {#if label}
    <div class="mb-1 text-[10px] uppercase tracking-widest text-ink-2">{label}</div>
  {/if}
  <div class={valCls}>{value}</div>
  {#if unit}
    <div class="mt-1 text-[10px] uppercase tracking-wider text-ink-2">{unit}</div>
  {/if}
</div>
