<template>
  <span
    class="flex items-center justify-center gap-2 text-sm text-cyan-800 bg-cyan-200 w-max px-4 py-2 rounded-xl"
  >
    <Icon :name="icon" />
    {{ props.label }}
    <span v-if="quantity">({{ quantity }})</span>
  </span>
</template>

<script setup>
const icon = ref("mdi:bowl-mix");
const measurementUnitName = ref("");
const quantity = ref(null);
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  measurement: {
    type: Object,
    required: false,
    default: null,
  },
});

onMounted(() => {
  if (props.measurement) {
    props.measurement.forEach((element, index) => {
      if (index === 0) {
        measurementUnitName.value = element.unit.name;
      } else {
        quantity.value = element.quantity + " " + element.unit.name;
      }
    });
    if (props.label.toLowerCase().includes("milk")) {
      icon.value = "lucide:milk";
    } else if (props.label.toLowerCase().includes("butter")) {
      icon.value = "fluent-emoji-high-contrast:butter";
    } else if (props.label.toLowerCase().includes("cheese")) {
      icon.value =
        "streamline:food-cheese-1-cook-cheese-animal-products-cooking-nutrition-dairy-food";
    } else if (props.label.toLowerCase().includes("noodles")) {
      icon.value = "icon-park-solid:noodles";
    } else if (props.label.toLowerCase().includes("pasta")) {
      icon.value = "mdi:pasta";
    } else if (props.label.toLowerCase().includes("spray")) {
      icon.value = "mdi:spray";
    } else if (props.label.toLowerCase().includes("chicken")) {
      icon.value = "icon-park-solid:chicken-leg";
    } else if (props.label.toLowerCase().includes("beef")) {
      icon.value = "lucide:beef";
    } else if (props.label.toLowerCase().includes("egg")) {
      icon.value = "mdi:egg";
    } else if (props.label.toLowerCase().includes("shrimp")) {
      icon.value = "fa6-solid:shrimp";
    } else if (props.label.toLowerCase().includes("octopus")) {
      icon.value = "simple-icons:octopusdeploy";
    } else if (props.label.toLowerCase().includes("bread")) {
      icon.value = "iconoir:bread-slice";
    } else if (props.label.toLowerCase().includes("avocado")) {
      icon.value = "icon-park-solid:avocado-one";
    } else if (props.label.toLowerCase().includes("onion")) {
      icon.value = "twemoji:onion";
    } else if (props.label.toLowerCase().includes("mushroom")) {
      icon.value = "mdi:mushroom";
    } else if (props.label.toLowerCase().includes("salt")) {
      icon.value = "tabler:salt";
    } else if (props.label.toLowerCase().includes("wine")) {
      icon.value = "mdi:bottle-wine";
    } else if (props.label.toLowerCase().includes("cup")) {
      icon.value = "mdi:bowl-mix";
    } else if (props.label.toLowerCase().includes("spoon")) {
      icon.value = "mdi:spoon-sugar";
    } else {
      icon.value =
        "streamline:food-wheat-cook-plant-bread-gluten-grain-cooking-nutrition-food-wheat";
    }
  }
});
</script>
