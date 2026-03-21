<script>
  import LogoMark from '$lib/components/LogoMark.svelte'

  /**
   * Sidebar
   * @prop {Array<{id: string, label: string}>} nav
   * @prop {string} activeSection
   * @prop {string} clock
   */
  /** @type {Array<{id: string, label: string}>} */
  export let nav = []
  /** @type {string} */
  export let activeSection = ''
  /** @type {string} */
  export let clock = '——:——:——'
</script>

<nav
  class="border-b1 sticky top-0 flex h-screen w-52 flex-shrink-0 flex-col overflow-y-auto border-r bg-bg-1"
>
  <!-- Logo -->
  <div class="border-b1 flex items-center gap-3 border-b p-5">
    <LogoMark size={36} />
    <div>
      <div class="font-display text-[20px] leading-none tracking-wide">TERTIUS</div>
      <div class="mt-0.5 font-data text-[10px] uppercase tracking-widest text-ora">
        Design System
      </div>
    </div>
  </div>

  <!-- Nav links -->
  <div class="flex flex-1 flex-col py-4">
    {#each nav as item}
      <a
        href="#{item.id}"
        class="px-5 py-3 font-data text-[11px] uppercase tracking-widest transition-colors duration-100
               {activeSection === item.id
          ? 'border-l-2 border-ora bg-ora-xlo pl-[calc(1.25rem-2px)] text-ora'
          : 'border-l-2 border-transparent text-ink-1 hover:text-ink-0'}"
      >
        {item.label}
      </a>
    {/each}
  </div>

  <!-- Clock footer -->
  <div class="border-b1 border-t p-5 font-data text-[10px] tracking-wider text-ink-2">
    <div class="text-[15px] tabular-nums text-amb">{clock}</div>
    <div class="mt-0.5 text-[10px] uppercase tracking-widest text-ink-2">System Time</div>
  </div>
</nav>
