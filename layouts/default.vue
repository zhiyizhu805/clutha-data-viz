<template>
  <!-- header section-->
  <header>
    <organisimsPageContainerHeader>
      <!-- header organism -->
      <organisimsHeader>
        <template #NavigationSecondary>
          <moleculesNavigationSecondaryItem
            url="/landuse_change"
            :active="active === 'landuse_change'"
          >
            <img
              src="/assets/images/icons/land_use_change.svg"
              alt="Landuse change"
              title="Landuse change"
            />
          </moleculesNavigationSecondaryItem>

          <moleculesNavigationSecondaryItem
            url="/water_qualit'"
            :active="active === 'water_quality'"
          >
            <img
              src="/assets/images/icons/water_quality.svg"
              alt="Water quality"
              title="Water quality"
            />
          </moleculesNavigationSecondaryItem>

          <moleculesNavigationSecondaryItem
            url="/invasive_species"
            :active="active === 'invasive_species'"
          >
            <img
              src="/assets/images/icons/invasive_species.svg"
              alt="Invasive Species"
              title="Invasive Species"
            />
          </moleculesNavigationSecondaryItem>

          <moleculesNavigationSecondaryItem
            url="/greenhouse_gas_emissions"
            :active="active === 'greenhouse_gas_emissions'"
          >
            <img
              src="/assets/images/icons/greenhouse_gas_emissions.svg"
              alt="Greenhouse Gas Emissions"
              title="Greenhouse Gas Emissions"
            />
          </moleculesNavigationSecondaryItem>

          <moleculesNavigationSecondaryItem
            url="/climate_variables"
            :active="active === 'climate_variables'"
          >
            <img
              src="/assets/images/icons/climate_variables.svg"
              alt="Climate Variables"
              title="Climate Variables"
            />
          </moleculesNavigationSecondaryItem>

          <moleculesNavigationSecondaryItem
            url="/social_well_being"
            :active="active === 'social_well_being'"
          >
            <img
              src="/assets/images/icons/social_wellbeing.svg"
              alt="Social Wellbeing"
              title="Social Wellbeing"
            />
          </moleculesNavigationSecondaryItem>
        </template>
        <template #NavigationPrimary>
          <moleculesNavigationPrimaryItemRegualr url="/home">
            Home
          </moleculesNavigationPrimaryItemRegualr>
          <moleculesNavigationPrimaryItemDropdownMenu>
            <moleculesNavigationPrimaryItemDropdownMenuItem url="/vision">
              Vision
            </moleculesNavigationPrimaryItemDropdownMenuItem>
            <moleculesNavigationPrimaryItemDropdownMenuItem url="/supporter">
              Supporters
            </moleculesNavigationPrimaryItemDropdownMenuItem>
          </moleculesNavigationPrimaryItemDropdownMenu>
          <moleculesNavigationPrimaryItemRegualr url="/disclaimer">
            Disclaimer
          </moleculesNavigationPrimaryItemRegualr>
        </template>
      </organisimsHeader>
    </organisimsPageContainerHeader>
  </header>

  <!-- article section-->
  <main>
    <slot name="default"></slot>
  </main>

  <!-- footer section-->
  <footer>
    <organisimsPageContainerFooter>
      <!-- footer organism -->
      <organisimsFooter> </organisimsFooter>
    </organisimsPageContainerFooter>
  </footer>
</template>

<script>
export default {
  inject: ['headline']
}
</script>
