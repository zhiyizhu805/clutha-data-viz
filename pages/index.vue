<template>
  <organismsFrontPageImage> </organismsFrontPageImage>
  <organismsSidebar flyout_id="help_panel">
    <section class="flex flex-col gap-4">
      <atomsBodyTextstyle
        text_style="text-grey-300 text-body font-light font-inter"
      >
        Welcome to the Upper Clutha Catchment Health Project, an initiative
        deeply rooted in the principles of Te Taiao, a profound connection to
        and reverence for the natural world. Our project serves as a catalyst
        for community engagement, uniting diverse stakeholders, from residents
        and iwi to landowners and tourism operators, in a collective effort to
        revitalise Te Taiao.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle
        text_style="text-grey-300 text-body font-light font-inter"
      >
        To navigate click on the indicator icons you would like to learn more
        about or use the navigation menu at the top.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle
        text_style="text-grey-300 text-body font-light font-inter"
      >
        Examples of the indicator icons are shown below:
      </atomsBodyTextstyle>
      <div class="w-full my-2 flex justify-center md:h-[120px]">
        <moleculesNavigationPrimary class="md:w-[400px]"> </moleculesNavigationPrimary>
      </div>
      <atomsBodyTextstyle
        text_style="text-grey-300 text-body font-light font-inter"
      >
        To learn more about our story click here.
      </atomsBodyTextstyle>
    </section>
  </organismsSidebar>
</template>

<script setup>
useFlowbite();
definePageMeta({
  layout: "home",
});
</script>
