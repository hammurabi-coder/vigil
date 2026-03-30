<script>
  import LogoMark from '$lib/components/LogoMark.svelte'

  /**
   * Topbar
   * @prop {string} title
   * @prop {string} subtitle
   * @prop {string} clock
   */
  /** @type {string} */
  export let title = 'vigil'
  /** @type {string} */
  export let subtitle = 'Operational Dark · Component Library · v0.1.0'
  /** @type {string} */
  export let clock = '——:——:——'
</script>

<header
  class="ora-header border-b1 relative flex items-center justify-between border-b bg-bg-4 px-6 pb-6 pt-6"
>
  <div class="flex items-center gap-4">
    <LogoMark size={32} />
    <div>
      <div class="font-display text-4xl leading-none tracking-wide">{title}</div>
      <div class="mt-1 font-data text-sm text-ink-2">
        {subtitle}
      </div>
    </div>
  </div>
  <div
    class="flex items-center gap-6 text-right font-data text-sm leading-loose tracking-wider text-ink-1"
  >
    <div class="border-b1 border-l pl-6">
      <div class="text-lg tabular-nums text-amb">{clock}</div>
      <div class="text-2xs text-ink-2">System Time</div>
    </div>
  </div>
</header>
