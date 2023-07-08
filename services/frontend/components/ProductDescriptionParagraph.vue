<template>
  <div>
    <div>{{ paragraph }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      truncatedText: "",
      fullText: ""
    };
  },
  props: {
    paragraph: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      default: 100
    }
  },
  mounted() {
    this.updateText();
  },
  methods: {
    updateText() {
      if (this.paragraph.length > this.maxLength) {
        this.truncatedText = this.paragraph.substring(0, this.maxLength) + "...";
        this.fullText = this.paragraph;
      } else {
        this.truncatedText = this.paragraph;
        this.fullText = this.paragraph;
      }
    },
    toggleExpand() {
      this.expanded = !this.expanded;
    },
    printParagraph() {
      window.print();
    }
  },
  watch: {
    paragraph() {
      this.updateText();
    }
  }
};
</script>

<style scoped>
.paragraph {
  margin-bottom: 10px;
}

.read-more {
  background-color: #3490dc;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.print-button {
  background-color: #27ae60;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
