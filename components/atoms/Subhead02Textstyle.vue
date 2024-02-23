<!--{%- macro render(text_color="text-black") -%}-->
<template>
  <p
    :class="text_color" class="font-bold font-overused-grotesk xl:text-xl xl:leading-9 lg:text-lg lg:leading-tight md:text-sm md:leading-3 text-base leading-none tracking-tight"
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