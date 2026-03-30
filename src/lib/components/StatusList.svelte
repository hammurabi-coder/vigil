<script>
  /**
   * StatusList — vertical list of labelled status rows
   * @prop {Array<{label: string, value: string, status: 'ok'|'warn'|'alert'|'off'}>} items
   */
  export let items = []

  const dotBase = 'w-1.5 h-1.5 rounded-full flex-shrluma-0'
  // Using hardcoded HSL values instead of theme() — avoids Tailwind JIT
  // scan issues when values live in JS const/template literals
  const dots = {
    ok: `${dotBase} bg-kelly`,
    warn: `${dotBase} bg-ora animate-blink-slow`,
    alert: `${dotBase} bg-red animate-blink`,
    off: `${dotBase} bg-luma-2`,
  }
</script>

<div class="flex flex-col">
  {#each items as item (item.label)}
    <div
      class="border-b0 flex items-center gap-3 border-b py-3 font-data
                text-xs last:border-b-0"
    >
      <div class={dots[item.status] ?? dots.off}></div>
      <span class="text-luma-1 flex-1">{item.label}</span>
      <span class="text-luma-2">{item.value}</span>
    </div>
  {/each}
</div>
