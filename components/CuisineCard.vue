<template>
  <div
    :class="`flex rounded-full overflow-hidden items-center justify-center transition-all relative ${
      props.size === 'sm' ? 'w-80p h-80p' : 'w-full h-full'
    } cursor-pointer`"
  >
    <img :src="props.imgUrl" :alt="props.imgAlt" class="h-full w-full" />

    <div
      class="absolute text-2xl h-full w-full flex justify-center items-center text-white bg-gray-900 opacity-0 hover:opacity-80 transition-all font-n"
    >
      {{ props.imgAlt }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "bg",
  },
  imgUrl: {
    type: String,
    default:
      "https://unsplash.com/photos/yu8eJpRvlS8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGFzaWFuJTIwZm9vZHxlbnwwfHx8fDE2ODY2NzkxMTR8MA&force=true&w=640",
  },
  imgAlt: {
    type: String,
    default: "Cuisine Card",
  },
});
</script>

<style lang="scss" scoped></style>
