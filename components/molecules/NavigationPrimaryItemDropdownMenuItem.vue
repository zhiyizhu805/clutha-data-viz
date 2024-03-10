<template>
  <li
    class="md:flex md:flex-grow rounded-lg md:justify-center md:items-center group-hover:shadow-custom-border-xl md:w-full md:basis-1/3 navigation-list-nested-hover md:bg-light-grey"
    :class="{ 'navigation-list-nested-active': $route.path === url }"
  >
    <nuxt-link
      :to="url"
      class="block md:p-1 text-gray-900 hover:bg-gray-100 md:hover:bg-none md:w-full md:h-full md:flex md:justify-center md:items-center"
    >
      <atomsNavTextstyle>
        <slot></slot>
      </atomsNavTextstyle>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
