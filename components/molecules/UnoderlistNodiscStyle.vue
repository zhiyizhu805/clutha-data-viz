<template>
  <ul :class="gap" class="w-full flex flex-col list-none">
    <slot/>
  </ul>
</template>

<script>
export default {
  props: {
    gap: {
      type: String,
      required: false,
      default: "gap-0",
    },
  },
};
</script>