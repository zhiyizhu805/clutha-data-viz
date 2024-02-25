<template>
  <div
    :class="position" class="w-full flex flex-col justify-start basis-3/5 xl:gap-10 lg:gap-8 gap-6"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "items-end",
    },
  },
};
</script>