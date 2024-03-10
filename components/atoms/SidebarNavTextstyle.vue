<template>
  <p
    :class="text_style"
    class="text-xl leading-body tracking-default xl:text-3xl lg:text-3xl md:text-2xl"
  >
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    text_style: {
      type: String,
      default: "text-grey-900 font-medium font-overused-grotesk",
    },
  },
};
</script>
