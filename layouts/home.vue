<template>
  <div class="HomePageLayout">
    <header class="max-w-screen-xl mx-auto px-2 xl:px-12 lg:px-8 md:px-6">
      <!-- header organism -->
      <organismsHeader> </organismsHeader>
    </header>

    <main><slot></slot></main>

    <organismsSidebar flyout_id="nav_panel">
      <organismsSidebarNav> </organismsSidebarNav>
    </organismsSidebar>
  </div>
</template>
