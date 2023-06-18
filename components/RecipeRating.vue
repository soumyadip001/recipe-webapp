<template>
  <div class="recipe--ratings flex gap-2 justify-center items-start w-full mt-4 flex-col">
    <p class="font-bold">Rating:</p>
    <div class="flex gap-2 justify-start items-center flex-wrap w-full">
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <Icon name="fluent:like-16-filled" class="mr-2" />{{
          props.rating.count_positive
        }}</span
      >
      <span class="text-sm text-red-800 bg-red-200 w-max px-4 py-2 rounded-full">
        <Icon name="fluent:thumb-dislike-16-filled" class="mr-2" />{{
          props.rating.count_negative
        }}</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
