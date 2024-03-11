<!-- Navigation_secondary: the six indicators' navigation list -->
<template>
  <div
    class="flex flex-row gap-0.5 justify-center items-center md:items-start items-1/4 z-10 md:mr-[3%] px-1 h-full flex-wrap"
  >
    <moleculesNavigationPrimaryItem
      url="/landuse_change"
      :active="isActive('/landuse_change')"
    >
      <img
        src="/assets/images/icons/land_use_change.svg"
        alt="Landuse change"
        title="Landuse change"
      />
    </moleculesNavigationPrimaryItem>

    <moleculesNavigationPrimaryItem
      url="/water_quality"
      :active="isActive('/water_quality')"
    >
      <img
        src="/assets/images/icons/water_quality.svg"
        alt="Water quality"
        title="Water quality"
      />
    </moleculesNavigationPrimaryItem>

    <moleculesNavigationPrimaryItem
      url="/invasive_species"
      :active="isActive('/invasive_species')"
    >
      <img
        src="/assets/images/icons/invasive_species.svg"
        alt="Invasive Species"
        title="Invasive Species"
      />
    </moleculesNavigationPrimaryItem>

    <moleculesNavigationPrimaryItem
      url="/greenhouse_gas_emissions"
      :active="isActive('/greenhouse_gas_emissions')"
    >
      <img
        src="/assets/images/icons/greenhouse_gas_emissions.svg"
        alt="Greenhouse Gas Emissions"
        title="Greenhouse Gas Emissions"
      />
    </moleculesNavigationPrimaryItem>

    <moleculesNavigationPrimaryItem
      url="/climate_variables"
      :active="isActive('/climate_variables')"
    >
      <img
        src="/assets/images/icons/climate_variables.svg"
        alt="Climate Variables"
        title="Climate Variables"
      />
    </moleculesNavigationPrimaryItem>

    <moleculesNavigationPrimaryItem
      url="/social_well_being"
      :active="isActive('/social_well_being')"
    >
      <img
        src="/assets/images/icons/social_wellbeing.svg"
        alt="Social Wellbeing"
        title="Social Wellbeing"
      />
    </moleculesNavigationPrimaryItem>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (routePath: string): boolean => {
  return route.path === routePath;
};
</script>
