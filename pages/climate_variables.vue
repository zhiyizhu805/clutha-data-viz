<template>
  <organismsHeadline> Climate Variables </organismsHeadline>
  <!-- content01 -->
  <organismsBaseArticleContainerPrimary>
    <template #left>
      <atomsBodyTextstyle>
        Climate variables are a key driver for many measures of catchment health
        due to their influence on the ecosystem as well as water quality and
        quantity. This indicator includes temperature and rainfall observations
        obtained from four, currently active, measurement sites.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        Future expansion of the network of weather stations and parameters
        monitored would be extremely valuable to obtain a more robust
        representation of the climatic conditions of the catchment.
      </atomsBodyTextstyle>
    </template>
    <template #right>
      <!-- graph frame organism -->
      <organismsGraphFrame
        graph_title="Active weather stations in the Upper Clutha Catchment."
        flyout_id="flyout_ClimateVariables"
      >
        <template #flyout>
          <organismsFlyout flyout_id="flyout_ClimateVariables">
          </organismsFlyout>
        </template>
        <template #graph>
          <img
            src="/assets/images/maps/map_climate_variables.svg"
            alt="Climate Variables"
            title="Climate Variables"
          />
        </template>
      </organismsGraphFrame>
    </template>
  </organismsBaseArticleContainerPrimary>

  <atomsDivider divider_width="border-b-2" />

  <!-- content02 -->
  <organismsBaseArticleContainerSecondary>
    <template #content-section>
      <atomsSubhead01Textstyle> Wānaka Airport </atomsSubhead01Textstyle>
      <moleculesCallout statistic_value="Above the average ">
        Temperature data from 2022 show that our catchment continues to be
        slightly above the long-term average.
      </moleculesCallout>
    </template>
    <template #default>
      <!-- graph frame organism-->
      <organismsGraphFrame
        graph_title="Monthly total rainfall and average monthly temperature as observed at Wānaka Airport in 2022."
        flyout_id="flyout_ClimateVarAero"
        graph_container="graph_container_large"
      >
        <template #flyout>
          <organismsFlyout flyout_id="flyout_ClimateVarAero">
            <moleculesDatasourceItem
              link="https://cliflo.niwa.co.nz/"
              link_title="Cliflo"
            >
              Data were obtained from the National Climate Databas
            </moleculesDatasourceItem>
          </organismsFlyout>
        </template>
        <template #graph>
            <plotsClimateVarAero></plotsClimateVarAero>
        </template>
      </organismsGraphFrame>
    </template>
  </organismsBaseArticleContainerSecondary>

  <atomsDivider divider_width="border-b-2" />

  <!-- content03 -->
  <organismsBaseArticleContainerSecondary>
    <atomsBodyTextstyle>
      The relationship between climate variables and other measures of catchment
      health are complex, but linked. Rainfall and temperature impact whether
      flora and fauna can flourish, may impede human recreation opportunities
      both in the summer and winter, as well as pose threats to the agricultural
      industry of the catchment.
    </atomsBodyTextstyle>
    <atomsBodyTextstyle>
      The range of some invasive species may increase within the Upper Clutha
      Catchment: for example, the sub-tropical bungalow palm, which currently
      only grows on the North Island, could spread to the South Island under a
      warming climate<sup>2</sup>. Furthermore, breeding seasons of invasive
      predators, such as rats, possums and mice, may also extend due to higher
      temperatures<sup>2</sup>, which can also accelerate the reproductive
      cycle, leading to faster population growth. Rainfall, on the other
      hand,rainfall influences the availability of food, water, and shelter for
      pests.
    </atomsBodyTextstyle>
    <atomsBodyTextstyle>
      Climate data presented here are thus important to consider when, for
      example, assessing the data presented as part of the
      <atomsReferenceTextstyle url="/invasive_species">invasive species</atomsReferenceTextstyle>.
    </atomsBodyTextstyle>
  </organismsBaseArticleContainerSecondary>

  <atomsDivider divider_width="border-b-2" />

  <!-- content04 -->
  <organismsBaseArticleContainerSecondary>
    <template #content-section>
      <atomsBodyTextstyle>
        A dryer summer and wetter winter in 2022 were observed in Makarora
        compared to the long-term average from 1990 to 2005 &minus; putting
        pressure on the water resources, especially in summer. Furthermore,
        greater rainfall depths are expected to increase the likelihood of
        landslides and flooding.
      </atomsBodyTextstyle>
    </template>
    <template #default>
      <!-- graph frame organism-->
      <organismsGraphFrame
        graph_title="Monthly total rainfall as observed at Makaroa in 2022. No temperature data were available from the climate database."
        flyout_id="flyout_ClimateMakaroa"
        graph_container="graph_container_large"
      >
        <template #flyout>
          <organismsFlyout flyout_id="flyout_ClimateMakaroa">
            <moleculesDatasourceItem
              link="https://cliflo.niwa.co.nz/"
              link_title="Cliflo"
            >
              Data were obtained from the National Climate Databas
            </moleculesDatasourceItem>
          </organismsFlyout>
        </template>
        <template #graph>
            <plotsClimateMakaroa></plotsClimateMakaroa>
        </template>
      </organismsGraphFrame>
    </template>
  </organismsBaseArticleContainerSecondary>

  <atomsDivider divider_width="border-b-2" />

  <organismsReference>
    <moleculesReferenceItem
      url="https://niwa.co.nz/education-and-training/schools/students/climate-change/impacts-for-NZ"
      name=" online"
      additional_info=", last accessed Jan 2024."
    >
      [2] Climate change and possible impacts for New Zealand, NIWA &minus;
      available
    </moleculesReferenceItem>
  </organismsReference>
</template>

<script setup lang="ts">
useFlowbite();
</script>
