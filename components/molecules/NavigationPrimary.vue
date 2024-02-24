<!-- navigation_primary should contain navigation_primary_item. The list is horizontal in screen larger than md,vertical(hidden in a dropdown container) in xs screen -->
<template>
    <ul
      class="flex flex-col p-4 mt-4 font-medium border bg-light-grey rounded-lg md:justify-around rtl:space-x-reverse md:w-full md:h-full md:flex-row md:mt-0 md:p-0 md:border-0 md:bg-white md:gap-0.5"
    >
      <slot></slot>
    </ul>
</template>
