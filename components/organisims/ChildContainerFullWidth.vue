<template>
  <div :class="gap" class="flex flex-col"><slot></slot></div>
</template>

<script>
export default {
  props: {
    gap: {
      type: String,
      default: "gap-0",
    },
  },
};
</script>
