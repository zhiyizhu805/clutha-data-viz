<template>
  <div class="flex flex-col gap-0 w-full">
    <div class="w-full relative overflow-hidden">
      <!-- flyout body -->
      <slot name="flyout"></slot>
      <!-- Top bar: view datasource link -->
      <div class="w-full">
        <div class="bg-light-grey w-full px-12 py-6 rounded-t-3xl">
          <!-- flyout button -->
          <moleculesViewDatasource :flyout_id="flyout_id">
          </moleculesViewDatasource>
        </div>
      </div>

      <!-- Middle: graph -->
      <div :class="graph_container">
        <slot name="graph"></slot>
      </div>
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
    graph_container: {
      type: String,
      default: "", // "graph_container_extrasmall","graph_container_medium", "graph_container_small", "graph_container_large"
    },
  },
};
</script>

<style>
/****************
 Plot container 
 ****************/
/* extra small */
.graph_container_extrasmall {
  width: 100%;
  padding-top: 80%;
  position: relative;
}
.graph_container_extrasmall > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* small */
.graph_container_small {
  width: 100%;
  padding-top: 80%;
  position: relative;
}
.graph_container_small > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@media (max-width: 768px) {
  .graph_container_small {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }
}
/* medium */
.graph_container_medium {
  width: 100%;
  padding-top: 90%;
  position: relative;
}
.graph_container_medium > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@media (max-width: 768px) {
  .graph_container_medium {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }
}
/* large */
.graph_container_large {
  width: 100%;
  overscroll-behavior: none;
}

.graph_container_large > * {
  width: 100%;
}

@media (max-width: 768px) {
  .graph_container_large {
    overflow: auto;
  }
  .graph_container_large > * {
    width: 52rem;
  }
}
</style>
