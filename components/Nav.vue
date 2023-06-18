<template>
  <nav class="flex items-center justify-start">
    <ul class="flex w-full gap-8 menu">
      <li>
        <NuxtLink to="/" class="text-gray-800 hover:text-black">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/meal" class="text-gray-800 hover:text-black">Meals</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dishes" class="text-gray-800 hover:text-black"
          >Dish Types</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.menu {
  font-weight: 600;
  font-size: 0.95rem;
}
</style>
