<!-- BaseArticleContainerPrimarySecondary.vue is a reusable component featuring a stacked layout. 
     The first layer consists of content aligned to the right with a width of 60%, while the second layer encompasses a full-width graph.  -->
<template>
  <div
    class="w-full flex flex-col items-end justify-start basis-3/5 xl:gap-10 lg:gap-8 gap-6"
  >
    <organismsBaseContainerSixtyPercentWidth>
      <slot name="content-section"></slot>
    </organismsBaseContainerSixtyPercentWidth>
    <slot></slot>
  </div>
</template>
