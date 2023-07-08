<template>
  <div class="">
    <p class="price-current text-red-600 text-2xl font-bold">{{ price }} đ</p>
    <p v-if="price_before_discount && price_before_discount > 0 && price !== price_before_discount" class="price-before-discount text-gray-600 line-through text-sm">
      {{ price_before_discount}}
    </p>
  </div>
</template>
<script>


export default {
  components: {},
  props: {
    price: {},
    price_before_discount: {},
  },

}
</script>

<style scoped>
</style>
