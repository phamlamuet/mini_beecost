<template>
  <div class="body-container flex justify-center items-center ">
    <div class="w-2/3">
      <div>
        <Breadcrumb :categories="categories" />
      </div>
      <div class="product-container ">

        <div class="w-full flex items-center lg:items-start flex-col lg:flex-row mb-4 lg:mb-6 px-2 sm:px-0">
          <ProductImageAlbum :url_images="url_images"
            class=" w-full lg:w-1/2 flex-shrink-0 mr-4 lg:p-6 lg:border rounded-xl" />

          <div class="flex-grow mx-6 lg:mx-auto w-full lg:w-1/2">
            <h1
              class="relative product-name flex font-semibold text-base lg:text-lg text-gray-800 select-text mt-4 lg:mt-0">
              <a draggable="false" class="cursor-text" style="word-break: break-word" :href="href" @click.stop.prevent>
                {{ this.product.name }}
              </a>
            </h1>

            <p
              class="lg:w-44 flex items-center text-orange-500 font-medium cursor-pointer lg:hover:text-white lg:hover:bg-orange-500  lg:border border-orange-500 rounded-2xl lg:px-2 py-1 my-2 lg:my-4">
              <span><img alt="Search Icon" src="~/assets/icons/bell.svg" /></span>
              <span>Theo dõi giảm giá</span>

            <p class="flex flex-wrap items-center text-gray-600 mb-4">
              <span>Giá từ shopee</span>
              <img class="rounded-full ml-3 h-8" src="~/assets/shopee.jpg" alt="shopee logo">
            </p>
            </p>

            <div class="flex lg:flex-col justify-between">
              <div
                class="h-full flex-grow flex justify-between lg:justify-start lg:flex-row lg:space-x-10 lg:items-center mb-3">
                <PriceTag :price="this.product.price" :price_before_discount="this.product.price_before_discount" />

                <p>Price insight</p>  
                <div class="">
                  <button class="rounded bg-orange-500 w-full h-full px-2 md:px-4 text-white">Đến nơi bán</button>
                </div>


              </div>

              <div>
                  <p>Static keyword field</p>
              </div>
            </div>


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
import PriceInsight from "@/components/PriceInsight.vue";
import PricePrimary from "../../components/PriceTag.vue"
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
      recentProducts: {},
      url_images: []
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

      console.log('list of categoiries ' + JSON.stringify(this.categories));
      console.log('list of images ' + JSON.stringify(this.product.url_images));
      this.url_images = JSON.parse(JSON.stringify(this.product.url_images));
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
