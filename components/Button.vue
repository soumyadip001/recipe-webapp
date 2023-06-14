<template>
  <button :class="`btn-primary btn-${props.size}`" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'big'
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<style lang="scss" scoped></style>
