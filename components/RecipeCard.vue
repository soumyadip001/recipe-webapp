<template>
  <div class="flex w-full flex-col gap-2 rounded-xl overflow-hidden pb-4">
    <div class="flex w-full items-start h-[500px]">
      <img :src="props.imgUrl" :alt="props.imgAlt" class="w-full h-full" />
    </div>
    <h4 class="text-2xl font-bold font-n">{{ props.title }}</h4>
    <p><strong>Ingredients:</strong> {{ props.desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
  },
  title: {
    type: String,
    default: "Avacado Salad",
  },
  desc: {
    type: String,
    default: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  imgAlt: {
    type: String,
    default: "Food Closeup",
  },
});
</script>

<style lang="scss" scoped></style>
