<template>
  <footer class="mb-16 xl:mt-24 lg:mt-16 md:mt-11 mt-10">
    <div
      class="flex justify-between items-end xl:border-t-6 border-t-4 border-grey-900 w-full pt-10 xl:pt-16 lg:pt-12 rounded"
    >
      <!-- wai wanaka logo -->
      <atomsLinkPlain url="https://waiwanaka.nz/">
        <!-- logo frame: having a fixed width and height -->
        <div class="xl:w-40 xl:h-24 lg:w-32 lg:h-20 md:w-24 md:h-14 w-28 h-16">
          <img
            src="/assets/images/icons/wai_wanaka_logo.svg"
            alt="Wai wanaka logo"
            title="Wai wanaka logo"
          />
        </div>
      </atomsLinkPlain>
      <div class="flex flex-col gap-3 justify-end">
        <!-- Email us-->
        <atomsLinkPlain url="mailto:getinvolved@waiwanaka.nz">
          <atomsFooter02Textstyle> Contact us </atomsFooter02Textstyle>
        </atomsLinkPlain>
        <atomsLinkPlain url="https://waiwanaka.nz/action-for-te-taiao/">
          <!-- Find out more-->
          <atomsFooter02Textstyle> Find out more </atomsFooter02Textstyle>
        </atomsLinkPlain>
      </div>
    </div>
  </footer>
  <!--  placeholder -->
  <slot></slot>
</template>
