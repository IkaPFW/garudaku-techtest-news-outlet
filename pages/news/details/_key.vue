<template>
  <div class="container">
    <NuxtLink to="/">
      <BaseButton button-text="<< Back" />
    </NuxtLink>
    <div class="detail-container">
      <CardTitle v-if="!newsData?.key" card-title="Loading..." />
      <ArticleContent v-else :news-data="newsData" />
    </div>
  </div>
</template>

<script>
import CardTitle from '~/components/atoms/CardTitle.vue';
import BaseButton from '~/components/atoms/BaseButton.vue';
import ArticleContent from '~/components/organism/ArticleContent.vue';

export default {
  name: 'NewsDetailPage',
  components: {
    ArticleContent,
    BaseButton,
    CardTitle,
  },
  data() {
    return {
      newsData: {}
    }
  },
  computed: {
    news() {
      return this.$store.state.newsList
    }
  },
  async mounted() {
    const data = this.$store.state.newsList.find((val) => {
      return val.key === this.$route.query.key
    })

    if (!data) {
      await this.$store.dispatch('getNewsDetail', this.$route.query.key)

      this.newsData = this.$store.state.newsList.find((val) => {
        return val.key === this.$route.query.key
      })
    } else {
      this.newsData = data
    }

    this.newsData.image = this.newsData?.results?.content[0]
  },
}
</script>

<style>
.container {
  width: 70%;
  margin: 50px 30px 0;
}

.detail-container {
  margin: 2rem 0;
}

.detail-container img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.detail-container p {
  font-size: 18px;
}

.paragraph-content img {
  width: 80%;
  margin: 1rem 0;
}
</style>
