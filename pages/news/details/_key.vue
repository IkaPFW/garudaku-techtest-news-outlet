<template>
  <div class="detail-container">
    <NuxtLink to="/">
      <BaseButton button-text="<< Back" />
    </NuxtLink>
  </div>
</template>

<script>
import BaseButton from '~/components/atoms/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  props: {
    newData: {
      type: Object,
      default: null
    }
  },
  computed: {
    news() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.$store.dispatch('getNewsDetail', this.$route.query.key)

    this.newData = this.$store.state.newsList.find((val) => val.key === this.$route.query.key)
  },
}
</script>

<style>
.detail-container {
  width: 70%;
  margin: 50px 30px 0;
}
</style>
