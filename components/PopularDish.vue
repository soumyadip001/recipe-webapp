<template>
  <Section bg="white" flex-items="items-start" margin-y="0">
    <div class="w-1/2 flex flex-col h-full justify-end gap-8 py-12 ml-8">
      <span class="text-sm text-red-800 bg-red-200 w-max px-4 py-2 rounded-full">
        <Icon
          name="streamline:food-kitchenware-spoon-plate-fork-plate-food-dine-cook-utensils-eat-restaurant-dining"
          class="mr-2"
        />
        Non Vegetarion Recipe</span
      >
      <h2 class="font-n text-5xl w-8/12 leading-15">Garlic Noodles with Shrimp</h2>
      <p class="text-base w-9/12">
        Garlic Noodles with Shrimp is not an authentic Asian recipe. It calls for Asian
        ingredients, along with western ingredients such as butter and spaghetti noodles.
        It calls for a lot of very classic Asian ingredients like fish sauce and oyster
        sauce, so it still reminds me of noodle I had growing up in Asia, but with a
        slight twist.
      </p>
      <div>
        <Button size="sm">View Menu</Button>
      </div>
    </div>
    <div class="w-1/2 flex justify-start items-center py-12 h-[600px] overflow-hidden">
      <div class="bg-image rounded-xl overflow-hidden"></div>
    </div>
  </Section>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-image {
  background-image: url("https://unsplash.com/photos/0XUR3PG-vo4/download?force=true&w=640");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 110%;
  background-position-y: bottom;
}
</style>
