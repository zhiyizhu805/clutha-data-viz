<template>
  <!-- headline section-->
  <organisimsHeadline> Climate Variables </organisimsHeadline>
  <!-- content01 -->
  <organisimsBaseArticleContainerPrimary>
    <template #left>
      <moleculesParagraph>
        Climate variables are a key driver for many measures of catchment health
        due to their influence on the ecosystem as well as water quality and
        quantity. This indicator includes temperature and rainfall observations
        obtained from four, currently active, measurement sites.
      </moleculesParagraph>
      <moleculesParagraph>
        Future expansion of the network of weather stations and parameters
        monitored would be extremely valuable to obtain a more robust
        representation of the climatic conditions of the catchment.
      </moleculesParagraph>
    </template>
    <template #right>
      <!-- graph frame organism -->
      <organisimsGraphFrame
        graph_title="Active weather stations in the Upper Clutha Catchment."
        flyout_id="flyout_ClimateVariables"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_ClimateVariables">
          </organisimsFlyout>
        </template>
        <template #graph>
          <img
            src="/assets/images/maps/map_climate_variables.svg"
            alt="Climate Variables"
            title="Climate Variables"
          />
        </template>
      </organisimsGraphFrame>
    </template>
  </organisimsBaseArticleContainerPrimary>

  <!-- divider -->
  <atomsDivider divider_width="border-b-2" />

  <!-- content02 -->
  <organisimsBaseArticleContainerSecondary>
    <template #content-section>
      <atomsSubhead01Textstyle> Wānaka Airport </atomsSubhead01Textstyle>
      <moleculesCallout statistic_value="Above the average ">
        Temperature data from 2022 show that our catchment continues to be
        slightly above the long-term average.
      </moleculesCallout>
    </template>
    <template #default>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Monthly total rainfall and average monthly temperature as observed at Wānaka Airport in 2022."
        flyout_id="flyout_ClimateVarAero"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_ClimateVarAero">
            <moleculesDatasourceItem
              link="https://cliflo.niwa.co.nz/"
              link_title="Cliflo"
            >
              Data were obtained from the National Climate Databas
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerLarge>
            <plotsClimateVarAero></plotsClimateVarAero>
          </organisimsGraphContainerLarge>
        </template>
      </organisimsGraphFrame>
    </template>
  </organisimsBaseArticleContainerSecondary>

  <!-- divider -->
  <atomsDivider divider_width="border-b-2" />

  <!-- content03 -->
  <organisimsBaseArticleContainerSecondary>
    <moleculesParagraph>
      The relationship between climate variables and other measures of catchment
      health are complex, but linked. Rainfall and temperature impact whether
      flora and fauna can flourish, may impede human recreation opportunities
      both in the summer and winter, as well as pose threats to the agricultural
      industry of the catchment.
    </moleculesParagraph>
    <moleculesParagraph>
      The range of some invasive species may increase within the Upper Clutha
      Catchment: for example, the sub-tropical bungalow palm, which currently
      only grows on the North Island, could spread to the South Island under a
      warming climate<sup>2</sup>. Furthermore, breeding seasons of invasive
      predators, such as rats, possums and mice, may also extend due to higher
      temperatures<sup>2</sup>, which can also accelerate the reproductive
      cycle, leading to faster population growth. Rainfall, on the other
      hand,rainfall influences the availability of food, water, and shelter for
      pests.
    </moleculesParagraph>
    <moleculesParagraph>
      Climate data presented here are thus important to consider when, for
      example, assessing the data presented as part of the
      <a href="/invasive_species" class="underline">invasive species</a>.
    </moleculesParagraph>
  </organisimsBaseArticleContainerSecondary>

  <!-- divider -->
  <atomsDivider divider_width="border-b-2" />

  <!-- content04 -->
  <organisimsBaseArticleContainerSecondary>
    <template #content-section>
      <moleculesParagraph>
        A dryer summer and wetter winter in 2022 were observed in Makarora
        compared to the long-term average from 1990 to 2005 &minus; putting
        pressure on the water resources, especially in summer. Furthermore,
        greater rainfall depths are expected to increase the likelihood of
        landslides and flooding.
      </moleculesParagraph>
    </template>
    <template #default>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Monthly total rainfall as observed at Makaroa in 2022. No temperature data were available from the climate database."
        flyout_id="flyout_ClimateMakaroa"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_ClimateMakaroa">
            <moleculesDatasourceItem
              link="https://cliflo.niwa.co.nz/"
              link_title="Cliflo"
            >
              Data were obtained from the National Climate Databas
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerLarge>
            <plotsClimateMakaroa></plotsClimateMakaroa>
          </organisimsGraphContainerLarge>
        </template>
      </organisimsGraphFrame>
    </template>
  </organisimsBaseArticleContainerSecondary>

  <!-- divider -->
  <atomsDivider divider_width="border-b-2" />

  <organisimsReference>
    <moleculesReferenceItem
      url="https://niwa.co.nz/education-and-training/schools/students/climate-change/impacts-for-NZ"
      name=" online"
      additional_info=", last accessed Jan 2024."
    >
      [2] Climate change and possible impacts for New Zealand, NIWA &minus;
      available
    </moleculesReferenceItem>
  </organisimsReference>
</template>

<script setup lang="ts">
useFlowbite();
</script>
