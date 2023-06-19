<template>
  <div
    class="flex flex-col md:flex-row w-full px-12 lg:px-24 sm:px-16 gap-12 flex-wrap my-8 items-center justify-center"
  >
    <div
      class="w-[250px] md:w-[200px] md:h-[200px] h-[250px] items-center flex"
      v-for="(cuisin, index) of props.cuisinList"
    >
      <CuisineCard
        :size="index % 2 === 0 ? 'sm' : ''"
        :img-alt="cuisin.alt"
        :key="cuisin.id"
        :img-url="cuisin.img"
        :country="cuisin.country || ''"
      />
    </div>
  </div>
</template>

<script>
export const defaultList = [
  { alt: "Veggies", id: 1 },
  {
    img:
      "https://unsplash.com/photos/yDKHJxfiWDk/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg2NzIzNjE2fA&force=true&w=640",
    alt: "Pizza",
    id: 2,
  },
  {
    img:
      "https://unsplash.com/photos/17ZU9BPy_Q4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg2NzIzNzk3fA&force=true&w=640",
    alt: "Pasta",
    id: 3,
  },
  {
    img: "https://unsplash.com/photos/6bF6kS4WJk0/download?force=true&w=640",
    alt: "Momo",
    id: 10,
  },
  {
    img:
      "https://unsplash.com/photos/lK3vb6ep9qE/download?ixid=M3wxMjA3fDB8MXxjb2xsZWN0aW9ufDE1fDkyOTc2Nnx8fHx8Mnx8MTY4NjcyNDA1OHw&force=true&w=640",
    alt: "Desert",
    id: 9,
  },
  {
    img:
      "https://unsplash.com/photos/BX3mRtuUoAg/download?ixid=M3wxMjA3fDB8MXxjb2xsZWN0aW9ufDEyfDkyOTc2Nnx8fHx8Mnx8MTY4NjcyNDA1OHw&force=true&w=640",
    alt: "Pudding",
    id: 8,
  },
  {
    img:
      "https://unsplash.com/photos/iy_MT2ifklc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHNodXNoaSUyMGZvb2R8ZW58MHx8fHwxNjg2NzI0Mjg0fDA&force=true&w=640",
    alt: "Shushi",
    id: 7,
  },
  {
    img:
      "https://unsplash.com/photos/501wbSfBgLk/download?ixid=M3wxMjA3fDB8MXxjb2xsZWN0aW9ufDE0fDkyOTc2Nnx8fHx8Mnx8MTY4NjcyNDA1OHw&force=true&w=640",
    alt: "Bread",
    id: 6,
  },
  {
    img: "https://unsplash.com/photos/SxTlB4fde9Q/download?force=true&w=640",
    alt: "Pancakes",
    id: 5,
  },
  {
    img: "https://unsplash.com/photos/EdzsUFqHbaY/download?force=true&w=640",
    alt: "Indian",
    id: 4,
  },
];
</script>
<script setup>
const props = defineProps({
  cuisinList: {
    type: Array,
    default: defaultList,
  },
});
</script>

<style lang="scss" scoped></style>
