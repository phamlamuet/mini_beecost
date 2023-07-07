<template>
  <div class="body-container flex justify-center items-center ">
    <div class="w-2/3">
      <div>
        <Breadcrumb :categories="categories" />
      </div>
      <div class="product-container ">

        <div class="w-full flex items-center lg:items-start flex-col lg:flex-row mb-4 lg:mb-6 px-2 sm:px-0">
          <ProductImageAlbum :product="product" class=" w-full lg:w-1/2 flex-shrink-0 mr-4 lg:p-6 lg:border rounded-xl" />

          <div class = "flex-grow mx-6 lg:mx-auto w-full lg:w-1/2">
            <ProductStockInfo class="p-8"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// Import statements go here
import apiProductPriceCompare from "@/api/product/ApiProductPriceCompare";
import apiProductDetail from "@/api/product/ApiProductDetail";
import apiProductReview from "@/api/product/ApiProductReview";
import apiProductRelated from "@/api/product/ApiProductRelated";
import apiStaticKeyword from "@/api/product/ApiStaticKeyword";
import Breadcrumb from "../../components/Breadcrumb.vue";
import ProductStockInfo from "../../components/ProductStockInfo.vue";
import ProductImageAlbum from "../../components/ProductImageAlbum.vue";
// Fetch functions
const fetchRelatedProduct = async (product_base_id) => {
  const related_products = await apiProductRelated.ApiGetProductRelated(product_base_id);
  return related_products;
};

const fetchReview = async (product_id) => {
  const review = await apiProductReview.apiGetProductReview(product_id);
  return review;
};

const fetchKeyword = async (product) => {
  const keywords = await apiStaticKeyword.apiGetKeyWordStaticSearch(product);
  return keywords
};

const fetchPriceHistory = (product, current_price) => {
  return null;
};

const fetchCompareProducts = (product) => {
  console.log('list of compare products');
  return null;
};

const fetchProductDetail = async (product) => {
  const product_dt = await apiProductDetail.apiGetProductDetail(product);
  return product_dt.data.product_base;
};

const fetchRecentProducts = (product) => {
  console.log('list of recent products');
  return null;
};

export default {
  components: {
    Breadcrumb,
    ProductStockInfo
  },
  props: {
    // Your component's props go here
  },
  data() {
    return {
      product: {},
      categories: [],
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

      console.log(this.product);

      // this.relatedProducts = await fetchRelatedProduct(product_base_id);
      // console.log('recent product' +this.recentProducts);
      this.reviews = await fetchReview(product_base_id);
      console.log('review of product' + this.reviews);
      this.keywords = await fetchKeyword(product_base_id);
      console.log('static keyword' + this.keywords);
      this.priceHistory = await fetchPriceHistory(product_base_id);
      console.log('price history' + this.priceHistory);
      this.compareProducts = await fetchCompareProducts(product_base_id);
      console.log('compare product' + this.compareProducts);
      this.recentProducts = await fetchRecentProducts(product_base_id);
      console.log('recent product ' + this.recentProducts);
      this.categories = this.product.categories;
    }
  }
  ,
  head() {
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
