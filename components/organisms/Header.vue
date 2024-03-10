<template>
  <div class="flex justify-between items-center w-full">
    <!-- wai wanaka logo -->
    <atomsReferenceTextstyle url="https://waiwanaka.nz/">
      <div class="w-full object-fill h-12 xl:h-20 lg:h-18 md:h-16">
        <img
          src="/assets/images/icons/wai_wanaka_logo.svg"
          alt="Wai wanaka logo"
          title="Wai wanaka logo"
          class="w-full h-full object-fill"
        />
      </div>
    </atomsReferenceTextstyle>
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
