<template>
  <li class="flex flex-row items-center justify-start gap-2">
    <p>{{ navigation_title }}</p>
    <nuxt-link :to="url">
      <moleculesIconFrameWithCircleBadge
        :image_class1="navigation_class"
        image_class2="environment_icon"
      >
        <slot></slot>
      </moleculesIconFrameWithCircleBadge>
    </nuxt-link>
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
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
