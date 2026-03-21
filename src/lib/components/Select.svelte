<script>
  /**
   * Select
   * @prop {string} label
   * @prop {string} value
   * @prop {Array<{label: string, value: string}>} options
   * @prop {'default'|'error'} state
   * @prop {string} hint
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

  const inputBase =
    'w-full bg-bg-0 text-ink-0 font-data text-[13px] tracking-wide px-4 py-2.5 border outline-none transition-all duration-150 appearance-none'
  const states = {
    default:
      'border-b1 focus:border-ora focus:shadow-[0_0_0_1px_theme(colors.ora.DEFAULT),inset_0_0_10px_rgba(255,107,26,0.06)]',
    error: 'border-red focus:shadow-[0_0_0_1px_theme(colors.red.DEFAULT)]',
  }

  $: inputCls = [inputBase, states[state] ?? states.default].join(' ')
  $: inputId = label
    ? `select-${label.toLowerCase().replace(/\s+/g, '-')}`
    : `select-${Math.random().toString(36).slice(2, 9)}`
</script>

<div class="flex flex-col gap-1.5">
  {#if label}
    <label
      for={inputId}
      class="flex items-center gap-2 font-data text-[11px] uppercase tracking-widest text-ink-2"
    >
      {label}
      {#if state === 'error' && hint}<span class="text-red">⚑ {hint}</span>{/if}
    </label>
  {/if}
  <div class="relative">
    <select id={inputId} bind:value class={inputCls} on:change on:focus on:blur>
      {#each options as opt}
        <option value={opt.value}>{opt.label}</option>
      {/each}
    </select>
    <div
      class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-ink-2"
    >
      ▼
    </div>
  </div>
  {#if state !== 'error' && hint}<span class="font-data text-[11px] tracking-wide text-ink-2"
      >{hint}</span
    >{/if}
</div>
