<template>
  <button
    :class="`btn-primary btn-${props.size}`"
    :type="props.type"
    @click="emit('buttonClicked')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "big",
  },
  type: {
    type: String,
    default: "button",
  },
});
const emit = defineEmits(["buttonClicked"]);
</script>

<style lang="scss" scoped></style>
