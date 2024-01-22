<template>
  <div class="detail-container">
    <BannerImage :image-url="newsData?.image" :image-alt="newsData?.results?.title" />
    <NuxtLink :to="{path: './edit', query: {key: newsData?.key}}">
      <BaseButton button-text=" Edit Article" />
    </NuxtLink>
    <ArticleHeadlines
      :title="newsData?.results?.title"
      :subtitle="`Authored by: ${newsData?.results?.author} - ${newsData?.results?.date}`"
    />
    <ArticleParagraphs :article-content="newsData?.results?.content?.slice(1)" />
  </div>
</template>

<script>
import BaseButton from '~/components/atoms/BaseButton.vue';
import BannerImage from '~/components/atoms/BannerImage.vue';
import ArticleHeadlines from '~/components/molecules/ArticleHeadlines.vue';
import ArticleParagraphs from '~/components/molecules/ArticleParagraphs.vue';

export default {
  components: {
    BaseButton,
    BannerImage,
    ArticleHeadlines,
    ArticleParagraphs
  },
  props: {
    newsData: {
      type: Object,
      default: null
    }
  }
}
</script>
