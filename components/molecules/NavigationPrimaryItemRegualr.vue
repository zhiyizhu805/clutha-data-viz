<template>
  <li
    class="md:flex md:flex-grow md:rounded-full md:justify-center md:items-center group-hover:shadow-custom-border-xl md:w-full md:basis-1/3 navigation-list-nested-hover"
    :class="[
      $route.path === url
        ? 'navigation-list-nested-active md:bg-light-grey'
        : 'md:bg-light-grey',
    ]"
  >
    <a
      :href="url"
      class="block md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-none md:w-full md:h-full md:flex md:justify-center md:items-center"
    >
      <atomsNavTextstyle :url="url">
        <slot></slot>
      </atomsNavTextstyle>
    </a>
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
