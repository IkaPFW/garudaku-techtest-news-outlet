<template>
  <div class="headline">
    <ArticleTitle :article-title="title" />
    <SubTitle :sub-title="subtitle" />
  </div>
</template>

<script>
import SubTitle from '~/components/atoms/SubTitle.vue';
import ArticleTitle from '~/components/atoms/ArticleTitle.vue';

export default {
  components: {
    SubTitle,
    ArticleTitle
  },
  props: {
    title: {
      type: String,
      default: "Placeholder Title"
    },
    subtitle: {
      type: String,
      default: "Authored by Anon - January 01, 1970"
    }
  }
}
</script>

<style>
.headline {
  margin-bottom: 35px;
}
</style>
