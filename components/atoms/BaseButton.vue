<template>
    <button class="button" @click="onclick">
        {{buttonText}}
    </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ''
    },
    onclick: {
      type: Function,
      default: function () {},
    }
  },
}
</script>

<style scoped>
.button {
    background-color: gold;
    color: sienna;
    font-weight: bold;
    padding: 0.75rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.button:hover {
  background-color: goldenrod;
}
</style>
