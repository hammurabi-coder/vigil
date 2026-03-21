<script>
  /**
   *
   */
  export let size = 40 // px
</script>

<div
  class="relative flex flex-shrink-0 items-center justify-center border border-ora"
  style="width:{size}px;height:{size}px"
>
  <div class="absolute w-px bg-ora" style="height:55%"></div>
  <div class="absolute h-px bg-ora" style="width:55%"></div>
  <div class="absolute h-1.5 w-1.5 animate-pip bg-ora"></div>
</div>
