<template>
    <button class="cancel-button">
        Cancel
    </button>
</template>

<!-- <script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script> -->

<style scoped>
.cancel-button {
    background-color: crimson;
    color: white;
    font-weight: bold;
    padding: 0.75rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.button:hover {
  background-color: orangered;
}
</style>
