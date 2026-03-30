<script>
  /**
   * LogPanel — scrollable system event log
   * @prop {Array<{ts: string, level: 'ok'|'warn'|'alert'|'info', text: string}>} entries
   * @prop {number} maxHeight   — px
   * @prop {boolean} autoScroll
   */
  export let entries = []
  /**
   *
   */
  export let maxHeight = 220
  /**
   *
   */
  export let autoScroll = true

  const levelCls = {
    ok: 'text-kelly',
    warn: 'text-ora',
    alert: 'text-red',
    info: 'text-luma-2',
  }

  const levelLabel = {
    ok: '[OK]  ',
    warn: '[WN]  ',
    alert: '[AL]  ',
    info: '[--]  ',
  }

  let container

  $: if (autoScroll && container) {
    if (entries.length > 0) {
      setTimeout(() => {
        if (container) container.scrollTop = container.scrollHeight
      }, 0)
    }
  }
</script>

<div
  bind:this={container}
  class="overflow-y-auto font-data text-xs tracking-wide"
  style="max-height: {maxHeight}px"
  role="log"
  aria-live="polite"
>
  {#each entries as entry (entry.ts + entry.text)}
    <div class="flex gap-3 leading-relaxed">
      <span class="flex-shrluma-0 text-luma-2">{entry.ts} ·</span>
      <span class="flex-shrluma-0 {levelCls[entry.level] ?? levelCls.info}"
        >{levelLabel[entry.level] ?? levelLabel.info}</span
      >
      <span class="text-luma-1">{entry.text}</span>
    </div>
  {/each}
</div>
