<template>
  <div class="w-[280px]">
    <div class="flex justify-start items-center h-12 bg-white rounded px-4">
      <Icon name="iconamoon:search-thin" size="20" />
      <input
        type="text"
        class="bg-transparent outline-0 border-0 grow-1 pl-4"
        placeholder="Search"
        v-model="searchText"
        @keyup.enter="onPressEnter"
      />
      <Icon
        name="solar:close-circle-bold"
        size="25"
        v-if="searchText"
        @click="clearInput"
      />
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
