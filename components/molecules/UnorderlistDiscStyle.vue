<template>
  <ul :class="gap" class="w-full flex flex-col list-disc pt-5 pl-5">
    <!-- call unorderlist_item atom here -->
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
