<template>
  <Section bg="white" flex-items="items-start" margin-y="0">
    <div class="w-1/2 flex justify-start items-center py-12 h-[600px] overflow-hidden">
      <div class="bg-image rounded-xl overflow-hidden"></div>
    </div>
    <div class="w-1/2 flex flex-col h-full justify-end gap-8 py-12 ml-8">
      <span class="text-sm text-green-800 bg-green-200 w-max px-4 py-2 rounded-full">
        <Icon
          name="streamline:food-kitchenware-bowl-chop-stick-cook-soup-bowl-chopsticks-cooking-nutrition-asian-food"
          class="mr-2"
        />
        Vegetarion Recipe</span
      >
      <h2 class="font-n text-5xl w-8/12 leading-15">Eggplant Parmesan Recipe</h2>
      <p class="text-base w-9/12">
        Bread the eggplant. Mix together the herb, Parmesan, and panko coating in one
        shallow bowl, and whisk 2 eggs with a dash of almond milk in another. Dip each
        eggplant slice into the egg mixture before tossing it in the panko. Make sure the
        eggplant is well-coated on all sides!
      </p>
      <div>
        <Button size="sm">View Menu</Button>
      </div>
    </div>
  </Section>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-image {
  background-image: url("https://unsplash.com/photos/iNwCO9ycBlc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGNoZWYlMjB3aXRoJTIwZm9vZHxlbnwwfHx8fDE2ODY3MjY1ODN8MA&force=true&w=640");
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}
</style>
