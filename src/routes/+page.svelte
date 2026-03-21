<script>
  /* eslint-disable max-lines */
  import { onMount } from 'svelte'

  import LogoMark from '$lib/components/LogoMark.svelte'
  import SectionLabel from '$lib/components/SectionLabel.svelte'
  import Panel from '$lib/components/Panel.svelte'
  import Badge from '$lib/components/Badge.svelte'
  import Button from '$lib/components/Button.svelte'
  import Input from '$lib/components/Input.svelte'
  import DataReadout from '$lib/components/DataReadout.svelte'
  import StatusList from '$lib/components/StatusList.svelte'
  import ProgressBar from '$lib/components/ProgressBar.svelte'
  import NodeGrid from '$lib/components/NodeGrid.svelte'
  import LogPanel from '$lib/components/LogPanel.svelte'
  import Ticker from '$lib/components/Ticker.svelte'
  import DataTable from '$lib/components/DataTable.svelte'
  import LineChart from '$lib/components/LineChart.svelte'
  import BarChart from '$lib/components/BarChart.svelte'
  import AreaChart from '$lib/components/AreaChart.svelte'
  import RadarChart from '$lib/components/RadarChart.svelte'
  import DonutChart from '$lib/components/DonutChart.svelte'
  import ScatterChart from '$lib/components/ScatterChart.svelte'

  // ── Clock ─────────────────────────────────────────────────
  let clock = '——:——:——'
  let elapsed = '00:00:00'
  const t0 = Date.now()

  onMount(() => {
    const id = setInterval(() => {
      clock = new Date().toLocaleTimeString('en-US', { hour12: false })
      const s = Math.floor((Date.now() - t0) / 1000)
      elapsed = [
        String(Math.floor(s / 3600)).padStart(2, '0'),
        String(Math.floor((s % 3600) / 60)).padStart(2, '0'),
        String(s % 60).padStart(2, '0'),
      ].join(':')
    }, 1000)
    return () => clearInterval(id)
  })

  // ── Nav sections ──────────────────────────────────────────
  const nav = [
    { id: 'colors', label: '01 · Colors' },
    { id: 'type', label: '02 · Type' },
    { id: 'panels', label: '03 · Panels' },
    { id: 'readouts', label: '04 · Readouts' },
    { id: 'charts', label: '05 · Charts' },
    { id: 'status', label: '06 · Status' },
    { id: 'controls', label: '07 · Controls' },
    { id: 'data', label: '08 · Data' },
    { id: 'log', label: '09 · Log' },
  ]

  // ── Status data ───────────────────────────────────────────
  const statusItems = [
    { label: 'MAGI · CASPAR', value: 'OPERATIONAL', status: 'ok' },
    { label: 'MAGI · BALTHASAR', value: 'OPERATIONAL', status: 'ok' },
    { label: 'MAGI · MELCHIOR', value: 'DEGRADED', status: 'warn' },
    { label: 'Primary Power', value: '340A NOMINAL', status: 'ok' },
    { label: 'Umbilical Link', value: 'SEVERED', status: 'alert' },
    { label: 'AT Field Sensor', value: 'SCANNING', status: 'warn' },
    { label: 'Reserve Unit-00', value: 'OFFLINE', status: 'off' },
  ]

  const progressItems = [
    { label: 'CPU Load', value: 67, color: 'auto' },
    { label: 'Memory', value: 84, color: 'auto' },
    { label: 'Network I/O', value: 31, color: 'auto' },
    { label: 'Sync Ratio', value: 73, color: 'amb' },
    { label: 'Battery Reserve', value: 9, color: 'auto' },
    { label: 'Comms BW', value: 55, color: 'auto' },
  ]

  // ── Chart data ────────────────────────────────────────────
  const lineLabels = Array.from({ length: 24 }, (_, i) => `${String(i * 3).padStart(2, '0')}:00`)
  const lineDatasets = [
    {
      label: 'Sync %',
      data: [
        68, 71, 73, 70, 72, 74, 71, 68, 65, 69, 73, 76, 74, 71, 73, 75, 72, 70, 73, 74, 71, 69, 73,
        73,
      ],
      color: 'ora',
      fill: true,
    },
    { label: 'Threshold', data: Array(24).fill(65), color: 'red', dashed: true, fill: false },
  ]

  const barLabels = ['A1', 'A2', 'B3', 'B4', 'C1', 'C5', 'D2', 'D4']
  const barData = [42, 67, 88, 91, 34, 58, 29, 71]

  const areaLabels = Array.from({ length: 16 }, (_, i) => `T+${i * 15}m`)
  const areaDatasets = [
    {
      label: 'Primary',
      data: [40, 42, 45, 44, 46, 48, 45, 47, 50, 48, 46, 49, 52, 50, 48, 51],
      color: 'ora',
    },
    {
      label: 'Reserve',
      data: [20, 21, 20, 22, 21, 20, 22, 20, 19, 21, 20, 22, 21, 20, 21, 20],
      color: 'amb',
    },
    {
      label: 'Aux',
      data: [10, 10, 11, 10, 11, 12, 11, 12, 10, 11, 12, 10, 11, 12, 11, 10],
      color: 'teal',
    },
  ]

  const radarDatasets = [
    { label: 'EVA-01', data: [73, 88, 72, 80, 60, 85], color: 'ora' },
    { label: 'EVA-02', data: [88, 82, 90, 85, 88, 88], color: 'teal' },
  ]

  const scatterDatasets = [
    {
      label: 'Sensor',
      color: 'teal',
      data: Array.from({ length: 20 }, () => ({
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
      })),
    },
    {
      label: 'Threat',
      color: 'red',
      data: [
        { x: 62, y: 70 },
        { x: 58, y: 65 },
      ],
      pointRadius: 6,
      pointStyle: 'crossRot',
    },
  ]

  // ── Table data ────────────────────────────────────────────
  const tableColumns = [
    { key: 'unit', label: 'Unit', color: 'data' },
    { key: 'pilot', label: 'Pilot', color: 'default' },
    { key: 'sync', label: 'Sync %', color: 'data' },
    { key: 'power', label: 'Power', color: 'default' },
    { key: 'at', label: 'AT Field', color: 'default' },
    { key: 'status', label: 'Status', color: 'default' },
  ]

  const tableRows = [
    {
      unit: 'EVA-01',
      pilot: 'S.IKARI',
      sync: '73.1',
      power: 'EXTERNAL',
      at: 'WEAK',
      status: 'ACTIVE',
    },
    {
      unit: 'EVA-00',
      pilot: 'R.AYANAMI',
      sync: '44.8',
      power: 'INTERNAL',
      at: '—',
      status: 'STANDBY',
    },
    {
      unit: 'EVA-02',
      pilot: 'A.SORYU',
      sync: '88.2',
      power: 'EXTERNAL',
      at: 'NOMINAL',
      status: 'ACTIVE',
    },
    { unit: 'EVA-03', pilot: '—', sync: '—', power: 'SEVERED', at: 'HOSTILE', status: 'LOST' },
    { unit: 'EVA-04', pilot: '—', sync: '—', power: '—', at: '—', status: 'DESTROYED' },
  ]

  const tickerItems = [
    { label: 'Ops Elapsed', value: elapsed },
    { label: 'Avg Sync', value: '68.7%', delta: '2.1', deltaDir: 'down' },
    { label: 'Active Units', value: '2', delta: '1', deltaDir: 'down' },
    { label: 'Alert Events', value: '7', delta: '3', deltaDir: 'down' },
    { label: 'MAGI Consensus', value: '2/3' },
  ]

  $: tickerItems[0].value = elapsed

  // ── Log entries ───────────────────────────────────────────
  const logEntries = [
    {
      ts: '00:00:12',
      level: 'ok',
      text: 'MAGI CASPAR synchronisation complete — all nodes nominal',
    },
    { ts: '00:01:04', level: 'ok', text: 'Primary umbilical connected / 340A — voltage stable' },
    { ts: '00:01:09', level: 'ok', text: 'EVA-01 launch sequence authorised · Pilot S. Ikari' },
    { ts: '00:02:31', level: 'warn', text: 'MAGI MELCHIOR processing lag 140ms — investigating' },
    { ts: '00:03:18', level: 'ok', text: 'EVA-02 sync lock achieved · 88.2% · A. Soryu nominal' },
    {
      ts: '00:04:07',
      level: 'alert',
      text: 'Pattern BLUE confirmed — sector B3/B4 · ANGEL CLASS detected',
    },
    {
      ts: '00:04:12',
      level: 'alert',
      text: 'Umbilical link severed — switching EVA-01 to internal power',
    },
    {
      ts: '00:04:52',
      level: 'warn',
      text: 'Internal power: 04:52 remaining · recommend reconnection',
    },
    {
      ts: '00:05:33',
      level: 'alert',
      text: 'EVA-03 signal lost · last pos: sector D7 · status unknown',
    },
    {
      ts: '00:06:01',
      level: 'warn',
      text: 'AT Field sensor array reading marginal — possible interference ▍',
    },
  ]

  // ── Active nav tracking ───────────────────────────────────
  let activeSection = 'colors'

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) activeSection = e.target.id
        }),
      { threshold: 0.3 }
    )
    nav.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  })
</script>

<div class="flex min-h-screen">
  <!-- ── SIDEBAR NAV ─────────────────────────────────────── -->
  <nav
    class="border-b1 sticky top-0 flex h-screen w-52 flex-shrink-0 flex-col overflow-y-auto border-r bg-bg-0"
  >
    <!-- Logo -->
    <div class="border-b1 flex items-center gap-3 border-b p-5">
      <LogoMark size={32} />
      <div>
        <div class="font-display text-[18px] leading-none tracking-wide">TERTIUS</div>
        <div class="mt-0.5 font-data text-[8px] uppercase tracking-widest text-ora">
          Design System
        </div>
      </div>
    </div>

    <!-- Nav links -->
    <div class="flex flex-1 flex-col py-4">
      {#each nav as item}
        <a
          href="#{item.id}"
          class="px-5 py-2.5 font-data text-[9px] uppercase tracking-widest transition-colors duration-100
                 {activeSection === item.id
            ? 'border-l-2 border-nasa bg-nasa-xlo pl-[calc(1.25rem-2px)] text-nasa'
            : 'border-l-2 border-transparent text-warm-1 hover:text-warm-0'}"
        >
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Clock footer -->
    <div class="border-b1 border-t p-5 font-data text-[9px] tracking-wider text-warm-2">
      <div class="text-[13px] tabular-nums text-amb">{clock}</div>
      <div class="mt-0.5 text-[8px] uppercase tracking-widest text-warm-3">System Time</div>
    </div>
  </nav>

  <!-- ── MAIN CONTENT ───────────────────────────────────── -->
  <main class="flex-1 overflow-y-auto">
    <div class="mx-auto max-w-5xl space-y-20 px-8 py-12">
      <!-- MASTHEAD -->
      <header class="nasa-header border-b1 relative flex items-end justify-between border-b pb-6">
        <div>
          <div class="font-display text-[48px] leading-none tracking-wide">vigil</div>
          <div class="mt-2 font-data text-[10px] uppercase tracking-widest text-nasa">
            Operational Dark · Component Library · v0.1.0
          </div>
        </div>
        <div class="text-right font-data text-[9px] leading-loose tracking-wider text-warm-2">
          DOC <span class="text-amb">SP-168-NG</span><br />
          REV <span class="text-amb">0.1.0-alpha</span><br />
          STATUS <span class="text-teal">ACTIVE</span>
        </div>
      </header>

      <!-- 01 · COLORS ─────────────────────────────────────── -->
      <section id="colors">
        <SectionLabel number="01">Color System</SectionLabel>
        <div class="space-y-2">
          <!-- Backgrounds -->
          <div class="flex gap-0.5">
            {#each ['#000000', '#05050C', '#0A0A16', '#0F0F1F', '#151528', '#1C1C34'] as bg, i}
              <div class="flex-1">
                <div class="border-b0 h-12 border" style="background:{bg}"></div>
                <div class="mt-1.5 font-data text-[10px] tracking-wide text-ink-2">BG-{i}</div>
              </div>
            {/each}
          </div>
          <!-- Accent ramps -->
          <div class="mt-4 grid grid-cols-4 gap-4">
            {#each [{ name: 'NASA Red / Primary', swatches: ['#7A0016', '#B3000C', '#E3000F', '#FF3040'], active: 2 }, { name: 'Red / Alert', swatches: ['#5C0018', '#E82038', '#FF5068'], active: 1 }, { name: 'Amber / Data', swatches: ['#7A5800', '#D4A832', '#EDD070'], active: 1 }, { name: 'Teal / Nominal', swatches: ['#105C58', '#26C4BC', '#5EEAE0'], active: 1 }] as ramp}
              <div>
                <div class="mb-2 font-data text-[10px] uppercase tracking-widest text-warm-3">
                  {ramp.name}
                </div>
                <div class="flex gap-0.5">
                  {#each ramp.swatches as swatch, i}
                    <div
                      class="h-8 flex-1 {i === ramp.active
                        ? 'outline outline-1 outline-offset-1 outline-white/30'
                        : ''}"
                      style="background:{swatch}"
                    ></div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
          <!-- Text scale -->
          <div class="mt-4 flex flex-wrap items-center gap-4">
            {#each [['text-ink-0', 'Primary', '#F0EDE6'], ['text-warm-1', 'Secondary', '#E8E6E1'], ['text-warm-3', 'Muted', '#A8A49C'], ['text-warm-5', 'Faint', '#484440']] as [cls, label, hex]}
              <div class="flex items-center gap-2">
                <div class="border-b1 h-4 w-4 rounded-full border" style="background:{hex}"></div>
                <span class="font-data text-[11px] {cls} tracking-wide">{label} · {hex}</span>
              </div>
            {/each}
          </div>
        </div>
      </section>

      <!-- 02 · TYPE ────────────────────────────────────────── -->
      <section id="type">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="02">Typography</SectionLabel>
        <Panel variant="deep" flush>
          {#each [{ sample: 'EVANGELION', cls: 'font-display text-[58px] leading-none tracking-wide', meta: 'Display · 58px · Bebas Neue' }, { sample: 'MISSION CRITICAL ALERT', cls: 'font-label text-[26px] uppercase tracking-widest font-bold', meta: 'Label-XL · 26px · Barlow Condensed 700' }, { sample: 'System Parameter Alpha', cls: 'font-label text-[15px] uppercase tracking-wider font-semibold text-ink-1', meta: 'Label · 15px · Barlow Condensed 600' }, { sample: 'Interface systems require precise nomenclature across all operational readouts.', cls: 'font-body text-[13px] text-ink-1 max-w-xl leading-relaxed', meta: 'Body · 13px · Barlow 400' }, { sample: 'SYS.UPTIME 00:04:32.807 · NODE-03 ACTIVE', cls: 'font-data text-[12px] text-amb tracking-wide', meta: 'Data · 12px · Share Tech Mono' }, { sample: 'OPERATIONAL · RESTRICTED · NERV INTERNAL', cls: 'font-data text-[11px] text-ink-1 tracking-widest2 uppercase', meta: 'Annotation · 11px · STMono' }] as row}
            <div
              class="border-b0 flex items-baseline justify-between gap-4 border-b px-6 py-4 last:border-b-0"
            >
              <div class={row.cls}>{row.sample}</div>
              <div class="flex-shrink-0 font-data text-[10px] tracking-wide text-ink-2">
                {row.meta}
              </div>
            </div>
          {/each}
        </Panel>
      </section>

      <!-- 03 · PANELS ─────────────────────────────────────── -->
      <section id="panels">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="03">Panel Variants</SectionLabel>
        <div class="grid grid-cols-2 gap-0.5">
          <Panel title="Default Panel" badge="NOMINAL" badgeVariant="ok">
            <p class="font-body text-[12px] leading-relaxed text-ink-1">
              Standard surface. BG-1 base with dim border. Use for most content containers.
            </p>
          </Panel>
          <Panel variant="accent" title="Accent Panel" badge="ACTIVE" badgeVariant="warn">
            <p class="font-body text-[12px] leading-relaxed text-ink-1">
              Orange left border + faint tint. For primary action areas or selected states.
            </p>
          </Panel>
          <Panel variant="alert" title="Alert Panel" badge="CRITICAL" badgeVariant="alert">
            <p class="font-body text-[12px] leading-relaxed text-ink-1">
              Red border + background tint. Reserved for system errors and warnings.
            </p>
          </Panel>
          <Panel variant="teal" title="Nominal Panel" badge="OK" badgeVariant="ok">
            <p class="font-body text-[12px] leading-relaxed text-ink-1">
              Teal border for confirmed nominal or success states.
            </p>
          </Panel>
          <Panel variant="deep" title="Deep Panel">
            <p class="font-body text-[12px] leading-relaxed text-ink-1">
              BG-0 background — sits lower in the surface stack. Good for data readout groups.
            </p>
          </Panel>
          <Panel variant="raised" title="Raised Panel">
            <p class="font-body text-[12px] leading-relaxed text-ink-1">
              BG-2 background — slightly elevated. Use for overlays or focus areas.
            </p>
          </Panel>
        </div>
      </section>

      <!-- 04 · READOUTS ───────────────────────────────────── -->
      <section id="readouts">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="04">Data Readouts</SectionLabel>
        <div class="mb-0.5 grid grid-cols-4 gap-0.5">
          <Panel variant="deep"
            ><DataReadout
              label="Sync Ratio"
              value="73.1"
              unit="% · Pilot 01"
              color="default"
              size="lg"
            /></Panel
          >
          <Panel variant="deep"
            ><DataReadout
              label="Reactor Output"
              value="98.4"
              unit="% · Nominal"
              color="ok"
              size="lg"
            /></Panel
          >
          <Panel variant="deep"
            ><DataReadout
              label="Internal Power"
              value="04:52"
              unit="Min Remaining"
              color="alert"
              size="lg"
            /></Panel
          >
          <Panel variant="deep"
            ><DataReadout
              label="Core Temp"
              value="38.9"
              unit="°C · Entry"
              color="primary"
              size="lg"
            /></Panel
          >
        </div>
        <div class="grid grid-cols-4 gap-0.5">
          <Panel variant="deep"
            ><DataReadout
              label="Altitude MSL"
              value="+024.3"
              unit="km"
              color="primary"
              size="sm"
            /></Panel
          >
          <Panel variant="deep"
            ><DataReadout
              label="AT Field"
              value="—"
              unit="Undetected"
              color="alert"
              size="sm"
            /></Panel
          >
          <Panel variant="deep"
            ><DataReadout
              label="Neural Δ"
              value="0.42"
              unit="Delta-V"
              color="primary"
              size="sm"
            /></Panel
          >
          <Panel variant="deep"
            ><DataReadout label="Pulse" value="112" unit="BPM" color="ok" size="sm" /></Panel
          >
        </div>
      </section>

      <!-- 05 · CHARTS ─────────────────────────────────────── -->
      <section id="charts">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="05">Charts &amp; Graphs</SectionLabel>

        <!-- Line + Bar -->
        <div class="mb-0.5 grid grid-cols-3 gap-0.5">
          <div class="col-span-2">
            <Panel
              variant="deep"
              flush
              title="Sync Ratio · 72hr Telemetry"
              badge="LIVE"
              badgeVariant="ok"
            >
              <div class="px-5 pb-5">
                <LineChart
                  labels={lineLabels}
                  datasets={lineDatasets}
                  yAxis={{ min: 60, max: 80, callback: (v) => v + '%' }}
                  height={190}
                />
              </div>
            </Panel>
          </div>
          <Panel variant="deep" flush title="Node Activity" badge="+3 EVENTS" badgeVariant="warn">
            <div class="px-5 pb-5">
              <BarChart labels={barLabels} data={barData} color="auto" height={190} />
            </div>
          </Panel>
        </div>

        <!-- Area + Radar + Donut -->
        <div class="mb-0.5 grid grid-cols-5 gap-0.5">
          <div class="col-span-2">
            <Panel
              variant="deep"
              flush
              title="Power Load · Stacked Area"
              badge="NOMINAL"
              badgeVariant="ok"
            >
              <div class="px-5 pb-5">
                <AreaChart labels={areaLabels} datasets={areaDatasets} height={185} />
              </div>
            </Panel>
          </div>
          <div class="col-span-2">
            <Panel variant="deep" flush title="Unit Performance · Radar">
              <div class="px-4 pb-4">
                <RadarChart
                  labels={['Sync', 'Strength', 'Speed', 'Stamina', 'AT Field', 'Reflex']}
                  datasets={radarDatasets}
                  height={205}
                />
              </div>
            </Panel>
          </div>
          <Panel variant="deep" flush title="Resource Split">
            <div class="px-3 pb-4">
              <DonutChart
                labels={['Primary', 'Reserve', 'Aux', 'Idle']}
                data={[51, 20, 10, 19]}
                colors={['ora', 'amb', 'teal', 'red']}
                height={185}
              />
            </div>
          </Panel>
        </div>

        <!-- Scatter + H-bar -->
        <div class="grid grid-cols-2 gap-0.5">
          <Panel
            variant="deep"
            flush
            title="Threat Vector · Scatter"
            badge="2 CONFIRMED"
            badgeVariant="alert"
          >
            <div class="px-5 pb-5">
              <ScatterChart
                datasets={scatterDatasets}
                xLabel="X-COORD KM"
                yLabel="Y-COORD KM"
                height={190}
              />
            </div>
          </Panel>
          <Panel
            variant="deep"
            flush
            title="Resource Utilisation"
            badge="84% MEM"
            badgeVariant="warn"
          >
            <div class="px-5 pb-5">
              <BarChart
                labels={['CPU', 'Memory', 'Network', 'Storage', 'GPU', 'Comms']}
                data={[67, 84, 31, 58, 45, 55]}
                color="auto"
                orientation="horizontal"
                height={190}
              />
            </div>
          </Panel>
        </div>
      </section>

      <!-- 06 · STATUS ─────────────────────────────────────── -->
      <section id="status">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="06">Status &amp; Progress</SectionLabel>
        <div class="grid grid-cols-2 gap-0.5">
          <Panel variant="deep" title="System Status / MAGI">
            <StatusList items={statusItems} />
          </Panel>
          <Panel variant="deep" title="Resource Allocation">
            <div class="space-y-4">
              {#each progressItems as p}
                <ProgressBar label={p.label} value={p.value} color={p.color} />
              {/each}
            </div>
          </Panel>
        </div>
      </section>

      <!-- 07 · CONTROLS ───────────────────────────────────── -->
      <section id="controls">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="07">Buttons &amp; Inputs</SectionLabel>
        <div class="grid grid-cols-2 gap-0.5">
          <Panel variant="deep" title="Button Variants">
            <div class="space-y-5">
              <div>
                <div class="mb-3 font-data text-[8px] uppercase tracking-widest text-ink-2">
                  Size · Primary
                </div>
                <div class="flex flex-wrap items-start gap-2">
                  <Button size="sm">Execute</Button>
                  <Button>Execute Command</Button>
                  <Button size="lg">Execute Sequence</Button>
                </div>
              </div>
              <div>
                <div class="mb-3 font-data text-[8px] uppercase tracking-widest text-ink-2">
                  Style variants
                </div>
                <div class="flex flex-wrap items-start gap-2">
                  <Button variant="primary">Confirm</Button>
                  <Button variant="outline">Review</Button>
                  <Button variant="ghost">Dismiss</Button>
                  <Button variant="danger">Abort</Button>
                </div>
              </div>
              <div>
                <div class="mb-3 font-data text-[8px] uppercase tracking-widest text-ink-2">
                  Badges
                </div>
                <div class="flex flex-wrap items-center gap-2">
                  <Badge variant="ok">Nominal</Badge>
                  <Badge variant="warn">Active</Badge>
                  <Badge variant="alert">Critical</Badge>
                  <Badge variant="muted">Offline</Badge>
                </div>
              </div>
            </div>
          </Panel>
          <Panel variant="deep" title="Form Inputs">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-3">
                <Input label="Operator ID" placeholder="NERV-0001" />
                <Input label="Access Code" type="password" placeholder="••••••••" />
              </div>
              <Input label="Target Designation" value="ANGEL CLASS / SACHIEL" />
              <Input
                label="Alert Threshold"
                state="error"
                hint="EXCEEDED"
                value="PATTERN BLUE CONFIRMED"
              />
            </div>
          </Panel>
        </div>
      </section>

      <!-- 08 · DATA ───────────────────────────────────────── -->
      <section id="data">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="08">Node Grid &amp; Data Table</SectionLabel>
        <div class="grid grid-cols-3 gap-0.5">
          <div class="col-span-2">
            <Panel
              variant="deep"
              flush
              title="Unit Telemetry / Operational"
              badge="LIVE"
              badgeVariant="warn"
            >
              <DataTable columns={tableColumns} rows={tableRows} />
              <Ticker items={tickerItems} />
            </Panel>
          </div>
          <Panel variant="deep" title="Sector Grid / GeoJO-3">
            <NodeGrid
              cols={8}
              rows={['A', 'B', 'C', 'D', 'E', 'F']}
              animate={true}
              interval={700}
            />
          </Panel>
        </div>
      </section>

      <!-- 09 · LOG ─────────────────────────────────────────── -->
      <section id="log">
        <div class="breathing-space mb-8"></div>
        <SectionLabel number="09">System Log</SectionLabel>
        <!-- Warning stripe -->
        <div class="warning-stripe"></div>
        <Panel
          variant="deep"
          flush
          title="MAGI System Log · Real-time"
          badge="3 CRITICAL"
          badgeVariant="alert"
        >
          <div class="px-5 pb-5">
            <LogPanel entries={logEntries} maxHeight={220} />
          </div>
        </Panel>
        <div class="warning-stripe"></div>
      </section>
    </div>
  </main>
</div>
