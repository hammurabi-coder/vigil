<script>
  /** @type {'primary'|'outline'|'ghost'|'danger'} */
  export let variant = 'primary'
  /** @type {'sm'|'md'|'lg'} */
  export let size = 'md'
  /** @type {boolean} */
  export let disabled = false
  /** @type {'button'|'reset'|'submit'} */
  export let type = 'button'

  const base =
    'font-label font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 relative transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ora active:scale-[0.98]'

  const variants = {
    primary:
      'bg-gradient-to-b from-ora-300 to-ora text-void shadow-[0_4px_12px_theme(colors.glow.ora)] hover:shadow-[0_6px_22px_theme(colors.glow.ora)] active:shadow-[0_1px_4px_rgba(0,0,0,0.5)] active:scale-[0.97]',
    outline: 'bg-transparent text-ora border-[2px] border-ora-700 hover:bg-ora-lo active:bg-ora-lo',
    ghost: 'bg-transparent text-ink-1 border border-b1 hover:border-b2 hover:text-ink-0',
    danger:
      'bg-red text-white hover:shadow-[0_0_20px_theme(colors.glow.red)] active:brightness-90 active:shadow-[0_1px_4px_rgba(0,0,0,0.4)]',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-sm px-8 py-3',
  }

  $: cls = [base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md].join(' ')
</script>

<button {type} {disabled} class={cls} {...$$restProps} on:click on:focus on:blur on:keydown>
  <slot />
</button>
