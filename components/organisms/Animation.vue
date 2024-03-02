<template>
  <!-- animation section -->
  <div class="relative">
    <div class='flex justify-center items-center'>
    <img
      class="w-full xs:w-[89%] sm:w-[80%] md:w-[90%] xl:w-[85%] mb-8 md:mb-12 environment-graph"
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