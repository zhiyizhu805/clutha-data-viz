<template>
<!-- border_style is a fall through parameter -->
  <div
     :class="divider_width" class="rounded-full border-black"
  >
  </div>
</template>

<script>
export default {
  props: {
    divider_width: {
      type: String,
      default: "border-b-6",
    },
    border_style: {
      type: String,
      default: "",
    },
  },
};
</script>