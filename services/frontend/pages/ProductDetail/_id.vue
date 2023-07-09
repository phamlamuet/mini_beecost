<template >
  <div class="body-container flex justify-center items-center">
    <div class="w-2/3">
      <div>
        <Breadcrumb v-if="product && categories.length >0" :categories="categories" />
      </div>
      <div class="product-container ">

        <div class="w-full flex items-center lg:items-start flex-col lg:flex-row mb-4 lg:mb-6 px-2 sm:px-0">
          <ProductImageAlbum v-if="product && url_images.length >0" :url_images="url_images"
            class=" w-full lg:w-1/2 flex-shrink-0 mr-4 lg:p-6 lg:border rounded-xl" />

          <div class="flex-grow mx-6 lg:mx-auto w-full lg:w-1/2">
            <h1
              class="relative product-name flex font-semibold text-base lg:text-lg text-gray-800 select-text mt-4 lg:mt-0">
              <a  class="cursor-text" style="word-break: break-word">
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

              <div class="flex flex-col-reverse lg:flex-col items-end lg:items-start">
                <div class="flex flex-col lg:flex-row items-end lg:items-center text-xs lg:text-sm">
                  <p class="mx-1 text-gray-500">{{ Math.round(this.product.rating_avg) }} &#9733;</p>
                  <p class="mx-1 text-gray-500"> {{ this.product.rating_count }} đánh giá</p>
                  <p class="mx-1 text-gray-500"> {{ this.product.historical_sold }} lượt bán</p>
                </div>
              </div>
            </div>


            <div v-if="this.lst_static_keywords && this.lst_static_keywords.length" class="page-section mb-8">
              <p class="text-base font-medium">Tìm kiếm tương tự</p>
              <div class="overflow-x-scroll hide-scrollbar sm:overflow-hidden">
                <div class="w-max sm:w-full flex flex-row flex-nowrap sm:flex-wrap">
                  <Keyword v-for="(keywordItem, idx) in this.lst_static_keywords" :key="keywordItem.slug"
                    :slug="keywordItem.slug" :name="keywordItem.name" :position="idx" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="description-section border-b border-gray-200 my-6 ">
        <p class="text-lg font-medium">Mô tả sản phẩm</p>
        <ProductDescriptionParagraph :paragraph="this.product.description" />
        </div>


        <div class="review-section py-2  my-6 ">
          <p class="text-lg font-medium">Đánh giá từ người mua</p>
          <div>
            <Review class="pb-4" v-for="review in this.reviews"
                           :review="review"
                           :key="review.review_base_id"
            />
          </div>
        </div>

        <div class="recommend-products-section pb-4 border-b border-gray-200 ">
          <p class="text-lg font-medium">Gợi ý hôm nay</p>
          <div class="product-grid">
          <ProductThumbnail
            v-for="product in this.lst_recent_products"
            :key="product.id"
            :name="product.name"
            :price="product.price"
            :url_thumbnail="product.url_thumbnail"
          />
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
import apiProductRecent from "@/api/product/ApiProductRecent";
import Breadcrumb from "../../components/Breadcrumb.vue";
import ProductImageAlbum from "../../components/ProductImageAlbum.vue";
import Keyword from "@/components/Keyword.vue";
import ProductDescriptionParagraph from "../../components/ProductDescriptionParagraph.vue";
import ProductThumbnail from "@/components/ProductThumbnail.vue";

// Fetch functions
const fetchRelatedProduct = async (product_base_id) => {
  const related_products = await apiProductRelated.ApiGetProductRelated(product_base_id);
  //stub
  return related_products;
};

const fetchReview = async (product_id) => {
  const reviews = await apiProductReview.apiGetProductReview(product_id);
  //ok
  return reviews['reviews'];
};

const fetchKeyword = async (product) => {
  const keywords = await apiStaticKeyword.apiGetKeyWordStaticSearch(product);
  //ok
  return keywords.lst_query_suggestion;
};

const fetchPriceHistory = (product, current_price) => {
  //stub
  return null;
};

const fetchCompareProducts = (product) => {
  console.log('list of compare products');
  //stub
  return null;
};

const fetchProductDetail = async (product) => {
  const product_dt = await apiProductDetail.apiGetProductDetail(product);
  //ok
  return product_dt.data.product_base;
};

const fetchRecentProducts = async () => {
  const lst_products = await apiProductRecent.ApiGetProductRecent();
  console.log('recent product '+JSON.stringify(lst_products));
  return lst_products['products'];
};

export default {
  components: {
    Breadcrumb,
    ProductDescriptionParagraph,
    ProductThumbnail,
    ProductImageAlbum,
    Keyword
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
      url_images: [],
      lst_static_keywords: [],
      lst_recent_products: []
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
      console.log('review of product' + JSON.stringify(this.reviews));
      this.keywords = await fetchKeyword(product_base_id);
      console.log('static keyword' + this.keywords);
      this.priceHistory = await fetchPriceHistory(product_base_id);
      console.log('price history' + this.priceHistory);
      this.compareProducts = await fetchCompareProducts(product_base_id);
      console.log('compare product' + this.compareProducts);
      this.recentProducts = await fetchRecentProducts(product_base_id);
      console.log('recent product ' + this.recentProducts);

      this.categories = this.product.categories;

      console.log('list of categories ' + JSON.stringify(this.categories));
      console.log('list of images ' + JSON.stringify(this.product.url_images));
      this.url_images = JSON.parse(JSON.stringify(this.product.url_images));

      this.lst_static_keywords = await fetchKeyword(product_base_id);
      console.log('list of static keyword' + JSON.stringify((this.lst_static_keywords)));

      const description = this.product.description;
      console.log('description is ' + description);

      this.lst_recent_products = await fetchRecentProducts();

      console.log('recent in fetch' + this.lst_recent_products);


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
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

/* Your component-specific styles go here */
</style>
