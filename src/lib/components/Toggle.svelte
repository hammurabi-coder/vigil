<script>
  /**
   * Toggle — hardware-style on/off switch
   * @prop {string} label
   * @prop {boolean} checked
   * @prop {boolean} disabled
   * @prop {string} hint
   * @prop {string} ariaLabel
   */
  export let label = ''
  /** @type {boolean} */
  export let checked = false
  /** @type {boolean} */
  export let disabled = false
  /** @type {string} */
  export let hint = ''
  /** @type {string} */
  export let ariaLabel = ''

  $: inputId = label
    ? `toggle-${label.toLowerCase().replace(/\s+/g, '-')}`
    : `toggle-${Math.random().toString(36).slice(2, 9)}`
  $: computedAriaLabel = ariaLabel || label || 'Toggle'
</script>

<div class="flex items-start gap-3">
  <!-- Hidden input handles the binding; button is purely visual -->
  <input id={inputId} type="checkbox" bind:checked {disabled} class="sr-only" on:change />

  <!-- Track -->
  <button
    type="button"
    role="switch"
    aria-checked={String(checked)}
    aria-label={computedAriaLabel}
    {disabled}
    on:click={() => (checked = !checked)}
    class="border-b2 relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full border bg-bg-0 transition-all
           duration-200 ease-out
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ora focus-visible:ring-offset-1 focus-visible:ring-offset-bg-0
           disabled:cursor-not-allowed disabled:opacity-40
           {checked ? 'border-ora bg-ora bg-opacity-20' : ''}"
  >
    <!-- Thumb — slides left (off) or right (on) -->
    <span
      class="border-b2 inline-block h-3 w-3 rounded-full border bg-bg-3 shadow-[1px_1px_3px_rgba(0,0,0,0.5)] transition-all duration-200 ease-out
             {checked ? 'translate-x-[18px] border-ora bg-ora' : 'translate-x-[2px] bg-ink-2'}"
    ></span>
  </button>

  <!-- Label + hint -->
  {#if label || hint}
    <div class="flex flex-col gap-0.5">
      {#if label}
        <label
          for={inputId}
          class="cursor-pointer font-data text-sm text-ink-0 peer-disabled:cursor-not-allowed peer-disabled:opacity-40"
        >
          {label}
        </label>
      {/if}
      {#if hint}
        <span class="font-data text-xs text-ink-2">{hint}</span>
      {/if}
    </div>
  {/if}
</div>
