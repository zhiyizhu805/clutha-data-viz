<template>
  <p
    :class="text_color"
    class="font-inter font-medium xl:text-sm xl:leading-relaxed text-xs lg:leading-tight md:leading-none leading-3 tracking-tight"
  >
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    text_color: {
      type: String,
      default: "text-black",
    },
  },
};
</script>
