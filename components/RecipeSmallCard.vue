<template>
  <div
    :class="`absolute flex px-6 py-2 flex-col justify-center w-56 h-48 bg-white b-${props.bottom}-px l-${props.left}-px shadow-lg rounded-xl overflow-hidden gap-4 hover:shadow-xl cursor-pointer`"
    @click="openDetails"
  >
    <div class="flex w-full h-auto gap-4">
      <div class="w-28 flex justify-center items-center">
        <img :src="props.imgUrl" :alt="props.imgAlt" class="w-full h-auto rounded-lg" />
      </div>
      <div class="grow flex flex-col justify-center gap-2">
        <h4>{{ props.title }}</h4>
        <p>
          <Icon name="fluent-emoji-flat:fire" />
          <span class="ml-2">{{ props.rating }}</span>
        </p>
      </div>
    </div>
    <div class="flex w-full text-sm p-elipsis p-elipsis-l-3">
      20 minute meals, easy and quick breakfast, egg recipes, healthy food, keto breakfast
      sandwich
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  bottom: {
    type: String,
    default: "45",
  },
  left: {
    type: String,
    default: "105",
  },
  imgUrl: {
    type: String,
    default:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/255761.jpg",
  },
  imgAlt: {
    type: String,
    default: "Keto Breakfast Sandwiches",
  },
  title: {
    type: String,
    default: "Keto Sandwiches",
  },
  rating: {
    type: String,
    default: "0.0",
  },
});
const router = useRouter();

const openDetails = () => {
  router.push("/details/" + props.id);
};
</script>

<style lang="scss" scoped></style>
