<template>
  <div class="flex justify-between items-center w-full pl-5 pt-5 pr-2">
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
      <div class="flex flex-row lg:order-2">
        <atomsButtonInformation flyout_id="help_panel"></atomsButtonInformation>
        <atomsButtonHamburger flyout_id="nav_panel"></atomsButtonHamburger>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
