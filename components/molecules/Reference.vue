<template>
  <moleculesUnoderlistNodiscStyle>
    <slot></slot>
  </moleculesUnoderlistNodiscStyle>
</template>

<script>
export default {
  props: {
    gap: {
      type: String,
      required: false,
      default: "gap-3",
    },
  },
};
</script>