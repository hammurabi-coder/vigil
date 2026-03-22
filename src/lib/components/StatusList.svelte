<script>
  /**
   * StatusList — vertical list of labelled status rows
   * @prop {Array<{label: string, value: string, status: 'ok'|'warn'|'alert'|'off'}>} items
   */
  export let items = []

  const dotBase = 'w-1.5 h-1.5 rounded-full flex-shrink-0'
  const dots = {
    ok: `${dotBase} bg-teal shadow-[0_0_5px_theme(colors.teal.DEFAULT)]`,
    warn: `${dotBase} bg-ora shadow-[0_0_5px_theme(colors.ora.DEFAULT)] animate-blink-slow`,
    alert: `${dotBase} bg-red shadow-[0_0_7px_theme(colors.red.DEFAULT)] animate-blink`,
    off: `${dotBase} bg-ink-2`,
  }
</script>

<div class="flex flex-col">
  {#each items as item (item.label)}
    <div
      class="border-b0 flex items-center gap-3 border-b py-3 font-data
                text-[11px] uppercase tracking-wider last:border-b-0"
    >
      <div class={dots[item.status] ?? dots.off}></div>
      <span class="flex-1 text-ink-1">{item.label}</span>
      <span class="text-ink-2">{item.value}</span>
    </div>
  {/each}
</div>
