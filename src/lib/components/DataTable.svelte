<script>
  /**
   * DataTable
   * @prop {Array<{key:string, label:string, sortable?:boolean, component?:any, color?:'default'|'data'|'ok'|'warn'|'alert'}>} columns
   * @prop {Array<Record<string,any>>} rows
   */
  export let columns = []
  /** @type {Array<Record<string,any>>} */
  export let rows = []

  const cellColor = {
    default: 'text-ink-1',
    data: 'text-amb',
    ok: 'text-teal',
    warn: 'text-ora',
    alert: 'text-red',
  }

  let sortKey = null
  let sortAsc = true

  function handleSort(key, sortable) {
    if (!sortable) return
    if (sortKey === key) {
      sortAsc = !sortAsc
    } else {
      sortKey = key
      sortAsc = true
    }
  }

  $: sortedRows = [...rows].sort((a, b) => {
    if (!sortKey) return 0
    const aVal = a[sortKey]
    const bVal = b[sortKey]
    if (aVal === bVal) return 0

    const aStr = String(aVal)
    const bStr = String(bVal)
    const numSort = !isNaN(Number(aStr)) && !isNaN(Number(bStr))

    if (numSort) {
      return sortAsc ? Number(aVal) - Number(bVal) : Number(bVal) - Number(aVal)
    } else {
      return sortAsc ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr)
    }
  })
</script>

<div class="overflow-x-auto">
  <table class="w-full border-collapse font-data text-[12px]">
    <thead>
      <tr>
        {#each columns as col (col.key)}
          <th
            class="border-b1 border-b px-4 py-2.5 text-left text-[10px] font-normal uppercase tracking-widest text-ink-2 {col.sortable
              ? 'cursor-pointer hover:text-ink-0'
              : ''}"
            on:click={() => handleSort(col.key, col.sortable)}
            on:keydown={(e) => e.key === 'Enter' && handleSort(col.key, col.sortable)}
            tabindex={col.sortable ? 0 : -1}
          >
            <div class="flex items-center gap-1">
              <span>{col.label}</span>
              {#if sortKey === col.key}
                <span class="text-ora">{sortAsc ? '▲' : '▼'}</span>
              {/if}
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sortedRows as row (row.id || row.key)}
        <tr class="group">
          {#each columns as col (col.key)}
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
