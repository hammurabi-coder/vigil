<script>
  /**
   * DataReadout — operational numeric display
   * @prop {string|number} value
   * @prop {string} label   — small uppercase label above
   * @prop {string} unit    — small text below
   * @prop {'default'|'ok'|'alert'|'primary'} color
   * @prop {'sm'|'md'|'lg'|'xl'} size
   */
  export let value   = '—'
  export let label   = ''
  export let unit    = ''
  export let color   = 'default'   // default = amber
  export let size    = 'md'

  const colorMap = {
    default: 'text-amb',
    ok:      'text-teal',
    alert:   'text-red animate-blink-slow',
    primary: 'text-ink-0',
    warn:    'text-ora',
  }

  const sizeMap = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-[52px]',
    xl: 'text-hero',
  }

  $: valCls = [colorMap[color] ?? colorMap.default, sizeMap[size] ?? sizeMap.md, 'font-data leading-none tracking-tight'].join(' ')
</script>

<div class="font-data select-none">
  {#if label}
    <div class="text-[8px] tracking-widest text-ink-2 uppercase mb-1">{label}</div>
  {/if}
  <div class={valCls}>{value}</div>
  {#if unit}
    <div class="text-[8px] tracking-wider text-ink-2 uppercase mt-1">{unit}</div>
  {/if}
</div>
