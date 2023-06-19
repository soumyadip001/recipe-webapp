<template>
  <div class="flex w-full bg-white flex-col min-w-screen color-bg-white">
    <header class="flex w-full h-24 justify-between px-12 lg:px-24 sm:px-16 py-8">
      <Logo />
      <Nav />
      <SearchBar />
    </header>
    <slot />
    <footer
      class="flex w-full h-auto px-24 py-6 justify-between items-center bg-green-600 mt-0"
    >
      <div class="flex items-center justify-start text-white">
        &copy; Copyright, SDH 2023, All Rights Reserved
      </div>
      <div class="flex items-center justify-between gap-6 text-white">
        <NuxtLink to="/">
          <Icon name="ph:instagram-logo-light" size="25" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="bxl:twitter" size="25" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="ic:baseline-facebook" size="25" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="uil:youtube" size="25" />
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
