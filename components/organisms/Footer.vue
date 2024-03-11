<template>
  <div
    class="flex justify-between items-end xl:border-t-6 border-t-4 border-grey-900 w-full pt-10 xl:pt-16 lg:pt-12 rounded xl:mt-24 lg:mt-16 md:mt-11 mt-10"
  >
    <!-- wai wanaka logo -->
    <atomsReferenceTextstyle url="https://waiwanaka.nz/">
        <img
          src="/assets/images/icons/wai-wanaka-logo.png"
          alt="Wai wanaka logo"
          title="Wai wanaka logo"
          class="h-auto aspect-auto lg:w-32 md:w-24 w-20"
        />
    </atomsReferenceTextstyle>
    <div class="flex flex-col gap-3 justify-end">
      <!-- Email us-->
      <atomsFooter02Textstyle
        is-link
        link-href="mailto:getinvolved@waiwanaka.nz"
      >
        Contact us
      </atomsFooter02Textstyle>
      <!-- Find out more-->
      <atomsFooter02Textstyle
        is-link
        link-href="https://waiwanaka.nz/action-for-te-taiao/"
      >
        Find out more
      </atomsFooter02Textstyle>
    </div>
  </div>
  <slot></slot>
</template>
