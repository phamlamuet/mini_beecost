<template>
  <div>
    <h1>Product Detail</h1>
  </div>
</template>

<script>
// Import statements go here
import apiProductPriceCompare from "@/api/product/ApiProductPriceCompare";
import apiProductRelated from "@/api/product/ApiProductRelated";
import apiProductDetail from "@/api/product/ApiProductDetail";
import apiProductRecommendation from "@/api/product/ApiProductRecommendation";
import apiProductReview from "@/api/product/ApiProductReview";
import ApiProductRelated from "@/api/product/ApiProductRelated";

// Fetch functions
const fetchRelatedProduct = (product) => {

};

const fetchReview = (product) => {
  console.log('list of reviews');
};

const fetchKeyword = (product) => {
  console.log('list of keywords');
};

const fetchPriceHistory = (product) => {
  console.log('price history data');
};

const fetchCompareProducts = (product) => {
  console.log('list of compare products');
};

const fetchProductDetail = async (product) => {
  console.log('product detail data');
  const product_dt = await apiProductDetail.apiGetProductDetail(product);
  console.log('got product detail' + product_dt)
  return product_dt;
};

const fetchRecentProducts = (product) => {
  console.log('list of recent products');
};

export default {
  props: {
    // Your component's props go here
  },
  data() {
    return {
      product: {},
      relatedProducts: [],
      reviews: [],
      keywords: [],
      priceHistory: {},
      compareProducts: {},
      recentProducts: {}
    };
  },
  async asyncData() {

  },
  async fetch() {
    const product_base_id = this.$route.params.id;
    console.log('in product detail page - fetch with product id is ' + product_base_id);

    if (product_base_id) {
      this.product = await fetchProductDetail(
        product_base_id
      );


      this.relatedProducts = await fetchRelatedProduct(product_base_id);
      this.reviews = await fetchReview(product_base_id);
      this.keywords = await fetchKeyword(product_base_id);
      this.priceHistory = await fetchPriceHistory(product_base_id);
      this.compareProducts = await fetchCompareProducts(product_base_id);
      this.recentProducts = await fetchRecentProducts(product_base_id);
    }
  }
  ,
    head()
    {
      // Your page's head section goes here
    }
  ,
    computed: {
      // Your computed properties go here
    }
  ,
    methods: {
      // Your component's methods go here
    },

    layout: 'product_detail_layout',
  };
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
