<script>
  export let size = 40   // px
</script>

<div
  class="border border-ora flex items-center justify-center relative flex-shrink-0"
  style="width:{size}px;height:{size}px"
>
  <div class="absolute w-px bg-ora" style="height:55%"></div>
  <div class="absolute h-px bg-ora" style="width:55%"></div>
  <div class="w-[7px] h-[7px] bg-ora absolute animate-pip"></div>
</div>
