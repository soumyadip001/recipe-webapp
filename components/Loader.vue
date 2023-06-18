<template>
  <div
    v-if="props.pending"
    class="absolute w-screen flex justify-center h-screen items-center"
  >
    <div
      class="w-[500px] h-auto flex justify-center items-center bg-gray-700/25 rounded-2xl overflow-hidden"
    >
      <img src="~/assets/loader.gif" alt="Page is loading..." />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pending: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
