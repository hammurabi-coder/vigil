<script>
  import { onMount, onDestroy } from 'svelte'
  import { Chart, registerables } from 'chart.js'
  import { chartColors } from '$lib/tokens/theme.js'

  Chart.register(...registerables)

  /**
   * Sparkline
   * @prop {number[]} data
   * @prop {'ora'|'red'|'amb'|'violet'} color
   * @prop {number} width
   * @prop {number} height
   */
  export let data = []
  /** @type {'ora'|'red'|'amb'|'violet'} */
  export let color = 'ora'
  /** @type {number} */
  export let width = 60
  /** @type {number} */
  export let height = 24

  const C = chartColors
  let canvas
  let chart

  onMount(() => buildChart())
  onDestroy(() => chart?.destroy())
  $: if (canvas && data) buildChart()

  function buildChart() {
    if (!canvas) return
    chart?.destroy()

    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: data.map((_, i) => i),
        datasets: [
          {
            data,
            borderColor: C[color].stroke,
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: { display: false },
          y: { display: false, min: Math.min(...data) * 0.9, max: Math.max(...data) * 1.1 },
        },
        layout: { padding: 0 },
      },
    })
  }
</script>

<div class="inline-block" style="width: {width}px; height: {height}px;">
  <canvas bind:this={canvas} {width} {height}></canvas>
</div>
