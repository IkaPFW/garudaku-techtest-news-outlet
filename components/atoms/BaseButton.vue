<template>
    <button class="button">
        {{buttonText}}
    </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.button {
    background-color: cadetblue;
    color: white;
    padding: 0.75rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.button:hover {
  background-color: teal;
}
</style>
