<template>
  <div
    class="recipe-card flex w-full flex-col gap-2 rounded-xl overflow-hidden pb-4 cursor-pointer relative transition-all"
    @click="openRecipeDetailsPage()"
  >
    <div :class="`flex w-full items-start bg-gray-700 h-${props.imgHeight}px`">
      <img :src="props.imgUrl" :alt="props.imgAlt" class="w-full h-full" />
    </div>
    <h4 class="text-2xl font-bold font-n">{{ props.title }}</h4>
    <p class="p-elipsis p-elipsis-l-3">{{ props.desc || "No description found..." }}</p>
    <p v-if="props.ingredients"><strong>Ingredients:</strong> {{ props.ingredients }}</p>
    <div
      class="flex transition-all opacity-0 absolute justify-center items-center w-full h-full bg-gray-900/70 hover:opacity-100"
      v-if="props.showButton"
    >
      <Button>See Details</Button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
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
  ingredients: {
    type: String,
    default: null,
  },
  imgHeight: {
    type: String,
    default: "500",
  },
  details: {
    type: Object,
    required: false,
    default: null,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const openRecipeDetailsPage = () => {
  if (props.details?.slug) {
    router.push(`/details/${props.id}-${props.details?.slug}`);
  } else {
    router.push(`/details/${props.id}`);
  }
};
</script>
<style scoped></style>
