<template>
  <div class="flex flex-col gap-0 w-full">
    <div class="w-full relative overflow-hidden">
      <!-- flyout body -->
      <slot name="flyout"></slot>
      <!-- Top bar: view datasource link -->
      <div class="w-full">
        <div class=" bg-light-grey w-full px-12 py-6 rounded-t-3xl">
          <!-- flyout button -->
          <moleculesViewDatasource :flyout_id="flyout_id" >
          </moleculesViewDatasource>
        </div>
      </div>

      <!-- Middle: graph -->
      <slot name="graph"></slot>
    </div>
    <!-- bottom bar -->
    <div
      class="w-full px-12 py-6 bg-white rounded-b-3xl flex justify-start items-center gap-2.5 border-x-4 border-b-4 border-light-grey"
    >
      <atomsCaptionTextstyle>
        {{ graph_title }}
      </atomsCaptionTextstyle>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    graph_title: {
      type: String,
      default: "Graph Title",
    },
    flyout_id: {
      type: String,
      default: "drawer-disabled-backdrop",
    },
  },
};

</script>