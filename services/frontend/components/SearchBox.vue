<template>
    <div class="flex justify-center items-center">

        <input
          class="placeholder-gray-400 w-full border border-gray-300 bg-white h-12 px-5 pr-12 rounded-full text-base focus:outline-none text-gray-800 flex-grow max-w-2xl"
          type="text"
          v-model="searchTerm"
          @input="handleInput"
          @keyup.enter="handleSearch"
          placeholder="Dán link hoặc tìm sản phẩm"
        />
        <!-- <div class="absolute min-w-12 aspect-h1-w1 h-full inset-y-0 right-0 flex items-center justify-center cursor-pointer rounded-r-full text-primary-500 hover:text-blue-500"  >
            <img alt="Search Icon" src="~/assets/icons/magnifying-glass.svg"/>
        </div> -->
      </div>
  </template>

<script>


import apiGetProductIdPlatform from '@/api/search/searchProductLink'
import searchProductLink from "@/api/search/searchProductLink";
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            searchTerm: '',
        };
    },

    methods: {
      async handleSearch() {
         console.log('Searching for:', this.searchTerm);
         const product_Id = await searchProductLink.apiGetProductIdPlatform(this.searchTerm);
         await this.navigateToProductDetail(product_Id)
      },

      handleInput(){
        this.handleSearch()
      },

      async navigateToProductDetail(productId) {
        const id = productId;
        await this.$router.push({ name: 'ProductDetail-id', params: { id: productId } });
      },
      // ...mapActions(['fetchProductId']),
    },
};
</script>

<style scoped>


</style>
