<template>
  <!-- drawer component -->
  <div
    :id="flyout_id"
    class="flyout absolute top-0 left-0 z-40 w-full md:w-[79%] h-full p-8 overflow-y-auto transition-transform -translate-x-full bg-grey-900/95 rounded-tl-3xl"
    tabindex="-1"
    :aria-labelledby="ariaLabelledby"
  >
    <div class="flex flex-row justify-start items-center gap-3 mb-5">
      <div class="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4">
        <img
          src="/assets/images/icons/icon_data_source_plain.svg"
          alt="Data source"
          title="Data source"
        />
      </div>
      <atomsSubhead02Textstyle text_color="text-white">
        Data Source
      </atomsSubhead02Textstyle>
    </div>

    <hr class="mb-7" />
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
    <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium text-white">
        <slot></slot>
      </ul>
    </div>
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
