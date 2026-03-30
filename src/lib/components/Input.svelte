<script>
  /**
   * Input
   * @prop {string} label
   * @prop {string} value
   * @prop {string} placeholder
   * @prop {'text'|'password'|'email'|'number'} type
   * @prop {'default'|'error'|'success'} state
   * @prop {string} hint
   * @prop {boolean} disabled
   */
  export let label = ''
  /** @type {string} */
  export let value = ''
  /** @type {string} */
  export let placeholder = ''
  /** @type {'text'|'password'|'email'|'number'} */
  export let type = 'text'
  /** @type {'default'|'error'|'success'} */
  export let state = 'default'
  /** @type {string} */
  export let hint = ''
  /** @type {boolean} */
  export let disabled = false

  const inputBase =
    'w-full bg-bg-0 text-luma-0 font-data text-sm tracking-wide px-4 py-2.5 border outline-none transition-all duration-150 placeholder:text-luma-2 disabled:opacity-40 disabled:cursor-not-allowed'
  const states = {
    default:
      'border-b1 focus-visible:border-ora focus-visible:shadow-[0_0_0_1px_theme(colors.ora.DEFAULT),inset_0_0_10px_rgba(255,107,26,0.06)]',
    success:
      'border-violet focus-visible:border-violet focus-visible:shadow-[0_0_0_1px_theme(colors.teal.DEFAULT),inset_0_0_10px_rgba(139,92,246,0.06)]',
    error: 'border-red focus-visible:shadow-[0_0_0_1px_theme(colors.red.DEFAULT)]',
  }

  $: inputCls = [inputBase, states[state] ?? states.default].join(' ')
  $: inputId = label
    ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`
    : `input-${Math.random().toString(36).slice(2, 9)}`
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
      {#if state === 'success' && hint}<span class="text-kelly">✓ {hint}</span>{/if}
    </label>
  {/if}
  {#if type === 'text'}
    <input
      id={inputId}
      type="text"
      {placeholder}
      bind:value
      {disabled}
      aria-invalid={state === 'error' ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      class={inputCls}
      {...$$restProps}
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
      {disabled}
      aria-invalid={state === 'error' ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      class={inputCls}
      {...$$restProps}
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
      {disabled}
      aria-invalid={state === 'error' ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      class={inputCls}
      {...$$restProps}
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
      {disabled}
      aria-invalid={state === 'error' ? 'true' : undefined}
      aria-describedby={ariaDescribedBy}
      class={inputCls}
      {...$$restProps}
      on:input
      on:change
      on:focus
      on:blur
    />
  {/if}
  {#if state !== 'error' && state !== 'success' && hint}
    <span id={hintId} class="text-luma-2 font-data text-xs tracking-wide">{hint}</span>
  {/if}
</div>
