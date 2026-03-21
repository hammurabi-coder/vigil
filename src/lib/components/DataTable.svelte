<script>
  /**
   * DataTable
   * @prop {Array<{key:string, label:string, color?:'default'|'data'|'ok'|'warn'|'alert'}>} columns
   * @prop {Array<Record<string,any>>} rows
   */
  export let columns = []
  export let rows = []

  const cellColor = {
    default: 'text-ink-1',
    data: 'text-amb',
    ok: 'text-teal',
    warn: 'text-ora',
    alert: 'text-red',
  }
</script>

<div class="overflow-x-auto">
  <table class="w-full border-collapse font-data text-[12px]">
    <thead>
      <tr>
        {#each columns as col}
          <th
            class="border-b1 border-b px-4 py-2.5 text-left text-[10px] font-normal uppercase tracking-widest text-ink-2"
          >
            {col.label}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr class="group">
          {#each columns as col}
            <td
              class="border-b0 border-b px-4 py-2.5 align-middle tracking-wide transition-colors
                       duration-100 group-last:border-b-0 group-hover:bg-bg-3
                       {cellColor[col.color ?? 'default']}"
            >
              {#if col.component}
                <svelte:component this={col.component} value={row[col.key]} {row} />
              {:else}
                {row[col.key] ?? '—'}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
