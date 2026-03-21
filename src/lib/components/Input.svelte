<script>
  /**
   * Input
   * @prop {string} label
   * @prop {string} value
   * @prop {string} placeholder
   * @prop {'text'|'password'|'email'|'number'} type
   * @prop {'default'|'error'} state
   * @prop {string} hint
   */
  export let label = ''
  /** @type {string} */
  export let value = ''
  /** @type {string} */
  export let placeholder = ''
  /** @type {'text'|'password'|'email'|'number'} */
  export let type = 'text'
  /** @type {'default'|'error'} */
  export let state = 'default'
  /** @type {string} */
  export let hint = ''

  const inputBase =
    'w-full bg-bg-0 text-ink-0 font-data text-[13px] tracking-wide px-4 py-2.5 border outline-none transition-all duration-150 placeholder:text-ink-2'
  const states = {
    default:
      'border-b1 focus:border-nasa focus:shadow-[0_0_0_1px_theme(colors.nasa.DEFAULT),inset_0_0_10px_rgba(0,85,164,0.06)]',
    error: 'border-red focus:shadow-[0_0_0_1px_theme(colors.red.DEFAULT)]',
  }

  $: inputCls = [inputBase, states[state] ?? states.default].join(' ')
  $: inputId = label
    ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`
    : `input-${Math.random().toString(36).slice(2, 9)}`
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
  {#if type === 'text'}
    <input
      id={inputId}
      type="text"
      {placeholder}
      bind:value
      class={inputCls}
      on:input
      on:change
      on:focus
      on:blur
    />
  {:else if type === 'password'}
    <input
      id={inputId}
      type="password"
      {placeholder}
      bind:value
      class={inputCls}
      on:input
      on:change
      on:focus
      on:blur
    />
  {:else if type === 'email'}
    <input
      id={inputId}
      type="email"
      {placeholder}
      bind:value
      class={inputCls}
      on:input
      on:change
      on:focus
      on:blur
    />
  {:else if type === 'number'}
    <input
      id={inputId}
      type="number"
      {placeholder}
      bind:value
      class={inputCls}
      on:input
      on:change
      on:focus
      on:blur
    />
  {/if}
  {#if state !== 'error' && hint}<span class="font-data text-[11px] tracking-wide text-ink-2"
      >{hint}</span
    >{/if}
</div>
