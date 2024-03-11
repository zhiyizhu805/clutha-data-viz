<template>
  <div class="flex justify-between items-center w-full">
    <!-- wai wanaka logo -->
    <nuxt-link to="https://waiwanaka.nz/">
        <img
          src="/assets/images/icons/wai-wanaka-logo.png"
          alt="Wai wanaka logo"
          title="Wai wanaka logo"
          class="h-auto aspect-auto xl:w-32 lg:w-28 w-24"
        />
    </nuxt-link>
    <div
      class="relative w-full flex flex-wrap flex-row-reverse items-center justify-between mx-auto"
    >
      <!-- hamburger button-->
      <div class="flex flex-col lg:order-2">
        <atomsButtonHamburger flyout_id="nav_panel"></atomsButtonHamburger>
        <atomsButtonInformation flyout_id="help_panel"></atomsButtonInformation>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
