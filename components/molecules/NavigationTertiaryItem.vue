<template>
  <li class="flex flex-row items-center justify-start gap-2">
    <p>{{ navigation_title }}</p>
    <moleculesIconFrameWithCircleBadge :image_class1="navigation_class" image_class2="environment_icon">
      <slot></slot>
    </moleculesIconFrameWithCircleBadge>
  </li>
</template>

<script>
export default {
  props: {
    navigation_title: {
      type: String,
      required: true,
    },
    navigation_class: {
      type: String,
      required: true,
    },
  },
};
</script>
