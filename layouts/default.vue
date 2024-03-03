<template>
  <organismsBaseContainerPrimary>
    <!-- header -->
    <organismsHeader>
      <template #NavigationSecondary>
        <moleculesNavigationSecondaryItem
          url="/landuse_change"
          :active="isActive('/landuse_change')"
        >
          <img
            src="/assets/images/icons/land_use_change.svg"
            alt="Landuse change"
            title="Landuse change"
          />
        </moleculesNavigationSecondaryItem>

        <moleculesNavigationSecondaryItem
          url="/water_quality"
          :active="isActive('/water_quality')"
        >
          <img
            src="/assets/images/icons/water_quality.svg"
            alt="Water quality"
            title="Water quality"
          />
        </moleculesNavigationSecondaryItem>

        <moleculesNavigationSecondaryItem
          url="/invasive_species"
          :active="isActive('/invasive_species')"
        >
          <img
            src="/assets/images/icons/invasive_species.svg"
            alt="Invasive Species"
            title="Invasive Species"
          />
        </moleculesNavigationSecondaryItem>

        <moleculesNavigationSecondaryItem
          url="/greenhouse_gas_emissions"
          :active="isActive('/greenhouse_gas_emissions')"
        >
          <img
            src="/assets/images/icons/greenhouse_gas_emissions.svg"
            alt="Greenhouse Gas Emissions"
            title="Greenhouse Gas Emissions"
          />
        </moleculesNavigationSecondaryItem>

        <moleculesNavigationSecondaryItem
          url="/climate_variables"
          :active="isActive('/climate_variables')"
        >
          <img
            src="/assets/images/icons/climate_variables.svg"
            alt="Climate Variables"
            title="Climate Variables"
          />
        </moleculesNavigationSecondaryItem>

        <moleculesNavigationSecondaryItem
          url="/social_well_being"
          :active="isActive('/social_well_being')"
        >
          <img
            src="/assets/images/icons/social_wellbeing.svg"
            alt="Social Wellbeing"
            title="Social Wellbeing"
          />
        </moleculesNavigationSecondaryItem>
      </template>
      <template #NavigationPrimary>
        <moleculesNavigationPrimaryItemRegular url="/">
          Home
        </moleculesNavigationPrimaryItemRegular>
        <moleculesNavigationPrimaryItemDropdownMenu>
          <moleculesNavigationPrimaryItemDropdownMenuItem url="/supporter">
            Supporters
          </moleculesNavigationPrimaryItemDropdownMenuItem>
        </moleculesNavigationPrimaryItemDropdownMenu>
        <moleculesNavigationPrimaryItemRegular url="/disclaimer">
          Disclaimer
        </moleculesNavigationPrimaryItemRegular>
      </template>
    </organismsHeader>

    <!-- article -->
    <main>
      <organismsBaseContainerSecondary>
         <slot name="default"></slot>
      </organismsBaseContainerSecondary>
    </main>

    <!-- footer -->
    <organismsFooter> </organismsFooter>
  </organismsBaseContainerPrimary>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (routePath: string): boolean => {
  return route.path === routePath;
};
</script>
