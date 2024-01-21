<template>
  <div class="news-section-container">
    <CardTitle :card-title="newsTitle" />
    <ParagraphText :paragraph="newsContent" />
    <NuxtLink :to="{path: 'news/details', query: {key: newsKey}}">
      <BaseButton button-text="See more" />
    </NuxtLink>
  </div>
</template>

<script>
import BaseButton from '../atoms/BaseButton.vue';
import CardTitle from '../atoms/CardTitle.vue';
import ParagraphText from '../atoms/ParagraphText.vue';

export default {
  components: {
    BaseButton,
    CardTitle,
    ParagraphText
  },
  props: {
    newsKey: {
      type: String,
      default: '',
    },
    newsTitle: {
      type: String,
      default: '',
    },
    newsContent: {
      type: String,
      default: ''
    }
  }
}
</script>
