<template>
  <h4>
    <b>
      {{ cardTitle }}
    </b>
  </h4>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: 'Placeholder Title'
    }
  }
}
</script>

<style>
h4 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
