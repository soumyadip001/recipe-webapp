<template>
  <div
    class="w-full flex items-center justify-start h-[450px] gap-4 lg:gap-8"
    v-if="props.renditions.length"
  >
    <div class="grow flex justify-center items-center h-full">
      <video
        id="video"
        class="w-full h-full"
        controls
        preload="metadata"
        :poster="selectedVidPoster"
        :aria-label="`Playing video in ${selectedVidLabel}`"
      >
        <source :src="selectedVidURL" :type="selectedVidType" />
        <track label="English" kind="captions" srclang="en" src="" />
      </video>
    </div>
    <div
      class="hidden md:flex w-[500px] h-full overflow-scroll flex-col items-start justify-center gap-4 bg-gray-900 px-4 py-2 pt-280px text-white lg:pt-10"
    >
      <div
        v-for="vid in props.renditions"
        class="w-full flex gap-4 h-32 cursor-pointer hover:bg-gray-800 rounded-xl"
        @click="updateCurrentVideo(vid)"
      >
        <div class="w-3/12">
          <img :src="vid.poster_url" :alt="vid.url" class="h-auto w-full rounded-xl" />
        </div>
        <div class="flex flex-col grow">
          <h4 class="text-xl">{{ vid.name }}</h4>
          <span>Bit Rate: {{ vid.bit_rate || 0 }}</span>
          <span
            >Duration: {{ vid.duration ? secondsToHms(vid.duration / 1000) : 0 }}</span
          >
          <span>Size: {{ (vid.file_size / (1024 * 1024)).toFixed(2) || 0 }} MB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  renditions: {
    type: Object,
    required: true,
  },
});

const selectedVidPoster = ref(null);
const selectedVidType = ref("video/mp4");
const selectedVidURL = ref(null);
const selectedVidLabel = ref("");
onMounted(() => {
  if (props.renditions) {
    selectedVidPoster.value = props.renditions[0].poster_url;
    selectedVidType.value = props.renditions[0].content_type;
    selectedVidURL.value = props.renditions[0].url;
    selectedVidLabel.value = `Playing video in ${props.renditions[0].name}`;
  }
});
const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
};
const updateCurrentVideo = (vid) => {
  selectedVidPoster.value = vid.poster_url;
  selectedVidType.value = vid.content_type;
  selectedVidURL.value = vid.url;
  selectedVidLabel.value = `Playing video in ${vid.name}`;
};
</script>

<style lang="scss" scoped>
.pt-280px {
  padding-top: 200px;
}
@media only screen and (min-width: 0px) and (max-width: 1024px) {
  .pt-280px {
    padding-top: 100px;
  }
}
</style>
