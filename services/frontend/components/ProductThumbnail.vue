<template>
  <div class="product-thumbnail">
    <a :href="url" class="thumbnail-link">
      <img :src="url_thumbnail" :alt="name" class="thumbnail-image" />
      <h3 class="thumbnail-name">{{ name }}</h3>
      <p class="thumbnail-price">{{ price }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    url_thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    url() {
      // You can modify the URL format here if needed
      return `/product/${this.name.replace(/\s+/g, '-').toLowerCase()}`;
    }
  }
};
</script>

<style scoped>
.product-thumbnail {
  /* Add your styling for the product thumbnail container here */
}

.thumbnail-link {
  /* Add your styling for the link wrapping the thumbnail image, name, and price here */
}

.thumbnail-image {
  /* Add your styling for the thumbnail image here */
}

.thumbnail-name {
  /* Add your styling for the name here */
}

.thumbnail-price {
  /* Add your styling for the price here */
}
</style>
