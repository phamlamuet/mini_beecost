<template>
  <div>
    <p class="">{{ review.user_username }}</p>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true
    },
    // product: {
    //   default: null
    // }
  },

}

</script>
