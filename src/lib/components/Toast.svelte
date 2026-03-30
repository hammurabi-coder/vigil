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
    info: { border: 'border-b1', icon: 'text-luma-0', bg: 'bg-bg-0' },
    ok: { border: 'border-violet', icon: 'text-kelly', bg: 'bg-violet-xlo' },
    warn: { border: 'border-ora', icon: 'text-ora', bg: 'bg-ora-xlo' },
    alert: { border: 'border-red', icon: 'text-red', bg: 'bg-red-xlo' },
  }

  let visible = false

  onMount(() => {
    requestAnimationFrame(() => {
      visible = true
    })

    if (duration > 0) {
      const timer = setTimeout(() => {
        visible = false
        setTimeout(() => dispatch('close'), 300)
      }, duration)
      return () => clearTimeout(timer)
    }
  })
</script>

<div
  class="pointer-events-auto flex items-start gap-4 border border-l-2 p-4 shadow-2xl
         transition-[opacity,transform] duration-300 ease-out
         {vMap[variant].border} {vMap[variant].bg}
         {visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}"
  role="alert"
  aria-live={variant === 'alert' ? 'assertive' : 'polite'}
>
  <!-- Icon -->
  <div class="mt-0.5 {vMap[variant].icon}">
    {#if variant === 'info'}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.5" />
        <path d="M7 6v4M7 4.5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    {:else if variant === 'ok'}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 7L5.5 10L11.5 4"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {:else if variant === 'warn'}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1.5L13 12.5H1L7 1.5Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M7 5.5V8M7 9.5v.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    {:else}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1.5L13 12.5H1L7 1.5Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          d="M7 5.5V8M7 9.5v.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    {/if}
  </div>

  <!-- Content -->
  <div class="flex-1">
    {#if title}
      <h4 class="text-luma-0 font-data text-xs uppercase tracking-widest">{title}</h4>
    {/if}
    {#if message}
      <p class="text-luma-1 mt-1 font-body text-sm leading-relaxed">
        {message}
      </p>
    {/if}
  </div>

  <!-- Close -->
  <button
    class="text-luma-2 hover:text-luma-0 transition-colors"
    on:click={() => {
      visible = false
      setTimeout(() => dispatch('close'), 300)
    }}
    aria-label="Close"
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </button>
</div>
