<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte'

  /**
   * Modal
   * @prop {boolean} open
   * @prop {string} title
   * @prop {string} badge
   * @prop {'default'|'alert'} variant
   */
  export let open = false
  /** @type {string} */
  export let title = ''
  /** @type {string} */
  export let badge = ''
  /** @type {'default'|'alert'} */
  export let variant = 'default'

  const dispatch = createEventDispatcher()

  function close() {
    open = false
    dispatch('close')
  }

  /**
   * Handle Escape key to close modal
   * @param {KeyboardEvent} e
   */
  function handleKeydown(e) {
    if (e.key === 'Escape' && open) close()
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown)
    }
  })
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
    <!-- Backdrop -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity"
      on:click={close}
    ></div>

    <!-- Panel -->
    <div
      class="border-b1 relative w-full max-w-lg bg-bg-1 shadow-2xl {variant === 'alert'
        ? 'border border-red shadow-[0_0_30px_rgba(232,32,56,0.15)]'
        : 'border border-ora/50 shadow-[0_0_30px_rgba(255,107,26,0.1)]'}"
      role="dialog"
      aria-modal="true"
    >
      <!-- Header -->
      <header
        class="border-b1 flex items-center justify-between border-b px-5 py-4 {variant === 'alert'
          ? 'bg-red-xlo'
          : 'bg-ora-xlo'}"
      >
        <h2
          class="font-display text-[24px] tracking-wide {variant === 'alert'
            ? 'text-red'
            : 'text-ora'}"
        >
          {title}
        </h2>
        {#if badge}
          <div
            class="border px-2 py-0.5 font-data text-[10px] tracking-widest {variant === 'alert'
              ? 'border-red text-red'
              : 'border-ora text-ora'}"
          >
            {badge}
          </div>
        {/if}
      </header>

      <!-- Body -->
      <div class="p-6">
        <slot />
      </div>

      <!-- Footer -->
      {#if $$slots.footer}
        <footer class="border-b1 flex items-center justify-end gap-3 border-t bg-bg-2 px-6 py-4">
          <slot name="footer" />
        </footer>
      {/if}
    </div>
  </div>
{/if}
