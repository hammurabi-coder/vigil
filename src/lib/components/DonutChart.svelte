<script>
  import { onMount, onDestroy } from 'svelte'
  import { Chart, registerables } from 'chart.js'
  import { chartColors } from '$lib/tokens/theme.js'

  Chart.register(...registerables)

  export let labels = []
  export let data = []
  export let colors = ['ora', 'teal', 'amb', 'red']
  export let height = 180
  export let cutout = '68%'

  const C = chartColors
  let canvas, chart

  onMount(() => buildChart())
  onDestroy(() => chart?.destroy())
  $: if (canvas && data) buildChart()

  function buildChart() {
    if (!canvas) return
    chart?.destroy()
    chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: colors.map((c) => C[c]?.fill ?? C.ora.fill),
            borderColor: colors.map((c) => C[c]?.stroke ?? C.ora.stroke),
            borderWidth: 1.5,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout,
        animation: { duration: 900 },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: C.tick,
              padding: 10,
              boxWidth: 7,
              font: { size: 8, family: "'Share Tech Mono', monospace" },
            },
          },
          tooltip: C.tooltip,
        },
      },
    })
  }
</script>

<div style="height:{height}px;position:relative;"><canvas bind:this={canvas}></canvas></div>
