<script>
  /**
   * Checkbox — tactical checkbox with custom styling
   * @prop {string} label
   * @prop {boolean} checked
   * @prop {boolean} disabled
   * @prop {string} hint
   */
  export let label = ''
  /** @type {boolean} */
  export let checked = false
  /** @type {boolean} */
  export let disabled = false
  /** @type {string} */
  export let hint = ''

  $: inputId = label
    ? `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`
    : `checkbox-${Math.random().toString(36).slice(2, 9)}`
</script>

<div class="flex items-start gap-3">
  <!-- Custom checkbox box -->
  <div class="relative mt-0.5 flex-shrink-0">
    <input
      id={inputId}
      type="checkbox"
      bind:checked
      {disabled}
      class="peer sr-only"
      // sr-only — visual box replaces it
      on:change
    />
    <!-- Custom box — geometric square matching the tactical aesthetic -->
    <div
      class="border-b2 flex h-4 w-4 cursor-pointer items-center justify-center border
             bg-bg-0 transition-all
             duration-150 peer-checked:border-ora peer-checked:bg-ora peer-focus-visible:ring-2
             peer-focus-visible:ring-ora peer-focus-visible:ring-offset-1
             peer-focus-visible:ring-offset-bg-0 peer-disabled:cursor-not-allowed
             peer-disabled:opacity-40"
    >
      <!-- Checkmark — only shown when checked -->
      {#if checked}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 5L4 7.5L8.5 2.5"
            stroke="hsl(21, 100%, 55%)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      {/if}
    </div>
  </div>

  <!-- Label + hint text -->
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
