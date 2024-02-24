<!-- drawer init and toggle -->
<template>
  <button
    class="flex flex-row gap-4 items-center justify-start"
    type="button"
    :data-drawer-target="flyout_id"
    :data-drawer-show="flyout_id"
    data-drawer-backdrop="false"
    :aria-controls="flyout_id"
    data-drawer-body-scrolling="true"
  >
    <moleculesIconFrame>
      <img
        src="~/assets/images/icons/icon_data_source.svg"
        alt="Data source"
        title="Data source"
      />
    </moleculesIconFrame>
    <moleculesFooterTextstyle>
      &lt;
    </moleculesFooterTextstyle>
    <moleculesFooter02Textstyle>
      view data source
    </moleculesFooter02Textstyle>
  </button>

  <!-- placeholder -->
  <slot></slot>
</template>

<script>
export default {
  props: {
    flyout_id: {
      type: String,
      required: true,
      default: "drawer-disabled-backdrop",
    },
  },
};
</script>
