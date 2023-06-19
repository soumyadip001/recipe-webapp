<template>
  <Loader :pending="pending" />
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4" v-if="recipe">
    <h2 class="font-n text-4xl">{{ recipe.name }}</h2>
    <div
      class="flex flex-col md:flex-row w-full items-start justify-between gap-8 md:gap-0"
    >
      <div
        class="w-full md:w-1/2 flex justify-center items-center h-[500px] pr-8 min-w-[400px]"
      >
        <img
          :src="recipe.thumbnail_url"
          class="w-full h-full max-h-[500px] rounded-xl"
          :alt="recipe.name"
        />
      </div>
      <div class="flex items-start justify-start flex-col grow h-full">
        <h4 class="text-2xl mb-4 font-n">{{ recipe.name }}</h4>
        <span class="text-sm text-red-800 bg-red-200 w-max px-4 py-2 rounded-full">
          <Icon
            name="streamline:food-kitchenware-spoon-plate-fork-plate-food-dine-cook-utensils-eat-restaurant-dining"
            class="mr-2"
          />
          {{ recipe.slug }}</span
        >
        <div
          class="recipe--keywords flex gap-2 justify-center items-start w-full mt-4 flex-col"
        >
          <p class="font-bold">Keywords:</p>
          <div class="flex gap-2 justify-start items-center flex-wrap w-full">
            <span
              v-for="keyword in keywords"
              :key="keyword"
              class="text-sm text-amber-800 bg-amber-200 w-max px-4 py-2 rounded-full"
              >{{ keyword.trim() || "No keywords found" }}</span
            >
          </div>
        </div>
        <RecipeRating :rating="recipe.user_ratings" />
        <div
          class="recipe--other-details flex gap-8 justify-start items-center w-full mt-4"
        >
          <div class="flex gap-2 items-center">
            <strong class="">Servings:</strong>
            <span
              class="text-sm text-yellow-800 bg-yellow-200 w-max px-4 py-2 rounded-full flex items-center gap-2"
              ><Icon
                name="streamline:food-kitchenware-spoon-plate-fork-plate-food-dine-cook-utensils-eat-restaurant-dining"
              />
              {{ recipe.num_servings }}</span
            >
          </div>
          <div class="flex gap-2 items-center justify-center">
            <strong class="">Country:</strong>
            <span
              class="text-sm text-yellow-800 bg-yellow-200 w-max px-4 py-2 rounded-full flex items-center gap-2"
              ><Icon name="ic:baseline-place" /> {{ recipe.country }}</span
            >
          </div>
        </div>
        <RecipeNutrition :nutrition="recipe.nutrition" />
      </div>
    </div>
  </Section>
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4" v-if="recipe">
    <h2 class="font-n text-3xl">Description</h2>
    <div class="flex w-full items-center justify-start">{{ recipe.description }}</div>
    <div
      v-if="recipe.tags"
      class="flex gap-2 justify-start items-center w-full flex-wrap"
    >
      <span
        class="text-sm text-sky-900 bg-sky-300 w-max px-4 py-2 rounded-full underline"
        v-for="tag in recipe.tags"
      >
        <NuxtLink :to="`/tag/${tag.id}`">{{ tag.display_name }}</NuxtLink></span
      >
    </div>
  </Section>
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4" v-if="recipe">
    <h2 class="font-n text-3xl">
      Ingredients
      <span class="text-xl text-green-800">({{ ingredientCount }})</span>
    </h2>
    <div class="flex flex-col gap-2 w-full items-center justify-start">
      <ul
        v-for="section in recipe.sections"
        class="flex flex-wrap w-full justify-start items-center gap-2"
      >
        <li
          v-for="component of section.components"
          :key="component.id"
          class="flex justify-start items-center"
        >
          <IngredientCard
            :label="component.raw_text"
            :measurement="component.measurements"
          />
        </li>
      </ul>
    </div>
  </Section>
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4" v-if="recipe">
    <h2 class="font-n text-3xl">Instructions</h2>
    <div class="flex w-full items-center justify-start">
      <ol
        v-if="recipe.instructions"
        class="flex w-full justify-center items-start gap-2 flex-col"
      >
        <li v-for="instruction in recipe.instructions" :key="instruction.id">
          <Icon name="ic:baseline-keyboard-double-arrow-right" />
          {{ instruction.display_text }}
        </li>
      </ol>
    </div>
    <RecipeVideo :renditions="recipe.renditions" />
  </Section>
</template>

<script setup>
definePageMeta({
  layout: "base",
});
const route = useRoute();
const id = ref(0);
const pending = ref(true);
const recipe = ref(null);
const keywords = ref([]);
const ingredientCount = ref(0);

onMounted(async () => {
  const id = extractRecipeId();
  try {
    await fetchRecipeDetails(id);
  } catch (error) {
    console.error(error);
  }
});

const extractRecipeId = () => {
  if (route) {
    id.value = route.params.id.split("-")[0];
    return id.value;
  }
};

const fetchRecipeDetails = async (recipeId) => {
  pending.value = true;
  const res = await $fetch(`/api/details/?id=${recipeId}`);
  let count = 0;
  if (res) {
    console.log("res", res);
    pending.value = false;
    recipe.value = res;
    keywords.value = res.keywords.split(",");

    recipe.value.sections.forEach((sec) => {
      if (sec.components.length) {
        sec.components.forEach((_comp) => {
          count += 1;
        });
      }
    });
    ingredientCount.value = count;
  } else {
    pending.value = false;
  }
};
</script>
