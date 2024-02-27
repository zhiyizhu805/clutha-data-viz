<!-- BaseArticleContainerTertiary.vue is a reusable component designed with a two-column layout, 
    where the first column occupies 50% of the space and the second column takes up 50%. -->
<template>
  <section
    class="gap-11 flex md:flex-row xl:gap-22 lg:gap-18 md:gap-13 flex-col"
  >
    <div
      class="w-full flex flex-col justify-start items-start basis-1/2 xl:gap-10 lg:gap-8 gap-6"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="w-full flex flex-col justify-start items-start basis-1/2 xl:gap-10 lg:gap-8 gap-6"
    >
      <slot name="right"></slot>
    </div>
  </section>
</template>
