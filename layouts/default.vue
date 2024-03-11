<template>
  <!-- header -->
  <header class="max-w-screen-xl mx-auto h-auto md:px-4 px-0 mb-4">
    <organismsPageHeader> </organismsPageHeader>
  </header>

  <!-- article -->
  <main class="max-w-screen-xl mx-auto h-auto md:px-4 px-2">
    <organismsBaseContainerPrimary>
      <slot></slot>
    </organismsBaseContainerPrimary>
  </main>

  <!-- footer -->
  <footer class="max-w-screen-xl mx-auto h-auto md:px-4 px-2 mb-12">
    <organismsFooter> </organismsFooter>
  </footer>

  <!-- sidebar -->
  <organismsSidebar flyout_id="nav_panel">
    <organismsSidebarNav> </organismsSidebarNav>
  </organismsSidebar>
</template>
