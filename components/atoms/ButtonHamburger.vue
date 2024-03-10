<template>
  <button
    class="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 focus:rounded-full dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    type="button"
    :data-drawer-target="flyout_id"
    :data-drawer-show="flyout_id"
    data-drawer-backdrop="false"
    data-drawer-placement="right"
    :aria-controls="flyout_id"
    data-drawer-body-scrolling="true"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>

  <!-- placeholder -->
  <slot />
</template>

<script>
export default {
  props: {
    flyout_id: {
      type: String,
      default: "navbar-cta",
    },
  },
};
</script>
