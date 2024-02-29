<!-- BaseArticleContainerPrimary.vue is a reusable component designed with a two-column layout, 
    where the first column occupies 40% of the space and the second column takes up 60%. -->
<template>
  <section
    class="gap-11 flex md:flex-row xl:gap-22 lg:gap-18 md:gap-13 flex-col"
  >
    <div
      class="w-full flex flex-col justify-start items-start basis-2/5 xl:gap-10 lg:gap-8 gap-6"
    >
      <slot name="left"></slot>
    </div>
    <div class="w-full flex flex-col basis-3/5 gap-0">
      <slot name="right"></slot>
    </div>
  </section>
</template>
