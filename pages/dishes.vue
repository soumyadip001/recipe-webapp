<template>
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4">
    <div class="flex justify-between items-center w-full mt-4">
      <h2 class="text-3xl font-bold font-n">Dishes all over the world</h2>
      <NuxtLink class="btn-link" to="/">Back to home</NuxtLink>
    </div>
    <div class="flex flex-col w-full gap-8 mb-12 min-h-[700px]">
      <p class="w-10/12">
        A vital part of tourism is also looking out for memorable and unique eating and
        drinking experiences anywhere in the world. Often termed as food tourism, this
        pursuit is categorized under experiential travel. In present times, food stands
        equal to accommodation and sceneries when it comes to deciding a place to travel.
        Just like there are lists of best hotels to stay in and best places to visit,
        there should also be a food dishes list to narrow down the best items around the
        world. When it comes to ranking, food and drinks can be very subjective as tastes
        differ from person to person.
      </p>

      <CuisinList :cuisinList="cuisinList" />
    </div>
  </Section>
</template>

<script setup>
const cuisinList = ref([
  {
    img: "/images/shushi.jpg",
    alt: "Shushi",
    id: 1,
    country: "Japan",
  },
  {
    img: "/images/Rendang.jpg",
    alt: "Rendang",
    id: 22,
    country: "Indonesia",
  },
  {
    img: "/images/Ramen.webp",
    alt: "Ramen",
    id: 2,
    country: "Japan",
  },
  {
    img: "/images/TomYam.webp",
    alt: "Tom Yam",
    id: 3,
    country: "Thailand",
  },
  {
    img: "/images/Kebab.jpg",
    alt: "Kebab",
    id: 4,
    country: "Turkey",
  },
  {
    img: "/images/Pho.jpeg",
    alt: "Pho",
    id: 5,
    country: "Vietnam",
  },
  {
    img: "/images/Pekingduck.jpg",
    alt: "Peking duck",
    id: 6,
    country: "China",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/mixed-seafood-paella_20181227133958.jpeg",
    alt: "Paella",
    id: 7,
    country: "Spain",
  },
  {
    img: "/images/Steak.jpg",
    alt: "Steak",
    id: 8,
    country: "England",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/48824979_20181227134147.jpg",
    alt: "Apfelstrudel",
    id: 9,
    country: "Austria",
  },
  {
    img:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/148610.jpg?resize=600:*&output-format=auto&output-quality=auto",
    alt: "Pad Thai",
    id: 10,
    country: "Thailand",
  },
  {
    img:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/114453.jpg?resize=600:*&output-format=auto&output-quality=auto",
    alt: "Goulash",
    id: 11,
    country: "Hungary",
  },
  {
    img:
      "https://img.buzzfeed.com/video-api-prod/assets/01cfdd3c80844c63baae4784b53df3f4/FB_2.jpg?resize=600:*&output-format=auto&output-quality=auto",
    alt: "Lasagna",
    id: 12,
    country: "Italy",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/Kimchi-5_20181227134514.jpg",
    alt: "Kimchi",
    id: 13,
    country: "Korea",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/Fried-Chicken-Pieces_20181227134605.jpg",
    alt: "Fried chicken",
    id: 14,
    country: "United States",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/Featured-image-masala-dosa-recipe_20181227134705.jpg",
    alt: "Dosa",
    id: 15,
    country: "India",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/24297458269_202f6c2d5d_c(1)_20200402104453.jpg",
    alt: "Massaman Curry",
    id: 16,
    country: "Thailand",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/pizza-711662_1920_20200402122333.jpg",
    alt: "Pizza",
    id: 17,
    country: "Italy",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/shallow-focus-photography-of-hamburger-918581_20200402124002.jpg",
    alt: "Hamburger",
    id: 18,
    country: "Germany",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/donuts-1491076124j7c_20200402124732.jpg",
    alt: "Donuts",
    id: 19,
    country: "USA",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/HyderabadiChickenBiryaniYT161123910435_20200402122139.jpg",
    alt: "Biryani",
    id: 20,
    country: "India",
  },
  {
    img:
      "https://www.holidify.com/images/cmsuploads/compressed/1200px-Food_at_WIkimanian_2017_02_20200402121459.jpg",
    alt: "Poutine",
    id: 21,
    country: "Canada",
  },
]);
definePageMeta({
  layout: "base",
});
</script>

<style lang="scss" scoped></style>
