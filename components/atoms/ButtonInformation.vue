<template>
  <button
    :data-collapse-toggle="flyout_id"
    type="button"
    class="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 focus:rounded-full dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    :data-drawer-target="flyout_id"
    :data-drawer-show="flyout_id"
    data-drawer-backdrop="false"
    data-drawer-placement="right"
    data-drawer-body-scrolling="true"
    :aria-controls="flyout_id"
    aria-expanded="false"
  >
    <span class="sr-only">Open information panel</span>
    <img
      src="/assets/images/icons/Information.svg"
      alt="Information"
      title="Information"
      class="w-full h-full"
    />
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
