<script>
  import { onMount, onDestroy } from 'svelte'
  import { Chart, registerables } from 'chart.js'
  import { chartColors } from '$lib/tokens/theme.js'

  Chart.register(...registerables)

  /**
   * BarChart — vertical or horizontal
   * @prop {string[]} labels
   * @prop {number[]} data
   * @prop {'ora'|'red'|'amb'|'teal'|'auto'} color
   * @prop {'vertical'|'horizontal'} orientation
   * @prop {number} height
   */
  export let labels = []
  export let data = []
  export let color = 'auto'
  export let orientation = 'vertical'
  export let height = 200

  const C = chartColors

  function resolveColor(v) {
    if (color !== 'auto') return C[color] ?? C.ora
    return v > 80 ? C.red : v > 60 ? C.ora : C.teal
  }

  let canvas
  let chart

  onMount(() => buildChart())
  onDestroy(() => chart?.destroy())
  $: if (canvas && labels && data) buildChart()

  function buildChart() {
    if (!canvas) return
    chart?.destroy()
    chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: data.map((v) => resolveColor(v).fill),
            borderColor: data.map((v) => resolveColor(v).stroke),
            borderWidth: 1,
            borderRadius: 0,
          },
        ],
      },
      options: {
        indexAxis: orientation === 'horizontal' ? 'y' : 'x',
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 800 },
        plugins: { legend: { display: false }, tooltip: C.tooltip },
        scales: {
          x: {
            grid: { color: orientation === 'horizontal' ? C.grid : 'transparent' },
            ticks: { color: C.tick, font: { family: "'Share Tech Mono', monospace", size: 9 } },
          },
          y: {
            grid: { color: orientation === 'vertical' ? C.grid : 'transparent' },
            ticks: { color: C.tick, font: { family: "'Share Tech Mono', monospace", size: 9 } },
          },
        },
      },
    })
  }
</script>

<div style="height: {height}px; position: relative;">
  <canvas bind:this={canvas}></canvas>
</div>
