<!--<template>-->
<!--  <div class="flex flex-col h-full items-center justify-center">-->
<!--    <div class="header-desktop flex items-center lsm-px4 justify-between sm:justify-end lg:justify-between container-v2 w-full overflow-hidden sm:overflow-visible">-->
<!--      <div class="header&#45;&#45;logo mr-6 flex-shrink-0">-->
<!--         <MiniBeecostLogo/> -->
<!--      </div>-->
<!--      <div>-->
<!--        <SearchBox/>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
<div class="header-container">  
<div class=" flex justify-center items-center w-full">
  <div class="flex-shrink-0 mr-6">
      <MiniBeecostLogo />
    </div>
  <div class="flex-grow">
      <SearchBox />
  </div>
</div>
</div>
</template>
<script>
import SearchBox from "@/components/SearchBox.vue";
import MiniBeecostLogo from "@/components/MiniBeecostLogo.vue";
export default {
  components: {
    SearchBox,
    MiniBeecostLogo
  }
}
</script>

<style scoped>
.header-container {
  border-bottom: 1px solid #ccc; /* Add a 1px solid border at the bottom */
  padding: 10px; /* Optional: Add padding to create some space around the header */
}

</style>
