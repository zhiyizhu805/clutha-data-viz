<template>
  <!-- header organism -->
  <div class="flex bg-white border-gray-200 rounded dark:bg-gray-900">
    <div
      class="w-full flex flex-wrap flex-row-reverse items-center justify-between mx-auto md:items-center relative h-[85px] md:h-[118px] lg:h-[157px] xl:h-[196px] border-b-4 border-grey-900 md:border-none"
    >
      <!-- navigation_secondary list -->
      <moleculesNavigationSecondary>
        <slot name="NavigationSecondary"></slot>
      </moleculesNavigationSecondary>
      <!-- divider-->
      <div
        class="w-full md:border-b-4 xl:border-b-6 mt-20 absolute bottom-[40%] mx-auto h-auto z-0 rounded-full border-grey-900"
      ></div>
      <!-- hamburger button-->
      <div class="flex lg:order-2 md:hidden">
        <atomsButtonHamburger> </atomsButtonHamburger>
      </div>
      <nav
        class="md:flex hidden items-center justify-between w-full md:w-[40%] md:order-1 md:ml-[3%] md:h-[22%] xl:mb-7 lg:mb-6 md:mb-5"
        id="navbar-cta"
      >
        <!--  navigation_primary list -->
        <moleculesNavigationPrimary>
          <!-- navigation_primary item -->
          <slot name="NavigationPrimary"></slot>
        </moleculesNavigationPrimary>
      </nav>
    </div>
  </div>
</template>
