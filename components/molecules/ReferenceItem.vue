<template>
  <li>
    <atomsBodyTextstyle>
      <slot></slot>
      <atomsReferenceTextstyle :url="url">
        {{ name }}
      </atomsReferenceTextstyle>
      {{ additional_info }}
    </atomsBodyTextstyle>
  </li>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    additional_info: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
