<template>
  <li>
    <div class="flex flex-row justify-start items-center gap-4">
      <atomsFooterTextstyle text_color="text-white">
        <slot></slot>
      </atomsFooterTextstyle>
      <atomsFooterTextstyle text_color="text-white" class="self-center">&#8594;</atomsFooterTextstyle>
      <a :href="link"
        ><atomsFooter02Textstyle text_color="text-white">
          {{ link_title }}
        </atomsFooter02Textstyle></a
      >
    </div>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    link_title: {
      type: String,
      required: true,
    },
  },
};
</script>