<template>
  <button
    class="px-4 py-2 text-xs lg:text-base ml-2 mt-2 mb-1 relative rounded-full bg-white border border-black text-black hover:text-white hover:bg-black flex items-center transition duration-500 ease-in-out"
    :title="name"
  >
    <span class="font-medium" >{{ name }}</span>
  </button>
</template>
<script>


export default {
  props: {
    name: {
      type: String,
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: 'default'
    },
    position: {
      type: Number | String,
      default: 'default'
    },
    mode: {
      type: String,
      required: false
    },

  },
  methods: {

  }
}
</script>
<style lang="css" scoped>


</style>
