# vigil — Component Reference

This document provides quick copy-paste examples for all vigil components.
Remember: the library uses Evangelion/NERV operational dark aesthetic.

## Primitives

### Panel

```svelte
<Panel title="System Status" badge="NOMINAL" badgeVariant="ok">
  <p class="font-body text-[13px] text-ink-1">Main operational pane.</p>
</Panel>

<Panel variant="alert" title="Critical Warning">
  <p>Core breach imminent.</p>
</Panel>
```

### Badge

```svelte
<Badge variant="ok">NOMINAL</Badge>
<Badge variant="warn">DEGRADED</Badge>
<Badge variant="alert">CRITICAL</Badge>
<Badge variant="muted">OFFLINE</Badge>
```

### Button

```svelte
<Button variant="primary" size="md">Execute Command</Button>
<Button variant="outline">Secondary Action</Button>
<Button variant="danger">Abort Sequence</Button>
```

### Input

```svelte
<Input label="Operator ID" placeholder="NERV-0001" />
<Input label="Override Code" state="error" hint="INVALID AUTHORIZATION" type="password" />
```

### Select

```svelte
<Select
  label="Target Designation"
  options={[
    { label: 'Angel Class', value: 'angel' },
    { label: 'Unknown', value: 'unknown' },
  ]}
/>
```

### SectionLabel

```svelte
<SectionLabel number="01">Core Telemetry</SectionLabel>
```

### LogoMark

```svelte
<LogoMark size={36} />
```

## Data Display

### DataReadout

```svelte
<DataReadout label="Sync Ratio" value="88.2" unit="%" color="ok" size="lg" />
```

### StatusList

```svelte
<StatusList
  items={[
    { label: 'MAGI 1', value: 'NOMINAL', status: 'ok' },
    { label: 'MAGI 2', value: 'OFFLINE', status: 'off' },
  ]}
/>
```

### ProgressBar

```svelte
<ProgressBar label="Reactor Output" value={82} thresholds={{ warn: 80, alert: 95 }} />
```

### NodeGrid

```svelte
<NodeGrid cols={8} rows={['A', 'B', 'C']} animate={true} interval={800} />
```

### LogPanel

```svelte
<LogPanel
  entries={[
    { ts: '00:01', level: 'ok', text: 'Sequence started.' },
    { ts: '00:02', level: 'alert', text: 'Pattern blue.' },
  ]}
/>
```

### Ticker

```svelte
<Ticker items={[{ label: 'Active', value: '2', delta: '1', deltaDir: 'down' }]} />
```

### DataTable

```svelte
<DataTable
  columns={[
    { key: 'unit', label: 'Unit', sortable: true },
    { key: 'status', label: 'Status', color: 'data' },
  ]}
  rows={[{ unit: 'EVA-01', status: 'ACTIVE' }]}
/>
```

## Overlays & Transient

### Modal

```svelte
<Modal
  open={isOpen}
  title="Confirm Launch"
  badge="AUTH REQUIRED"
  variant="alert"
  on:close={() => (isOpen = false)}
>
  <p>Are you sure you want to launch EVA-01 with pilot S. Ikari?</p>
  <svelte:fragment slot="footer">
    <Button variant="outline" on:click={() => (isOpen = false)}>Cancel</Button>
    <Button variant="danger">Authorized</Button>
  </svelte:fragment>
</Modal>
```

### Toast

```svelte
<Toast
  title="Link Severed"
  message="Switching to internal power."
  variant="alert"
  duration={5000}
  on:close={handleClose}
/>
```

## Charts (Chart.js wrappers)

### LineChart

```svelte
<LineChart
  labels={['00:00', '01:00']}
  datasets={[{ label: 'Sync', data: [50, 60], color: 'ora' }]}
/>
```

### BarChart

```svelte
<BarChart labels={['A', 'B']} data={[80, 20]} color="auto" />
```

### AreaChart

```svelte
<AreaChart labels={['T1', 'T2']} datasets={[{ label: 'Load', data: [10, 20], color: 'teal' }]} />
```

### RadarChart

```svelte
<RadarChart
  labels={['Str', 'Spd', 'Sync']}
  datasets={[{ label: 'Unit 1', data: [80, 90, 70], color: 'ora' }]}
/>
```

### DonutChart

```svelte
<DonutChart labels={['Idle', 'Active']} data={[80, 20]} colors={['teal', 'ora']} />
```

### ScatterChart

```svelte
<ScatterChart datasets={[{ label: 'Threats', data: [{ x: 40, y: 50 }], color: 'red' }]} />
```

### Sparkline

```svelte
<Sparkline data={[10, 20, 15, 30, 25]} color="ora" />
```
