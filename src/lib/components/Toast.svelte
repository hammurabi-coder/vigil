<script>
  import { createEventDispatcher, onMount } from 'svelte'

  /**
   * Toast / Alert
   * @prop {string} title
   * @prop {string} message
   * @prop {'ok'|'warn'|'alert'|'info'} variant
   * @prop {number} duration
   */
  export let title = ''
  /** @type {string} */
  export let message = ''
  /** @type {'ok'|'warn'|'alert'|'info'} */
  export let variant = 'info'
  /** @type {number} */
  export let duration = 5000

  const dispatch = createEventDispatcher()

  const vMap = {
    info: { border: 'border-b1', icon: 'text-ink-0', bg: 'bg-bg-0' },
    ok: { border: 'border-teal', icon: 'text-teal', bg: 'bg-teal-xlo' },
    warn: { border: 'border-ora', icon: 'text-ora', bg: 'bg-ora-xlo' },
    alert: { border: 'border-red', icon: 'text-red', bg: 'bg-red-xlo' },
  }

  onMount(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        dispatch('close')
      }, duration)
      return () => clearTimeout(timer)
    }
  })
</script>

<div
  class="pointer-events-auto flex items-start gap-4 border border-l-2 bg-bg-1 p-4 shadow-2xl transition-all
         {vMap[variant].border} {vMap[variant].bg}"
  role="alert"
>
  <div class="mt-0.5 font-data text-sm {vMap[variant].icon}">
    {#if variant === 'info'}i{:else if variant === 'ok'}✓{:else}⚠{/if}
  </div>
  <div class="flex-1">
    {#if title}
      <h4 class="font-data text-xs uppercase tracking-widest text-ink-0">{title}</h4>
    {/if}
    {#if message}
      <p class="mt-1 font-body text-sm leading-relaxed text-ink-1">
        {message}
      </p>
    {/if}
  </div>
  <button
    class="text-ink-2 transition-colors hover:text-ink-0"
    on:click={() => dispatch('close')}
    aria-label="Close"
  >
    ✕
  </button>
</div>
