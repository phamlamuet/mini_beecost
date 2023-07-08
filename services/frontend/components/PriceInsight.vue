<template>
  <div class="" v-if="false">
    <span
      v-if="priceInsight && priceInsight.delta_price > 0 && priceInsight.current_price === priceInsight.max_price"
      class="tag-price flex flex-wrap bg-pink-100 text-red-700"
      :title= +priceInsight.delta_price
    >
             <p> priceInsight.delta_price </p>
  </span>
    <span
      v-else-if="priceInsight && priceInsight.delta_price > 0 && priceInsight.current_price < priceInsight.max_price"
      class="tag-price flex flex-wrap bg-pink-100 text-red-600"
      :title="priceInsight.delta_price"
    >
      <p>{{ priceInsight.delta_price}} </p>
  </span>
    <span
      v-else-if="priceInsight && priceInsight.delta_price < 0 && priceInsight.current_price === priceInsight.min_price"
      class="tag-price flex flex-wrap bg-green-200 text-green-800"
      :title="-priceInsight.delta_price"
    >
    <p> -priceInsight.delta_price </p>
  </span>
    <span
      v-else-if="priceInsight && priceInsight.delta_price < 0 && priceInsight.current_price > priceInsight.min_price"
      class="tag-price flex flex-wrap bg-green-200 text-green-700"
      :title="-priceInsight.delta_price"
    >
    <p>-priceInsight.delta_price</p>
  </span>
  </div>
</template>

<script>


export default {

  props: {
    priceInsight: {
      default: null
    }
  },

}
</script>

<style l>

</style>
