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
