<template>
  <Section bg="white" flex-items="items-start" margin-y="0">
    <div
      class="flex justify-center items-center px-4 md:px-8 flex-col mb-12 newsletter-bg h-[400px] w-full rounded-xl overflow-hidden text-white gap-8"
    >
      <h4 class="font-n text-4xl lg:text-5xl w-full md:w-8/12 lg:w-6/12 text-center">
        Subscribe to get weekly recipe updates
      </h4>
      <form
        class="flex w-full md:10/12 lg:w-8/12 rounded-xl bg-white justify-center items-center px-4 py-2 gap-4"
      >
        <Icon name="ic:round-mail" size="20" class="text-gray-600" />
        <input
          type="email"
          class="grow bg-transparent outline-none border-none text-gray-900"
          placeholder="Enter your email here"
        />
        <Button size="sm" type="button">Subscribe</Button>
      </form>
    </div>
  </Section>
</template>

<script setup></script>

<style lang="scss" scoped>
.newsletter-bg {
  background-image: url("https://unsplash.com/photos/hV5ww4cAkjY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGZydWl0cyUyMHBsYXR0ZXJ8ZW58MHx8fHwxNjg2NzI0NjA0fDA&force=true&w=640");
  background-size: cover;
  background-position: center;
}
</style>
