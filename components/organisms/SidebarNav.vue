<template>
  <div class="flex flex-col gap-4 my-8">
    <a href="/">
      <atomsSidebarNavTextstyle
        text_style="text-grey-300 font-medium font-overused-grotesk"
        >Home</atomsSidebarNavTextstyle
      >
    </a>
    <a href="/story">
      <atomsSidebarNavTextstyle
        text_style="text-grey-300 font-medium font-overused-grotesk"
      >
        Our Story
      </atomsSidebarNavTextstyle>
    </a>
    <a href="/vision">
      <atomsSidebarNavTextstyle
        text_style="text-grey-300 font-medium font-overused-grotesk"
        >Vision</atomsSidebarNavTextstyle
      >
    </a>
    <a href="/supporter">
      <atomsSidebarNavTextstyle
        text_style="text-grey-300 font-medium font-overused-grotesk"
        >Supporters</atomsSidebarNavTextstyle
      >
    </a>
    <a href="/disclaimer">
      <atomsSidebarNavTextstyle
        text_style="text-grey-300 font-medium font-overused-grotesk"
        >Disclaimer</atomsSidebarNavTextstyle
      >
    </a>
  </div>
  <slot></slot>
</template>

<script>
export default {
  props: {
    flyout_id: {
      type: String,
      default: "drawer-disabled-backdrop",
    },
  },
};
</script>
