<template>
  <div class="flex flex-col h-full items-center justify-center">
    <div class="header-desktop flex items-center lsm-px4 justify-between sm:justify-end lg:justify-between container-v2 w-full overflow-hidden sm:overflow-visible">
      <div class="header--logo mr-6 flex-shrink-0">
        <MiniBeecostLogo/>
      </div>
      <div>
        <SearchBox/>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBox from "@/components/SearchBox.vue";
import MiniBeecostLogo from "@/components/MiniBeecostLogo.vue";
export default {
  components:{
    SearchBox,
    MiniBeecostLogo
  }
}
</script>
