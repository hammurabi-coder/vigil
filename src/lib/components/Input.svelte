<script>
  /**
   * Input
   * @prop {string} label
   * @prop {string} value
   * @prop {string} placeholder
   * @prop {'text'|'password'|'email'|'number'} type
   * @prop {'default'|'error'} state
   * @prop {string} hint   — optional hint/error message below
   */
  export let label       = ''
  export let value       = ''
  export let placeholder = ''
  export let type        = 'text'
  export let state       = 'default'
  export let hint        = ''

  const inputBase = 'w-full bg-bg-0 text-ink-0 font-data text-[11px] tracking-wide px-3 py-2 border outline-none transition-all duration-150 placeholder:text-ink-2'
  const states = {
    default: 'border-b1 focus:border-ora focus:shadow-[0_0_0_1px_theme(colors.ora.DEFAULT),inset_0_0_10px_rgba(255,107,26,0.04)]',
    error:   'border-red focus:shadow-[0_0_0_1px_theme(colors.red.DEFAULT)]',
  }

  $: inputCls = [inputBase, states[state] ?? states.default].join(' ')
</script>

<div class="flex flex-col gap-1.5">
  {#if label}
    <label class="font-data text-[9px] tracking-widest text-ink-2 uppercase flex items-center gap-2">
      {label}
      {#if state === 'error' && hint}
        <span class="text-red">⚑ {hint}</span>
      {/if}
    </label>
  {/if}
  <input
    {type}
    {placeholder}
    bind:value
    class={inputCls}
    on:input
    on:change
    on:focus
    on:blur
  />
  {#if state !== 'error' && hint}
    <span class="font-data text-[9px] text-ink-2 tracking-wide">{hint}</span>
  {/if}
</div>
