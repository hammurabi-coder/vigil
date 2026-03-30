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
  export let subtitle = 'Operational Interface Library'
  /** @type {string} */
  export let clock = '——:——:——'
</script>

<header
  class="ora-header border-b1 relative flex items-center justify-between border-b bg-bg-4 px-6 pb-6 pt-6"
>
  <div class="flex items-center gap-4">
    <LogoMark size={32} />
    <div>
      <div class="font-display text-4xl font-bold leading-none tracking-wide">{title}</div>
      <div class="text-luma-2 mt-1 font-display text-sm font-bold tracking-wide">
        {subtitle}
      </div>
    </div>
  </div>
  <div
    class="text-luma-1 flex items-center gap-6 text-right font-data text-sm leading-loose tracking-wider"
  >
    <div class="border-b1 border-l pl-6">
      <div class="text-lg tabular-nums text-amb">{clock}</div>
      <div class="text-luma-2 text-2xs">System Time</div>
    </div>
  </div>
</header>
