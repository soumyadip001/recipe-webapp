<template>
  <section
    :class="`flex justify-between ${props.flexItems} bg-${props.bg} w-full px-24 gap-${
      props.gap
    } my-${props.marginY} ${props.isCol ? 'flex-col' : null}`"
  >
    <slot></slot>
  </section>
</template>

<script setup>
const props = defineProps({
  isCol: {
    type: Boolean,
    default: false,
  },
  flexItems: {
    type: String,
    default: "items-end",
  },
  bg: {
    type: String,
    default: "transparent",
  },
  marginY: {
    type: String,
    default: "12",
  },
  gap: {
    type: String,
    default: "8",
  },
});
</script>

<style lang="scss" scoped></style>
