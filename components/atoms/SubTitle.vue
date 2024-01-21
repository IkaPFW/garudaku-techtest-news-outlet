<template>
  <h3>
    {{ subTitle }}
  </h3>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: 'Placeholder Title'
    }
  }
}
</script>

<style>
h3 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: gray;
}
</style>
