<script>
  import { onMount, onDestroy } from 'svelte'
  import { chartColors } from '$lib/tokens/theme.js'

  export let datasets = []  // [{label, data:[{x,y}], color, pointStyle?}]
  export let height   = 200
  export let xLabel   = ''
  export let yLabel   = ''

  const C = chartColors
  let canvas, chart

  onMount(() => buildChart())
  onDestroy(() => chart?.destroy())
  $: if (canvas && datasets) buildChart()

  function buildChart() {
    if (!canvas || typeof Chart === 'undefined') return
    chart?.destroy()
    chart = new Chart(canvas, {
      type: 'scatter',
      data: {
        datasets: datasets.map(ds => ({
          label: ds.label,
          data:  ds.data,
          backgroundColor: C[ds.color ?? 'teal'].fill,
          borderColor:     C[ds.color ?? 'teal'].stroke,
          borderWidth: 1.5,
          pointRadius: ds.pointRadius ?? 3,
          pointStyle:  ds.pointStyle ?? 'circle',
        })),
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 800 },
        plugins: { legend: { display: false }, tooltip: C.tooltip },
        scales: {
          x: {
            grid: { color: C.grid },
            ticks: { color: C.tick, font: { size: 9, family: "'Share Tech Mono', monospace" } },
            title: xLabel ? { display: true, text: xLabel, color: C.tick, font: { size: 8 } } : { display: false },
          },
          y: {
            grid: { color: C.grid },
            ticks: { color: C.tick, font: { size: 9, family: "'Share Tech Mono', monospace" } },
            title: yLabel ? { display: true, text: yLabel, color: C.tick, font: { size: 8 } } : { display: false },
          },
        },
      },
    })
  }
</script>
<svelte:head><script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script></svelte:head>
<div style="height:{height}px;position:relative;"><canvas bind:this={canvas}></canvas></div>
