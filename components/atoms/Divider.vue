<template>
  <div :class="classes" class="rounded-full"></div>
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
    border_color: {
      type: String,
      default: "border-black",
    },
  },
  computed: {
    classes() {
      return `${this.divider_width} ${this.border_style} ${this.border_color}`;
    },
  },
};
</script>
