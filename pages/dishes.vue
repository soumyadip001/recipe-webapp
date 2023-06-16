<template>
  <Section margin-y="4" :is-col="true" flex-items="items-start" gap="4">
    <div class="flex justify-between items-center w-full mt-4">
      <h2 class="text-3xl font-bold font-n">Dishes all over the world</h2>
      <NuxtLink class="btn-link" to="/">Back to home</NuxtLink>
    </div>
    <div class="flex flex-col w-full gap-8 mb-12 min-h-[700px]">
      <p class="w-10/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus
        similique adipisci odit assumenda? Tempora architecto reiciendis eligendi deserunt
        minus error est repellat, mollitia impedit maiores ipsam magni dolores? Natus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum exercitationem
        suscipit vero voluptas accusamus blanditiis cum consequatur sint, doloribus
        reprehenderit totam modi, quam ratione odit quisquam corporis, ad eos tempora.
      </p>

      <CuisinList />
    </div>
  </Section>
</template>

<script setup>
definePageMeta({
  layout: "base",
});
</script>

<style lang="scss" scoped></style>
