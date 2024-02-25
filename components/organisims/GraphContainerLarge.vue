<!-- graph inside the large frame will overflow in mobile(xs) screen -->
<template>
  <div class="overflow-auto md:overscroll-none w-full">
    <div class="w-208 md:w-full"><slot></slot></div>
  </div>
</template>
