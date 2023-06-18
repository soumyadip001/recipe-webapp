<template>
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4">
    <div class="flex justify-between items-center w-full mt-4">
      <h2 class="text-3xl font-bold font-n">Meals all over the world</h2>
      <NuxtLink class="btn-link" to="/">Back to home</NuxtLink>
    </div>
    <div class="flex w-full mb-12 min-h-[700px]">
      <template v-if="pending">
        <p>Please wait till we fetch all the recipe</p>
      </template>
      <div v-if="recipes.length" class="flex w-full items-center flex-wrap gap-8">
        <div class="flex w-[390px] gap-4 flex-wrap h-[550px]" v-for="recipe in recipes">
          <RecipeCard
            :img-url="recipe.thumbnail_url"
            :img-alt="recipe.name"
            :img-height="'400'"
            :title="recipe.name"
            :desc="recipe.description"
            :id="recipe.id"
            :details="recipe"
            :show-button="true"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-full my-4">
      <Button>Load More</Button>
    </div>
  </Section>
</template>

<script setup>
definePageMeta({
  layout: "base",
});
const pending = ref(true);
const pageStart = ref(0);
const pageLimit = ref(20);
const recipes = ref([]);
onMounted(async () => {
  await fetchRecipeList();
});

const fetchRecipeList = async () => {
  pending.value = true;
  const res = await $fetch(
    `/api/recipes-mock?start=${pageStart.value}&limit=${pageLimit.value}`
  );
  if (res && res?.results.length) {
    console.log("res", res);
    pending.value = false;
    recipes.value = res.results;
  } else {
    pending.value = false;
    recipes.value = [];
  }
};
</script>
