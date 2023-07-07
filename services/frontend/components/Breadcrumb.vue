<!--<template>-->
<!--    <div>-->
<!--    <p>this is bread crumb</p>-->
<!--      <ul>-->
<!--        <li v-for="category in categories" :key="category.id">-->
<!--           <p>{{ category.name }}</p>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->

<!--  </template>-->
<!--  -->
<!--  <script>-->
<!--  export default {-->
<!--    props: {-->
<!--      categories: {-->
<!--        type: Array,-->
<!--        required: true-->
<!--      }-->
<!--    }-->
<!--  };-->
<!--  </script>-->
<!-- -->

<template>
  <nav class="flex px-4 sm:px-0" aria-label="Breadcrumb" v-if="categories != null && categories.length > 0">
    <ol class="flex items-center lg:space-x-4 md:space-x-2 overflow-hidden overflow-x-auto hide-scrollbar">
      <li v-if="showHomeIcon" class="flex items-center lg:py-2">

        <NuxtLink :to="homeUrl || '/'" no-prefetch class="text-gray-600 hover:text-primary-700">
          <span class="sr-only" itemprop="name">{{ homeName }}</span>
          <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </NuxtLink>
      </li>
      <li v-for="(categoryObj, idx) in categories" :key="categoryObj.url" class="flex items-center lg:py-2">

        <svg v-if="showHomeIcon || (!showHomeIcon && idx > 0)" class="flex-shrink-0 h-5 w-5 text-gray-600 mr-2 md:mr-4"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"/>
        </svg>

        <NuxtLink :to="categoryObj.url || '/'" no-prefetch
                  class="text-gray-600 hover:text-primary-700"
                  itemprop="item">
          <span class="text-sm font-medium whitespace-nowrap"
                itemprop="name" v-html="categoryObj.name">
          </span>
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script>

export default {
  props: {
    categories: {
      type: Array,
      default: []
    },
    schemaSeo: {
      type: Boolean,
      default: true
    },
    showHomeIcon: {
      type: Boolean,
      default: true
    },
    homeName: {
      type: String,
      default: 'Homepage'
    },
    homeUrl: {
      type: String,
      default: '/'
    },
  }
}
</script>
<style lang="scss">

</style>
