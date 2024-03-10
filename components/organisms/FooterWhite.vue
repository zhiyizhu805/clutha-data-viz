<template>
  <div class="flex gap-3 justify-between items-start w-full mb-4">
    <!-- Email us-->
    <nuxt-link to="mailto:getinvolved@waiwanaka.nz">
      <atomsFooter02Textstyle text_color="text-grey-300">
        Contact us
      </atomsFooter02Textstyle>
    </nuxt-link>
    <nuxt-link to="https://waiwanaka.nz/action-for-te-taiao/">
      <!-- Find out more-->
      <atomsFooter02Textstyle text_color="text-grey-300">
        Find out more
      </atomsFooter02Textstyle>
    </nuxt-link>
  </div>
  <h3 class="hidden md:block text-grey-300 font-medium font-overused-grotesk">
    Technical delivery partners
  </h3>

  <div class="flex gap-2 lg:gap-4 justify-between items-start w-full">
    <!-- wai wanaka logo -->
    <nuxt-link to="https://waiwanaka.nz/">
      <!-- logo frame: having a fixed width and height -->
      <div class="my-auto xl:h-20 lg:h-16 md:h-10 h-14">
        <img
          src="/assets/images/icons/wai_wanaka_logo_white.png"
          alt="Wai wanaka logo"
          title="Wai wanaka logo"
          class="h-full object-fill"
        />
      </div>
    </nuxt-link>
    <nuxt-link to="https://enviroaccounts.com/">
      <!-- logo frame: having a fixed width and height -->
      <div class="hidden md:block my-auto xl:h-20 lg:h-16 md:h-12 h-6">
        <img
          src="/assets/images/icons/EAS_vector_grey.svg"
          alt="EAS logo"
          title="EAS logo"
          class="h-full object-fill"
        />
      </div>
    </nuxt-link>
    <!-- <div class="my-auto h-full"> -->
    <nuxt-link to="https://whitelightstudio.co.nz/">
      <!-- logo frame: having a fixed width and height -->
      <div class="hidden md:block my-auto xl:h-18 lg:h-14 md:h-8 h-4">
        <img
          src="/assets/images/icons/whitelightstudios-white.png"
          alt="White Light Studio logo"
          title="White Light Studio logo"
          class="h-full object-fill"
        />
      </div>
    </nuxt-link>
  </div>
  <slot></slot>
</template>
