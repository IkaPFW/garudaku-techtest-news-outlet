<template>
  <img :src="imageUrl" :alt="imageAlt">
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    }
  }
}
</script>
