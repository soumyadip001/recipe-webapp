<template>
  <nav class="flex items-center justify-start">
    <ul class="hidden md:flex w-full gap-8 menu sm:hidden">
      <li>
        <NuxtLink to="/" class="text-gray-800 hover:text-black">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/meal" class="text-gray-800 hover:text-black">Meals</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dishes" class="text-gray-800 hover:text-black"
          >World Dishes</NuxtLink
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
@media only screen and (min-width: 768px) and (max-width: 870px) {
  .menu {
    @apply gap-4;
  }
}
</style>
