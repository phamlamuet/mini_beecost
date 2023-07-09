<template>
  <div class="break-words">
    <div class = "text-gray-500 whitespace-pre-wrap" v-if="!expanded">{{ truncatedText }}</div>
    <div class="text-gray-500 whitespace-pre-wrap" v-else>{{ paragraph }}</div>
    <button @click="toggleExpanded" class="text-orange-500 underline">
      {{ expanded ? 'Thu gọn' : 'Xem thêm' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      maxLength: 300 // Maximum length for truncated text
    };
  },
  props: {
    paragraph: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
  },
  computed: {
    truncatedText() {
      if (!this.paragraph) {
        return '';
      }
      if (this.paragraph.length <= this.maxLength) {
        return this.paragraph;
      } else {
        return this.paragraph.substring(0, this.maxLength) + '...';
      }
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
