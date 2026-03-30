<script>
  import { onMount, onDestroy } from 'svelte'
  import { Chart, registerables } from 'chart.js'
  import { chartColors } from '$lib/tokens/theme.js'

  Chart.register(...registerables)

  /**
   * LineChart
   * @prop {string[]} labels
   * @prop {Array<{label:string, data:number[], color?:'ora'|'red'|'amb'|'violet', dashed?:boolean, fill?:boolean}>} datasets
   * @prop {{min?:number, max?:number, callback?:Function}} yAxis
   * @prop {number} height
   */
  export let labels = []
  /**
   *
   */
  export let datasets = []
  /**
   *
   */
  export let yAxis = {}
  /**
   *
   */
  export let height = 200

  let canvas
  let chart

  const C = chartColors

  function buildChart() {
    if (!canvas) return
    chart?.destroy()

    chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: datasets.map((ds) => {
          const palette = C[ds.color ?? 'ora']
          return {
            label: ds.label,
            data: ds.data,
            borderColor: palette.stroke,
            backgroundColor: ds.fill !== false ? palette.fill : 'transparent',
            fill: ds.fill !== false,
            borderWidth: 1.5,
            borderDash: ds.dashed ? [4, 4] : [],
            tension: 0.35,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: palette.stroke,
          }
        }),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 900, easing: 'easeOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: C.tooltip,
        },
        scales: {
          x: {
            grid: { color: C.grid },
            ticks: {
              color: C.tick,
              maxTicksLimit: 8,
              font: { family: "'Share Tech Mono', monospace", size: 9 },
            },
          },
          y: {
            grid: { color: C.grid },
            min: yAxis.min,
            max: yAxis.max,
            ticks: {
              color: C.tick,
              font: { family: "'Share Tech Mono', monospace", size: 9 },
              callback: yAxis.callback,
            },
          },
        },
      },
    })
  }

  onMount(() => {
    buildChart()
  })

  onDestroy(() => chart?.destroy())

  $: if (canvas && labels && datasets) {
    buildChart()
  }
</script>

<div style="height: {height}px; position: relative;">
  <canvas bind:this={canvas}></canvas>
</div>
