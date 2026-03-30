<script>
  /**
   * Panel — base surface container
   * @prop {'default'|'accent'|'alert'|'teal'|'deep'|'raised'} variant
   * @prop {string} title     — optional header label
   * @prop {string} badge     — optional badge text
   * @prop {'ok'|'warn'|'alert'} badgeVariant
   * @prop {boolean} flush    — remove padding (for full-bleed children)
   */
  export let variant = 'default'
  /**
   *
   */
  export let title = ''
  /**
   *
   */
  export let badge = ''
  /**
   *
   */
  export let badgeVariant = 'ok'
  /**
   *
   */
  export let flush = false

  const base = 'relative border border-b1'

  const variants = {
    default: 'bg-bg-1',
    deep: 'bg-bg-0',
    raised: 'bg-bg-2',
    accent: 'bg-bg-1 border-l-2 border-l-ora',
    alert: 'bg-red-xlo border-l-2 border-l-red',
    teal: 'bg-teal-xlo border-l-2 border-l-teal',
  }

  const badgeClasses = {
    ok: 'border-teal text-teal',
    warn: 'border-ora text-ora',
    alert: 'border-red text-red animate-blink',
  }

  $: cls = [base, variants[variant] ?? variants.default, flush ? '' : 'p-6'].join(' ')

  $: titleCls = [
    'border-b0 mb-5 flex items-center justify-between border-b pb-3',
    flush ? 'px-5 pt-5' : '',
  ].join(' ')
</script>

<div class={cls} {...$$restProps}>
  {#if $$slots.header}
    <slot name="header" />
  {:else if title || badge}
    <div class={titleCls}>
      {#if title}
        <span class="font-data text-xs uppercase tracking-widest text-ink-0">{title}</span>
      {/if}
      {#if badge}
        <span
          class="border px-2 py-0.5 font-data text-xs uppercase tracking-wider {badgeClasses[
            badgeVariant
          ] ?? badgeClasses.ok}"
        >
          {badge}
        </span>
      {/if}
    </div>
  {/if}
  <slot />
</div>
