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
        <div class="flex w-[350px] gap-4 flex-wrap h-[550px]" v-for="recipe in recipes">
          <RecipeCard
            :img-url="recipe.thumbnail_url"
            :img-alt="recipe.name"
            :title="recipe.name"
            :desc="recipe.description"
            :id="recipe.canonical_id"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
definePageMeta({
  layout: "base",
});
const pending = ref(true);
const recipes = ref([]);
onMounted(async () => {
  await fetchRecipeList();
});

const fetchRecipeList = async () => {
  pending.value = true;
  const res = await $fetch(`/api/recipes`);
  if (res && res.results.length) {
    console.log("res", res);
    pending.value = false;
    recipes.value = res.results;
  } else {
    recipes.value = [];
  }
};
</script>

<style lang="scss" scoped></style>