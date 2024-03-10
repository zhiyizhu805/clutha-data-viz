<template>
  <p
    :class="text_style"
    class="tracking-default xl:text-lg xl:leading-7 lg:text-base lg:leading-snug text-sm leading-tight"
  >
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    text_style: {
      type: String,
      default: "text-black text-body font-light font-inter",
    },
  },
};
</script>
