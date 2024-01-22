<template>
  <input v-model="input" required @input="event => $emit('input', event)"/>
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      required: true,
      default: ''
    },
  },
  data() {
    return {
      input: this.inputValue
    }
  }
}
</script>
