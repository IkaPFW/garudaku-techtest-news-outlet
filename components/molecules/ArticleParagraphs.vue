<template>
  <div>
    <div
      v-for="line of articleContent"
      :key="line"
      class="paragraph-content"
    >
      <VideoPlayer v-if="line.includes('youtube')" :video-url="line"/>
      <BannerImage v-else-if="line.includes('http')" :image-url="line" image-alt="Article Image"/>
      <ParagraphText v-else :paragraph="line"/>
    </div>
  </div>
</template>

<script>
import BannerImage from '~/components/atoms/BannerImage.vue';
import ParagraphText from '~/components/atoms/ParagraphText.vue';
import VideoPlayer from '~/components/atoms/VideoPlayer.vue';

export default {
  components: {
    BannerImage,
    ParagraphText,
    VideoPlayer
  },
  props: {
    articleContent: {
      type: Array,
      default: null
    }
  }
}
</script>
