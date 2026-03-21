<script>
  /**
   *
   */
  export let number = ''
</script>

<div class="section-label">
  {#if number}<span class="text-ink-2">{number} ·</span>{/if}
  <slot />
</div>
