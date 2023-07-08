<template>
  <div class="border-b border-gray-200 text-gray-500 space-y-2 text-sm">
    <div class="w-full flex flex-row">
      <img class="h-10 w-10 mr-4 rounded-full" :src="review.user_url_image" :alt="review.user_username">
      <div class="flex flex-wrap flex-col items-start text-xs space-y-1">
        <div class="flex flex-wrap space-x-2">
          <p v-if="review.user_username" class="">{{ review.user_username }}</p>
          <p class="flex items-center text-green-500 font-medium">
          </p>
        </div>
        <div> <p>rating {{review.rating }}*</p> </div>
      </div>
    </div>
    <div class="overflow-hidden text-gray-600 max-width-text">
      {{ review.content }}
    </div>
    <div class="image-container flex flex-row">
<!--      <template v-for="image in review.images">-->
<!--       <p> {{image}} </p>-->
<!--      </template>-->
      <img class="h-20 w-20 object-cover hover:h-25 hover:w-25 p-1" v-for="image in review.images"  :src="image" :key = "image" alt="Image">
    </div>

  </div>
</template>

<script>


export default {
  props: {
    review: {
      type: Object,
      required: true
    },
    product: {
      default: null
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
