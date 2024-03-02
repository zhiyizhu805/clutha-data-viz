<template>
  <!-- animation section -->
  <div class="relative">
    <div class='flex justify-center items-center'>
    <img
      class="w-full sm:w-[85%] md:w-[95%] xl:w-[85%] mb-12 environment-graph"
      src="/assets/images/graphs/our_enviro.jpg"
      alt="Environmental illustration"
      title="Environmental illustration"
    />
    </div>
    <moleculesNavigationTertiary>
      <slot></slot>
    </moleculesNavigationTertiary>
  </div>
</template>

<style scoped>
@media (max-width: 480px) {
  .environment-graph {
    max-width: 100%;
  }
}

</style>