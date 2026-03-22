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
    ok: 'text-teal',
    warn: 'text-ora',
    alert: 'text-red',
    info: 'text-ink-2',
  }

  const levelLabel = {
    ok: '[OK]  ',
    warn: '[WN]  ',
    alert: '[AL]  ',
    info: '[--]  ',
  }

  let container
  $: if (autoScroll && container && entries) {
    // tick then scroll
    setTimeout(() => {
      container.scrollTop = container.scrollHeight
    }, 0)
  }
</script>

<div
  bind:this={container}
  class="overflow-y-auto font-data text-[12px] tracking-wide"
  style="max-height: {maxHeight}px"
  role="log"
  aria-live="polite"
>
  {#each entries as entry}
    <div class="flex gap-3 leading-relaxed">
      <span class="flex-shrink-0 text-ink-2">{entry.ts} ·</span>
      <span class="flex-shrink-0 {levelCls[entry.level] ?? levelCls.info}"
        >{levelLabel[entry.level] ?? levelLabel.info}</span
      >
      <span class="text-ink-1">{entry.text}</span>
    </div>
  {/each}
</div>
