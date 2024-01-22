<template>
  <div class="edit-container">
    <div v-if="loadTracker != ''" class="form-container">
      <FormTextInput :input-value="newsTitle" subtitle="Article Title"   @input="changeTitleData"/>
      <FormTextInput :input-value="newsImageUrl" subtitle="Image Url" @input="changeImageData" />
      <FormCKEditorInput :input-value="tempNewsContent.join('\n\n')" subtitle="Content" @input="changeContentData"/>
    </div>
    <CardTitle v-else card-title="Loading data..." />
    <div class="button-container">
      <NuxtLink :to="{path: './details', query: {key: $route.query.key}}">
        <CancelButton />
      </NuxtLink>
      <BaseButton v-if="loadTracker != ''" button-text="Save edit" :onclick="() => submitEdit()" />
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/atoms/BaseButton.vue';
import CancelButton from '~/components/atoms/CancelButton.vue';
import CardTitle from '~/components/atoms/CardTitle.vue';
import FormTextInput from '~/components/molecules/FormTextInput.vue';
import FormCKEditorInput from '~/components/molecules/FormCKEditorInput.vue';

export default {
  name: 'NewsEditPage',
  components: {
    BaseButton,
    CancelButton,
    CardTitle,
    FormTextInput,
    FormCKEditorInput
  },
  data() {
    return {
      loadTracker: '',
      newsTitle: '',
      newsImageUrl: '',
      newsContent: [],
      tempNewsContent: []
    }
  },
  computed: {
    news () {
      return this.$store.state.newsfeed
    }
  },
  async mounted() {
    const data = this.$store.state.newsList.find((val) => {
      return val.key === this.$route.query.key
    })

    if (!data) {
      await this.$store.dispatch('getNewsDetail', this.$route.query.key)

      const newsData = this.$store.state.newsList.find((val) => {
        return val.key === this.$route.query.key
      })

      this.loadTracker = newsData?.key
      this.newsTitle = newsData?.results?.title
      this.newsImageUrl = newsData?.results?.content[0]
      this.tempNewsContent = newsData?.results?.content?.slice(2)
    } else {
      this.loadTracker = data?.key
      this.newsTitle = data?.results?.title
      this.newsImageUrl = data?.results?.content[0]
      this.tempNewsContent = data?.results?.content?.slice(2)
    }
  },
  methods: {
    changeTitleData(e) {
      this.newsTitle = e.target.value
    },
    changeImageData(e) {
      this.newsImageUrl = e.target.value
    },

    changeContentData(e) {
      let temp = e.split('<p>')

      temp = temp.map((val) => {
        val = val.replace('</p>', '')
        val = val.replace('&nbsp;', ' ')

        if(val.includes('</a>')) {
          const startIndex = val.indexOf('"')
          const lastIndex = val.lastIndexOf('"')

          val = val.slice(startIndex + 1, lastIndex)
        }

        return val
      })

      this.newsContent = temp.slice(1)
    },
    submitEdit() {
      this.$store.commit('editNews', {
        key: this.$route.query.key,
        title: this.newsTitle,
        bannerImage: this.newsImageUrl,
        content: this.newsContent.length > 0 ? this.newsContent : this.tempNewsContent
      })

      this.$router.push(`/news/details?key=${this.$route.query.key}`)
    }
  },
}
</script>

<style>
.edit-container{
  margin: 50px 30px 0;
}

.form-container {
  width: 70%;
  margin-bottom: 15px;
}

.form-container input {
  width: 80%;
  padding: 10px;
  border: 1px gray solid;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
