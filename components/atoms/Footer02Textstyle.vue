<template>
  <p v-if="!isLink" :class="textClasses">
    <slot />
  </p>
  <nuxt-link v-else :to="linkHref" :class="textClasses">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text_color: {
      type: String,
      default: "text-black",
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkHref: {
      type: String,
      default: "#",
    },
  },
  computed: {
    textClasses() {
      return `${this.text_color} font-inter font-semibold xl:text-sm xl:leading-relaxed text-xs lg:leading-tight md:leading-none leading-3 tracking-tight underline`;
    },
  },
};
</script>
