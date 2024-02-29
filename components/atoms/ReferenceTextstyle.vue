<template>
  <nuxt-link
    class="cursor-pointer font-inter text-dark-blue-900 font-semibold xl:text-lg xl:leading-7 lg:text-base lg:leading-snug md:text-xs md:leading-none text-sm leading-tight tracking-tight underline break-words"
    :to="url"
  >
    <slot/>
  </nuxt-link>
</template>


<script>
export default {
  props: {
    url: {
      type: String,
      default: "#",
    },
  },
};
</script>