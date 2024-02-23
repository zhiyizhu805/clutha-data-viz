<template>
  <p
    :class="text_color" class="font-inter font-semibold xl:text-sm xl:leading-relaxed text-xs lg:leading-tight md:leading-none leading-3 tracking-tight underline"
  >
    <slot/>
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