<template>
  <div class="home-container">
    <div v-for="newsfeed in news" :key="newsfeed.key">
        <NewsCard
          :news-key="newsfeed.key"
          :news-banner-url="newsfeed.thumb"
          :news-title="newsfeed.title"
          :news-content="newsfeed.desc"
        />
      </div>
  </div>
</template>

<script>
import NewsCard from '~/components/organism/NewsCard.vue';

export default {
  name: 'IndexPage',
  components: {
    NewsCard
  },
  computed: {
    news () {
      return this.$store.state.newsfeed
    }
  },
}
</script>

<style>
.home-container {
  padding: 30px 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  row-gap: 50px;
}

.home-container div {
  display: flex;
  flex-direction: column;
}
</style>
