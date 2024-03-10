<template>
  <li
    class="flex flex-grow justify-center items-center group-hover:shadow-custom-border-xl w-full basis-1/3 navigation-list-nested-hover rounded-full opacity-100"
    :class="[
      $route.path === url
        ? 'navigation-list-nested-active bg-light-grey'
        : 'bg-light-grey',
    ]"
  >
    <nuxt-link
      :to="url"
      class="p-0 text-gray-900 w-full h-full flex justify-center items-center"
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
