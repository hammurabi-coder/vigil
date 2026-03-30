<script>
  import LogoMark from '$lib/components/LogoMark.svelte'

  /**
   * Topbar
   * @prop {string} title
   * @prop {string} subtitle
   * @prop {string} navTitle
   * @prop {string} clock
   * @prop {string} doc
   * @prop {string} rev
   * @prop {string} status
   */
  /** @type {string} */
  export let title = 'vigil'
  /** @type {string} */
  export let subtitle = 'Operational Dark · Component Library · v0.1.0'
  /** @type {string} */
  export let clock = '——:——:——'
  /** @type {string} */
  export let doc = 'SP-168-NG'
  /** @type {string} */
  export let rev = '0.1.0-alpha'
  /** @type {string} */
  export let status = 'ACTIVE'
</script>

<header
  class="ora-header border-b1 relative flex items-center justify-between border-b bg-bg-4 px-6 pb-6 pt-6"
>
  <div class="flex items-center gap-4">
    <LogoMark size={32} />
    <div>
      <div class="font-display text-4xl leading-none tracking-wide">{title}</div>
      <div class="mt-2 font-data text-lg uppercase tracking-widest text-ora">
        {subtitle}
      </div>
    </div>
  </div>
  <div
    class="flex items-center gap-6 text-right font-data text-sm leading-loose tracking-wider text-ink-1"
  >
    <div>
      DOC <span class="text-amb">{doc}</span><br />
      REV <span class="text-amb">{rev}</span><br />
      STATUS <span class="text-teal">{status}</span>
    </div>
    <div class="border-b1 border-l pl-6">
      <div class="text-lg tabular-nums text-amb">{clock}</div>
      <div class="text-2xs uppercase tracking-widest text-ink-2">System Time</div>
    </div>
  </div>
</header>
