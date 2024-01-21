<template>
  <p>
    {{ paragraph }}
  </p>
</template>

<script>
export default {
  props: {
    paragraph: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
p {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
