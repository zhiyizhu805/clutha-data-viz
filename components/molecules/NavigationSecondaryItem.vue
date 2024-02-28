<!-- Navigation_secondary_item : The indicator link of the navigation_secondary list -->
<template>
<nuxt-link
  :to="url"
  class="group md:w-full md:flex-1 md:flex-grow md:rounded-t-none md:rounded-b-full md:items-center w-10 h-10 rounded-full flex md:flex-col justify-center z-20 items-center cursor-pointer md:gap-2 bg-light-grey hover:bg-light-grey hover:xl:shadow-custom-border-xl hover:md:shadow-custom-border-md hover:shadow-custom-border-sm hover:md:h-full hover:transition-all hover:duration-500 hover:ease-out hover:md:pt-[12%]"
  :class="{
    'md:h-full xl:shadow-custom-border-xl md:shadow-custom-border-md shadow-custom-border-sm md:pt-[12%]': active,
    'md:h-[82%] lg:rounded-b-full lg:items-center md:pt-[7%]': !active
  }"
>
  <!-- call IconFrame molecule -->
    <moleculesIconFrame>
      <slot></slot>
    </moleculesIconFrame>
    <svg
      v-if="!active"
      class="hidden md:block md:w-2.5 md:h-2.5 group-hover:hidden"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>