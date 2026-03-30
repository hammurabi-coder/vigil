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
    'font-label font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 relative transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ora rounded-md'

  const variants = {
    primary:
      'bg-gradient-to-b from-ora-300 to-ora text-void shadow-[0_6px_0px_#b84a00,0_8px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_0px_#b84a00,0_12px_24px_rgba(0,0,0,0.3)] active:translate-y-[6px] active:shadow-[0_2px_0px_#b84a00,0_2px_8px_rgba(0,0,0,0.15)]',
    outline:
      'bg-[#1a1a2a] text-ink-1 border border-[#2a2a3a] shadow-[0_6px_0px_#0a0a14,0_8px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_0px_#0a0a14,0_12px_24px_rgba(0,0,0,0.5)] active:translate-y-[6px] active:shadow-[0_2px_0px_#0a0a14,0_2px_8px_rgba(0,0,0,0.2)]',
    ghost:
      'bg-[#141420] text-ink-1 shadow-[0_6px_0px_#2a2a3a,0_8px_16px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_0px_#2a2a3a,0_12px_24px_rgba(0,0,0,0.6)] active:translate-y-[6px] active:shadow-[0_2px_0px_#2a2a3a,0_2px_8px_rgba(0,0,0,0.3)]',
    danger:
      'bg-gradient-to-b from-red-300 to-red text-white shadow-[0_6px_0px_#8b1520,0_8px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_0px_#8b1520,0_12px_24px_rgba(0,0,0,0.3)] active:translate-y-[6px] active:shadow-[0_2px_0px_#8b1520,0_2px_8px_rgba(0,0,0,0.15)]',
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
