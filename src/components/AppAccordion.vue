<script>
import { faqs } from "../assets/data/faqs";
import IconPlus from "./icons/IconPlus.vue";

export default {
  name: "app-accordion",
  data() {
    return {
      faqs,
      activeIdx: 0,
    };
  },
  components: { IconPlus },
};
</script>

<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(faq, i) in faqs" :key="i">
      <div class="accordion-header">
        <span>{{ faq.title }}</span>
        <button type="button" @click="activeIdx = i" v-show="activeIdx !== i">
          <IconPlus />
        </button>
        <button type="button" v-show="activeIdx === i" class="color-text">
          ➖
        </button>
      </div>
      <div class="accordion-content" :class="{ active: activeIdx === i }">
        {{ faq.content }}
      </div>
    </div>
  </div>
</template>

<style>
.accordion {
  text-align: start;
}

.accordion .accordion-item {
  padding-block-start: 0.75rem;
}

.accordion .accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid #d434fe;
  padding-block: 0.75rem 0.5rem;
}

.accordion .accordion-content {
  height: 0;
  opacity: 0;
}

.accordion .accordion-content.active {
  padding: 0.75rem 0.625rem;
  opacity: 1;
  height: auto;
  transition: opacity 0.25s;
}
</style>
