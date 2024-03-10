<template>
  <!-- drawer component -->
  <div
    :id="flyout_id"
    class="flyout fixed top-0 right-0 z-40 w-[80%] md:w-[50%] transition-transform translate-x-full h-full py-12 px-8 overflow-y-auto bg-grey-900/95 rounded-l-3xl"
    tabindex="-1"
    :aria-labelledby="ariaLabelledby"
    aria-hidden="true"
  >
    <button
      type="button"
      :data-drawer-hide="flyout_id"
      :aria-controls="flyout_id"
      class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="pt-4">
      <atomsDivider divider_width="border-b-2" border_color="border-gray-500" />
    </div>
    <div class="py-4 overflow-y-auto">
      <slot></slot>
    </div>
    <section class="absolute bottom-0 left-0 w-full p-8 mb-4 md:mb-8">
      <div class="w-full mb-10 xl:mb-14 lg:mb-12">
        <atomsDivider
          divider_width="border-b-2"
          border_color="border-gray-500"
        />
      </div>
      <!-- footer organism -->
      <organismsFooterWhite></organismsFooterWhite>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    flyout_id: {
      type: String,
      default: "drawer-disabled-backdrop",
    },
  },
  computed: {
    ariaLabelledby: function () {
      return `${this.flyout_id}-label`;
    },
  },
};
</script>
