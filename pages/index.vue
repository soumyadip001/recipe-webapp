<template>
  <Section margin-y="8">
    <div class="grow flex flex-col h-full justify-end gap-8">
      <p class="font-n font-bold text-7xl">
        Let's start <br />cooking with popular recipes
      </p>
      <p class="font-n font-normal text-gray-700 text-lg">
        Want to learn to cook but confused how to start? <br />No need to worry again!
      </p>
      <div class="flex w-full gap-4">
        <Button>
          <NuxtLink to="/meal">Get Started</NuxtLink>
        </Button>
        <ButtonOutline><NuxtLink to="/dishes">Explore Menu</NuxtLink></ButtonOutline>
      </div>
    </div>
    <div class="w-full flex justify-end items-center">
      <img
        src="https://unsplash.com/photos/MSxw2vpQzx4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg2Njc0MDA4fA&force=true&w=640"
        class="w-[650px] h-auto rounded-xl"
        alt="Food closeup"
      />
    </div>
  </Section>
  <Section :is-col="true" flex-items="items-start" bg="white">
    <div class="flex justify-between items-center w-full mt-12">
      <h2 class="text-3xl font-bold font-n">
        Trendy <span class="text-green-600">Recipes</span>
      </h2>
      <NuxtLink class="btn-link" to="/">View more</NuxtLink>
    </div>
    <div class="flex w-full gap-8">
      <div class="w-1/3">
        <RecipeCard
          :id="1007"
          img-url="https://unsplash.com/photos/yhc4pSbl01A/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg2NzIwNjU1fA&force=true&w=640"
          img-alt="Avocado Salad"
          title="Avocado Salad"
        />
      </div>
      <div class="w-1/3">
        <RecipeCard
          :id="5462"
          img-url="https://unsplash.com/photos/IA1J0X-KX3Q/download?force=true&w=640"
          img-alt="Philipino Noodles"
          title="Philipino Noodles"
        />
      </div>
      <div class="w-1/3">
        <RecipeCard
          :id="7516"
          img-url="https://unsplash.com/photos/xX9SmqQCbFY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fGZvb2QlMjBkaXNofGVufDB8fHx8MTY4NjY2Njc2MXww&force=true&w=640"
          img-alt="Strawberry Salad with Balsamic"
          title="Strawberry Salad with Balsamic"
          desc="Avocado and fresh mozzarella. Toasted pecans, for a nutty crunch and an easy balsamic reduction"
        />
      </div>
    </div>
  </Section>
  <Section :is-col="true" flex-items="items-start">
    <div class="flex flex-col text-center justify-center items-center w-full mt-12">
      <h2 class="text-3xl font-bold font-n">
        Popular <span class="text-green-600">Recipes</span>
      </h2>
      <p class="font-n font-normal text-gray-700 text-lg w-1/2 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae esse
        aspernatur aliquid quam aut delectus deleniti minus labore, quia ad harum quas
        beatae quod sequi iusto doloribus? Dolore, in.
      </p>
    </div>
    <CuisinList />
  </Section>
  <DishOfTheDay />
  <PopularDish />
  <NewsLetter />
</template>

<script setup>
definePageMeta({
  layout: "base",
});
</script>
