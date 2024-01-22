<template>
  <div>
    <SubTitle :sub-title="subtitle" />
    <TextInput :input-value="input" @input="event => $emit('input', event)"/>
  </div>
</template>

<script>
import SubTitle from '~/components/atoms/SubTitle.vue';
import TextInput from '~/components/atoms/TextInput.vue';

export default {
  components: {
    SubTitle,
    TextInput
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
