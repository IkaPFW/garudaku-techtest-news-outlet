<template>
  <h1>
    <b>
      {{ articleTitle }}
    </b>
  </h1>
</template>

<script>
export default {
  props: {
    articleTitle: {
      type: String,
      default: 'Placeholder Title'
    }
  }
}
</script>

<style>
h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
