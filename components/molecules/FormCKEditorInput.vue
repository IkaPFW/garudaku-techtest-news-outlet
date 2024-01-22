<template>
  <div>
    <SubTitle :sub-title="subtitle" />
    <ParagraphText paragraph-text="*Provide link for image and embedded video" />
    <RichEditor :v-model="inputValue" :value="inputValue" @input="event => $emit('input', event)" />
  </div>
</template>

<script>
import SubTitle from '~/components/atoms/SubTitle.vue';
import RichEditor from '~/components/atoms/RichEditor.vue';
import ParagraphText from '~/components/atoms/ParagraphText.vue';

export default {
  components: {
    SubTitle,
    RichEditor,
    ParagraphText
},
  props: {
    inputValue: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: this.inputValue
    }
  }
}
</script>
