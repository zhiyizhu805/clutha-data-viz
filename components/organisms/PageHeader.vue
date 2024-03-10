<template>
  <!-- header organism -->
  <div class="flex bg-white border-gray-200 rounded dark:bg-gray-900">
    <div
      class="min-w-screen-xs w-full flex flex-wrap items-center justify-between mx-auto md:items-center relative h-[85px] md:h-[118px] lg:h-[157px] xl:h-[196px] border-b-4 border-grey-900 md:border-none"
    >
      <!-- navigation_secondary list -->
      <moleculesNavigationSecondary> </moleculesNavigationSecondary>
      <!-- divider-->
      <div
        class="w-full md:border-b-4 xl:border-b-6 mt-20 absolute bottom-[40%] mx-auto h-auto z-0 rounded-full border-grey-900"
      ></div>
      <!-- hamburger button-->
      <div class="flex lg:order-2 md:mb-[50px]">
        <atomsButtonHamburger flyout_id="nav_panel"></atomsButtonHamburger>
      </div>
      <nav class="hidden items-center justify-between w-full" id="navbar-cta">
        <!--  navigation_primary list -->
        <moleculesNavigationPrimary>
          <!-- navigation_primary item -->
          <slot></slot>
        </moleculesNavigationPrimary>
      </nav>
    </div>
  </div>
</template>
