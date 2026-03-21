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
    'font-label font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 relative transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-ora text-void hover:bg-ora-300 hover:shadow-[0_0_18px_rgba(255,107,26,0.3)]',
    outline: 'bg-transparent text-ora border border-ora hover:bg-ora-xlo',
    ghost: 'bg-transparent text-ink-1 border border-b1 hover:border-b2 hover:text-ink-0',
    danger: 'bg-red text-white hover:brightness-110 hover:shadow-[0_0_20px_rgba(232,32,56,0.3)]',
  }

  const sizes = {
    sm: 'text-[12px] px-4 py-2',
    md: 'text-[13px] px-6 py-2.5',
    lg: 'text-[14px] px-8 py-3',
  }

  $: cls = [base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md].join(' ')
</script>

<!-- Corner notch on primary -->
<button {type} {disabled} class={cls} on:click>
  {#if variant === 'primary'}
    <span
      class="pointer-events-none absolute right-0 top-0 h-0
                 w-0 border-l-[7px]
                 border-t-[7px] border-l-ora-700
                 border-t-void"
    ></span>
  {/if}
  <slot />
</button>
