<script>
  import { onMount, onDestroy } from 'svelte'
  import { Chart, registerables } from 'chart.js'
  import { chartColors } from '$lib/tokens/theme.js'

  Chart.register(...registerables)

  /**
   *
   */
  export let labels = []
  /**
   *
   */
  export let datasets = []
  /**
   *
   */
  export let height = 200

  const C = chartColors
  let canvas, chart

  onMount(() => buildChart())
  onDestroy(() => chart?.destroy())
  $: if (canvas && datasets) buildChart()

  function buildChart() {
    if (!canvas) return
    chart?.destroy()
    chart = new Chart(canvas, {
      type: 'radar',
      data: {
        labels,
        datasets: datasets.map((ds) => ({
          label: ds.label,
          data: ds.data,
          borderColor: C[ds.color ?? 'ora'].stroke,
          backgroundColor: C[ds.color ?? 'ora'].fill,
          borderWidth: 1.5,
          pointRadius: 3,
          pointBackgroundColor: C[ds.color ?? 'ora'].stroke,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 800 },
        plugins: { legend: { display: false }, tooltip: C.tooltip },
        scales: {
          r: {
            min: 0,
            max: 100,
            grid: { color: C.gridLine },
            angleLines: { color: C.gridLine },
            ticks: { display: false, backdropColor: 'transparent' },
            pointLabels: {
              color: C.tick,
              font: { size: 9, family: "'Share Tech Mono', monospace" },
            },
          },
        },
      },
    })
  }
</script>

<div style="height:{height}px;position:relative;"><canvas bind:this={canvas}></canvas></div>
