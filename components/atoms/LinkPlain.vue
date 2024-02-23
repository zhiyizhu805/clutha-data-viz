<template>
  <a
    class="cursor-pointer inline-block font-inter text-dark-blue-900 font-semibold xl:text-lg xl:leading-7 lg:text-base lg:leading-snug md:text-xs md:leading-none text-sm leading-tight tracking-tight underline break-words"
    :href="url"
  >
    <slot/>
  </a>
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