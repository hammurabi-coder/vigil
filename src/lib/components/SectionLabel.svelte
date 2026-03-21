<script>
  /**
   * @prop number - Section number (e.g. "01")
   */
  export let number = ''
</script>

<div class="section-label font-data text-[11px] uppercase tracking-widest">
  <span class="text-nasa">&#x5B;</span><!--
  -->{#if number}<span class="text-warm-3"
      >{number} ·</span
    >{/if}<!--
  --><slot /><!--
  --><span class="text-nasa">&#x5D;</span>
</div>
