<!-- a fixed width and height container used for the icon of navigation_tertiary_item -->
<template>
  <div
    :class="(image_class1, image_class2)"
    class="lg:p-2 p-1 xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-9 md:h-9 w-7 h-7 bg-light-grey rounded-full flex justify-center items-center hover:shadow-custom-border-sm hover:border-black hover:transition-all hover:duration-500 hover:ease-out"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image_class1: {
      type: String,
      default: "",
    },
    image_class2: {
      type: String,
      default: "",
    },
  },
};
</script>
