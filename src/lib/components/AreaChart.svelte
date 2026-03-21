<script>
  import { onMount, onDestroy } from 'svelte'
  import { chartColors } from '$lib/tokens/theme.js'

  export let labels   = []
  export let datasets = []  // [{label, data, color}]
  export let stacked  = true
  export let height   = 180

  const C = chartColors
  let canvas, chart

  onMount(() => buildChart())
  onDestroy(() => chart?.destroy())
  $: if (canvas && datasets) buildChart()

  function buildChart() {
    if (!canvas || typeof Chart === 'undefined') return
    chart?.destroy()
    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: datasets.map(ds => ({
          label: ds.label,
          data:  ds.data,
          borderColor:     C[ds.color ?? 'ora'].stroke,
          backgroundColor: C[ds.color ?? 'ora'].fill,
          fill:       true,
          borderWidth: 1.5,
          tension:    0.4,
          pointRadius: 0,
        })),
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 900 },
        plugins: { legend: { display: false }, tooltip: C.tooltip },
        scales: {
          x: { stacked, grid: { display: false }, ticks: { color: C.tick, maxTicksLimit: 6, font: { size: 9, family: "'Share Tech Mono', monospace" } } },
          y: { stacked, grid: { color: C.grid }, ticks: { color: C.tick, font: { size: 9, family: "'Share Tech Mono', monospace" } } },
        },
      },
    })
  }
</script>
<svelte:head><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script></svelte:head>
<div style="height:{height}px;position:relative;"><canvas bind:this={canvas}></canvas></div>
