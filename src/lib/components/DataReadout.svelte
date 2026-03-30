<script>
  /** @type {string|number} */
  export let value = '—'
  /** @type {string} label - small uppercase label above */
  export let label = ''
  /** @type {string} unit - small text below */
  export let unit = ''
  /** @type {'default'|'ok'|'alert'|'primary'} */
  export let color = 'default'
  /** @type {'sm'|'md'|'lg'|'xl'} */
  export let size = 'md'

  const colorMap = {
    default: 'text-amb',
    ok: 'text-kelly',
    alert: 'text-red animate-blink-slow',
    primary: 'text-luma-0',
    warn: 'text-ora',
  }

  const sizeMap = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-hero',
  }

  $: valCls = [
    colorMap[color] ?? colorMap.default,
    sizeMap[size] ?? sizeMap.md,
    'font-data leading-none tracking-tight tabular-nums',
  ].join(' ')
</script>

<div class="select-none font-data">
  {#if label}
    <div class="text-luma-2 mb-1 text-2xs">{label}</div>
  {/if}
  <div class={valCls}>{value}</div>
  {#if unit}
    <div class="text-luma-2 mt-1 text-2xs">{unit}</div>
  {/if}
</div>
