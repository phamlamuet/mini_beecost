<template>
  <div
    class="product-gallery"
    @keydown.left="selectPreviousImage"
    @keydown.right="selectNextImage"
    tabindex="0"
  >
    <div class="image-container">
      <div class="current-image-container">
        <img :src="currentImage" alt="Product Image" class="current-image"/>
      </div>
    </div>
    <div class="thumbnail-slider">
      <div class="controls">
        <button class="control previous p-1 bg-slate-200" @click="selectPreviousImage">
          ‹
        </button>
        <div class="thumbnail-container" ref="thumbnailContainer">
          <div class="thumbnail-wrapper">
            <button
              class="thumbnail"
              v-for="(image, index) in url_images"
              :key="index"
              @click="setCurrentImage(index)"
              @mouseover="setCurrentImage(index)"
              :class="{ active: currentImageIndex === index }"
            >
              <img :src="image" alt="Thumbnail"/>
            </button>
          </div>
        </div>
        <button class="control next p-1 bg-slate-200" @click="selectNextImage">›</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
      thumbnailWrapperWidth: 0,
    };
  },

  props: {
    url_images: {
      type: Array,
      default: () => [],
    },
  },

  updated() {
    this.$nextTick(() => {
      this.thumbnailWrapperWidth = this.$refs.thumbnailContainer.offsetWidth;
    });
  },
  computed: {
    currentImage() {
      return this.url_images[this.currentImageIndex];
    },
    thumbnailContainerStyle() {
      return {
        width: `${this.thumbnailWrapperWidth}px`,
      };
    },
  },
  methods: {
    setCurrentImage(index) {
      this.currentImageIndex = index;
    },
    selectPreviousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    selectNextImage() {
      if (this.currentImageIndex < this.url_images.length - 1) {
        this.currentImageIndex++;
      }
    },
  },
};
</script>

<style scoped>
.product-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  margin-bottom: 10px;
}

.thumbnail-slider {
  width: 100%;
  overflow: hidden;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.control {
  cursor: pointer;
}

.thumbnail-container {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.thumbnail-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.thumbnail-wrapper {
  display: inline-block;
}

.thumbnail {
  display: inline-block;
  margin-right: 10px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.thumbnail img {
  width: 100px;
  height: 100px;
}

.thumbnail.active {
  border: 2px solid blue; /* Add your active thumbnail styles here */
}

img {
  max-width: 100%;
  height: auto;
}


</style>
