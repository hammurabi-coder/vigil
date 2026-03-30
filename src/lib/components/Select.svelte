<script>
  /**
   * Select
   * @prop {string} label
   * @prop {string} value
   * @prop {Array<{label: string, value: string}>} options
   * @prop {'default'|'error'} state
   * @prop {string} hint
   * @prop {boolean} disabled
   */
  export let label = ''
  /** @type {string} */
  export let value = ''
  /** @type {Array<{label: string, value: string}>} */
  export let options = []
  /** @type {'default'|'error'} */
  export let state = 'default'
  /** @type {string} */
  export let hint = ''
  /** @type {boolean} */
  export let disabled = false

  const inputBase =
    'w-full bg-bg-0 text-luma-0 font-data text-sm tracking-wide px-4 py-2.5 pr-10 border outline-none transition-all duration-150 appearance-none disabled:opacity-40 disabled:cursor-not-allowed'
  const states = {
    default:
      'border-b1 focus-visible:border-ora focus-visible:shadow-[0_0_0_1px_theme(colors.ora.DEFAULT),inset_0_0_10px_rgba(255,107,26,0.06)]',
    error: 'border-red focus-visible:shadow-[0_0_0_1px_theme(colors.red.DEFAULT)]',
  }

  $: inputCls = [inputBase, states[state] ?? states.default].join(' ')
  $: inputId = label
    ? `select-${label.toLowerCase().replace(/\s+/g, '-')}`
    : `select-${Math.random().toString(36).slice(2, 9)}`
  $: hintId = `${inputId}-hint`
  $: ariaDescribedBy = hint ? hintId : undefined
</script>

<div class="flex flex-col gap-1.5">
  {#if label}
    <label
      for={inputId}
      class="text-luma-2 flex items-center gap-2 font-data text-xs uppercase tracking-widest"
    >
      {label}
      {#if state === 'error' && hint}<span class="text-red">⚑ {hint}</span>{/if}
    </label>
  {/if}
  <div class="relative">
    <select
      id={inputId}
      bind:value
      {disabled}
      aria-invalid={state === 'error' ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      class={inputCls}
      on:change
      on:focus
      on:blur
    >
      {#each options as opt (opt.value)}
        <option value={opt.value}>{opt.label}</option>
      {/each}
    </select>
    <!-- Custom chevron — inline SVG matches the technical/mono aesthetic -->
    <svg
      class="text-luma-2 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  {#if state !== 'error' && hint}
    <span id={hintId} class="text-luma-2 font-data text-xs tracking-wide">{hint}</span>
  {/if}
</div>
