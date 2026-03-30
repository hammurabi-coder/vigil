<script>
  /**
   * @prop number - Section number (e.g. "01")
   */
  export let number = ''
</script>

<div class="section-label font-data text-xs uppercase tracking-widest">
  <span class="font-bold text-ora">&#x5B;</span><!--
  -->{#if number}<span class="text-luma-2"
      >{number} ·</span
    >{/if}<!--
  --><slot /><!--
  --><span class="font-bold text-ora">&#x5D;</span>
</div>
