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
  class="border-b1 flex-shrluma-0 sticky top-0 flex h-screen w-52 flex-col overflow-y-auto border-r bg-bg-4"
>
  <!-- Logo -->
  <div class="border-b1 flex items-center gap-3 border-b p-5">
    <LogoMark size={36} />
    <div>
      <div class="font-display text-xl leading-none tracking-wide">TERTIUS</div>
      <div class="mt-0.5 font-data text-2xs uppercase tracking-widest text-ora">Design System</div>
    </div>
  </div>

  <!-- Nav links -->
  <div class="flex flex-1 flex-col py-4">
    {#each nav as item (item.id)}
      <a
        href="#{item.id}"
        class="px-5 py-3 font-data text-xs uppercase tracking-widest transition-colors duration-100
               {activeSection === item.id
          ? 'border-l-2 border-ora bg-ora-xlo pl-[calc(1.25rem-2px)] text-ora'
          : 'text-luma-1 hover:text-luma-0 border-l-2 border-transparent'}"
      >
        {item.label}
      </a>
    {/each}
  </div>

  <!-- Clock footer -->
  <div class="border-b1 text-luma-2 border-t p-5 font-data text-2xs tracking-wider">
    <div class="text-base tabular-nums text-amb">{clock}</div>
    <div class="text-luma-2 mt-0.5 text-2xs uppercase tracking-widest">System Time</div>
  </div>
</nav>
