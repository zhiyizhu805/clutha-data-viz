<!-- call DatasourceItem inside flyout -->
<template>
  <li>
    <div class="flex flex-row justify-start items-center gap-4">
      <FooterTextstyle text_color="text-white">
        <slot></slot>
      </FooterTextstyle>
      <p class="self-center">&#8594;</p>
      <a :href="link"
        ><Footer02Textstyle text_color="text-white">
          {{ link_title }}
        </Footer02Textstyle></a
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