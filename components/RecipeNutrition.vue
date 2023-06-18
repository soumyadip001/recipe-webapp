<template>
  <div
    class="recipe--calories flex gap-2 justify-center items-start w-full mt-4 flex-col"
  >
    <p class="font-bold">Nutrition:</p>
    <div class="flex gap-2 justify-start items-center flex-wrap w-full">
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <span class="capitalize">Sugar</span> {{ props.nutrition.sugar }}g</span
      >
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <span class="capitalize">carbohydrates</span>
        {{ props.nutrition.carbohydrates }}g</span
      >
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <span class="capitalize">fiber</span> {{ props.nutrition.fiber }}g</span
      >
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <span class="capitalize">protein</span> {{ props.nutrition.protein }}g</span
      >
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <span class="capitalize">fat</span> {{ props.nutrition.fat }}g</span
      >
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <span class="capitalize">calories</span>
        {{ props.nutrition.calories }}</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nutrition: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
