<script>
  /**
   * Panel — base surface container
   * @prop {'default'|'accent'|'alert'|'teal'|'deep'|'raised'} variant
   * @prop {string} title     — optional header label
   * @prop {string} badge     — optional badge text
   * @prop {'ok'|'warn'|'alert'} badgeVariant
   * @prop {boolean} flush    — remove padding (for full-bleed children)
   */
  export let variant      = 'default'
  export let title        = ''
  export let badge        = ''
  export let badgeVariant = 'ok'
  export let flush        = false

  const base = 'relative border border-b1'

  const variants = {
    default: 'bg-bg-1',
    deep:    'bg-bg-0',
    raised:  'bg-bg-2',
    accent:  'bg-bg-1 border-l-2 border-l-ora',
    alert:   'bg-red-xlo border-l-2 border-l-red',
    teal:    'bg-teal-xlo border-l-2 border-l-teal',
  }

  const badgeClasses = {
    ok:    'border-teal text-teal',
    warn:  'border-ora text-ora',
    alert: 'border-red text-red animate-blink',
  }

  $: cls = [base, variants[variant] ?? variants.default, flush ? '' : 'p-5'].join(' ')
</script>

<div class={cls}>
  {#if title || badge}
    <div class="flex items-center justify-between mb-4 pb-2.5 border-b border-b0">
      {#if title}
        <span class="font-data text-[9px] tracking-widest text-ink-1 uppercase">{title}</span>
      {/if}
      {#if badge}
        <span class="font-data text-[8px] px-1.5 py-0.5 border tracking-wider uppercase {badgeClasses[badgeVariant] ?? badgeClasses.ok}">
          {badge}
        </span>
      {/if}
    </div>
  {/if}
  <slot />
</div>
