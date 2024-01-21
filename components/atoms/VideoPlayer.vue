<template>
  <iframe width="800" height="450" :src="videoUrl">
  </iframe>
</template>

<script>
export default{
  props: {
    videoUrl: {
      type: String,
      default: ''
    }
  }
}
</script>
