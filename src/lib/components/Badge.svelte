<script>
  /**
   * Badge — inline status chip
   * @prop {'ok'|'warn'|'alert'|'muted'} variant
   */
  export let variant = 'ok'

  const variants = {
    ok:    'border-teal text-teal',
    warn:  'border-ora text-ora',
    alert: 'border-red text-red animate-blink',
    muted: 'border-b2 text-ink-2',
  }

  $: cls = `font-data text-[8px] px-1.5 py-0.5 border tracking-wider uppercase inline-flex items-center ${variants[variant] ?? variants.ok}`
</script>

<span class={cls}><slot /></span>
