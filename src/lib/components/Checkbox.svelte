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

<!-- Entire row is a label — clicking anywhere toggles the hidden input -->
<label
  for={inputId}
  class="group flex cursor-pointer items-start gap-3 disabled:cursor-not-allowed disabled:opacity-40"
>
  <!-- Hidden native input — the source of truth for :checked state -->
  <input
    id={inputId}
    type="checkbox"
    bind:checked
    {disabled}
    class="peer/checkbox sr-only"
    on:change
  />

  <!-- Visual checkbox box -->
  <span
    class="border-b2 flex-shrluma-0 relative mt-0.5 flex h-4 w-4 items-center justify-center border bg-bg-0 transition-all
           duration-150
           group-disabled:cursor-not-allowed group-disabled:opacity-40 peer-checked/checkbox:border-ora peer-checked/checkbox:bg-ora
           peer-focus-visible/checkbox:ring-2 peer-focus-visible/checkbox:ring-ora
           peer-focus-visible/checkbox:ring-offset-1 peer-focus-visible/checkbox:ring-offset-bg-0"
  >
    <!-- Checkmark — only visible when checked; inherits color from parent span's peer-checked state -->
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
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    {/if}
  </span>

  <!-- Text -->
  {#if label || hint}
    <div class="flex flex-col gap-0.5">
      {#if label}
        <span class="text-luma-0 font-data text-sm">{label}</span>
      {/if}
      {#if hint}
        <span class="text-luma-2 font-data text-xs">{hint}</span>
      {/if}
    </div>
  {/if}
</label>
