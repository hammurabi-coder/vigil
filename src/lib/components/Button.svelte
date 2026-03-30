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
      'bg-gradient-to-b from-ora-300 to-ora text-void shadow-[0_3px_10px_rgba(0,0,0,0.22)] hover:from-ora hover:to-ora-700 hover:shadow-[0_5px_16px_rgba(0,0,0,0.28)] active:from-ora-700 active:to-ora active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] active:scale-[0.97]',
    outline:
      'bg-[#1a1a2a] text-ink-1 border border-[#2a2a3a] shadow-[0_3px_10px_rgba(0,0,0,0.4)] hover:bg-[#222235] hover:shadow-[0_5px_16px_rgba(0,0,0,0.5)] active:bg-[#141422] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:scale-[0.97]',
    ghost:
      'bg-[#141420] text-ink-1 shadow-[0_3px_10px_rgba(0,0,0,0.4)] hover:bg-[#1a1a28] hover:shadow-[0_5px_16px_rgba(0,0,0,0.5)] active:bg-[#0e0e18] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:scale-[0.97]',
    danger:
      'bg-gradient-to-b from-red-300 to-red text-white shadow-[0_3px_10px_rgba(0,0,0,0.22)] hover:from-red hover:to-red-700 hover:shadow-[0_5px_16px_rgba(0,0,0,0.28)] active:from-red-700 active:to-red active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.35)] active:scale-[0.97]',
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
