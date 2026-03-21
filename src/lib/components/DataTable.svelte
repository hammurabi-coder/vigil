<script>
  /**
   * DataTable
   * @prop {Array<{key:string, label:string, color?:'default'|'data'|'ok'|'warn'|'alert'}>} columns
   * @prop {Array<Record<string,any>>} rows
   */
  export let columns = []
  export let rows    = []

  const cellColor = {
    default: 'text-ink-1',
    data:    'text-amb',
    ok:      'text-teal',
    warn:    'text-ora',
    alert:   'text-red',
  }
</script>

<div class="overflow-x-auto">
  <table class="w-full border-collapse font-data text-[10px]">
    <thead>
      <tr>
        {#each columns as col}
          <th class="text-left px-3 py-2 text-ink-2 tracking-widest uppercase border-b border-b1 font-normal text-[8px]">
            {col.label}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr class="group">
          {#each columns as col}
            <td class="px-3 py-2 border-b border-b0 group-last:border-b-0 tracking-wide align-middle
                       group-hover:bg-bg-3 transition-colors duration-100
                       {cellColor[col.color ?? 'default']}">
              {#if col.component}
                <svelte:component this={col.component} value={row[col.key]} row={row} />
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
