<template>
  <p
    :class="text_style"
    class="text-lg leading-body tracking-default xl:text-xl lg:text-lg md:text-lg"
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
