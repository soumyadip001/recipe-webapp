<template>
  <div class="w-[280px]">
    <div class="flex justify-start items-center h-12 bg-white rounded px-4">
      <Icon name="iconamoon:search-thin" size="20" />
      <input
        type="text"
        class="bg-transparent outline-0 border-0 grow-1 pl-4 md:pl-2"
        placeholder="Search"
        v-model="searchText"
        @keyup.enter="onPressEnter"
      />
      <div class="flex justify-start items-center md:hidden lg:flex">
        <Icon
          name="solar:close-circle-bold"
          size="20"
          v-if="searchText"
          @click="clearInput"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const searchText = ref("");
const router = useRouter();
const onPressEnter = (e) => {
  e.preventDefault();
  if (searchText.value.trim()) {
    const q = searchText.value;
    searchText.value = "";
    router.push("/meal?q=" + q);
  }
};

const clearInput = () => {
  searchText.value = "";
  router.push("/meal");
};
</script>
