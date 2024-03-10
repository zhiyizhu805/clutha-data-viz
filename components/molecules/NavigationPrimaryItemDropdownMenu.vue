<template>
  <li
    class="flex flex-grow justify-center items-center w-full basis-1/3 bg-light-grey navigation-list-nested-hover rounded-full"
  >
    <button
      id="dropdownNavbarLink"
      data-dropdown-toggle="dropdownNavbar"
      class="flex items-center justify-between text-gray-900 hover:bg-gray-100 hover:bg-transparent border-0 p-0 w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700"
    >
      <atomsNavTextstyle> About </atomsNavTextstyle>
      <svg
        class="w-2.5 h-2.5 ms-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <!-- Dropdown menu -->
  </li>
  <div
    id="dropdownNavbar"
    class="z-10 hidden font-normal bg-light-grey divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 md:w-[24%] w-full p-4 md:p-0"
  >
    <ul
      class="py-3 text-sm text-grey-900 dark:text-gray-200"
      aria-labelledby="dropdownLargeButton"
    >
      <slot></slot>
    </ul>
  </div>
</template>
