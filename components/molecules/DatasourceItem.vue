<template>
  <li>
    <div class="flex flex-row justify-start items-center gap-4">
      <atomsFooterTextstyle text_color="text-white">
        <slot></slot>
      </atomsFooterTextstyle>
      <atomsFooterTextstyle text_color="text-white" class="self-center">&#8594;</atomsFooterTextstyle>
      <atomsFooter02Textstyle is-link :link-href="link" text_color="text-white">
        {{ link_title }}
      </atomsFooter02Textstyle>
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