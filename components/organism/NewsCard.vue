<template>
    <div class="card-container">
        <BannerImage :image-url="newsBannerUrl" :image-alt="newsTitle" />
        <CardContent :news-image="newsBannerUrl" :news-title="newsTitle" :news-content="newsContent" :news-key="newsKey"/>
    </div>
</template>

<script>
import CardContent from '../molecules/CardContent.vue';
import BannerImage from '../atoms/BannerImage.vue';

export default {
  components: {
    CardContent,
    BannerImage
  },
  props: {
    newsBannerUrl: {
      type: String,
      default: '',
    },
    newsKey: {
      type: String,
      default: '1'
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

<style>
.card-container {
  flex: 1 1 300px;
  width: 450px;
  height: max-content;
  border: 1px solid lightslategray;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.4s;
}

.card-container:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}

.news-section-container {
  padding: 25px 30px;
  height: 100%;
  justify-content: space-between;
}

.news-section-container h4,
.news-section-container p {
  margin: 0;
}

.news-section-container h4 {
  margin-bottom: 1rem;
}

.news-section-container a {
  margin-top: 2rem;
  align-self: flex-end;
}
</style>
