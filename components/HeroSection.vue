<template>
  <div
    class="flex flex-col-reverse justify-between xl:items-end bg-transparent w-full px-12 lg:px-24 sm:px-16 gap-8 my-8 sm:flex-col-reverse lg:flex-row"
  >
    <div class="grow flex flex-col h-full justify-end gap-8">
      <p class="font-n font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl hero-title">
        Let's start <br />cooking with popular recipes
      </p>
      <p class="font-n font-normal text-gray-700 text-lg">
        Want to learn to cook but confused how to start? <br />No need to worry again!
      </p>
      <div class="flex w-full gap-4">
        <Button>
          <NuxtLink to="/meal">Get Started</NuxtLink>
        </Button>
        <ButtonOutline>
          <NuxtLink to="/dishes">Explore Menu</NuxtLink>
        </ButtonOutline>
      </div>
    </div>
    <div class="w-full flex lg:justify-end 2xl:justify-start items-center relative">
      <img
        src="https://unsplash.com/photos/MSxw2vpQzx4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg2Njc0MDA4fA&force=true&w=640"
        class="w-[650px] h-auto rounded-xl"
        alt="Food closeup"
      />
      <RecipeSmallCard
        bottom="45"
        left="105"
        img-url="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/255761.jpg"
        img-alt="Keto Breakfast Sandwiches"
        title="Keto Sandwiches"
        rating="5.9"
        id="6027-keto-breakfast-sandwiches"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media only screen and (min-width: 1024px) and (max-width: 1300px) {
  .hero-title {
    @apply text-6xl;
  }
}
</style>
