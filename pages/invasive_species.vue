<template>
  <!-- headline section-->
  <organisimsPageContainerHeadline>
    Invasive Species
  </organisimsPageContainerHeadline>
    <!-- content-first section   -->
    <organisimsPageContainerTwoColumns>
      <!--  left side organism -->
      <organisimsChildContainerFortyPercentBasis>
        <!--  text without heading molecule-->
        <moleculesParagraph>
          New Zealand&#39;s biodiversity is unique: 100% of the country&#39;s
          frogs and reptiles, 90% of the insects, 80% of vascular plants, and
          25% of bird species are only found in New Zealand<sup>3</sup>.
        </moleculesParagraph>
        <moleculesParagraph>
          Invasive species are recognised as an important challenge in the
          catchment and greater region. The Otago Regional Council has
          classified 49 species<sup>4</sup> of plants and animals in the region
          as pests due to the threats they pose. With that the Upper Clutha
          Catchment is home to a valuable ecosystem that needs protecting and
          restoring.
        </moleculesParagraph>
        <!-- call out molecule-->
        <moleculesCallout statistic_value="503  ">
          Increase in the number of traps between 2020 and 2021
        </moleculesCallout>
        <moleculesParagraph>
          Monitoring the extent of invasive species can provide an insight into
          the extent and control of threats to our ecosystems.The predator
          control areas with the catchment are highlighted on the map.
        </moleculesParagraph>
      </organisimsChildContainerFortyPercentBasis>
      <!-- right side organism -->
      <organisimsChildContainerSixtyPercentBasis>
        <!-- graph frame organism-->
        <organisimsGraphFrame graph_title="Heat map of pest control areas within the catchment." flyout_id="placeholder2">
          <template #flyout>
            <organisimsFlyout flyout_id="placeholder2">
            </organisimsFlyout>
          </template>
          <template #graph>
            <img
              src="/assets/images/maps/map_pestcontrol_heat.svg"
              alt="Pest Control Heat Map"
              title="Pest Control Heat Map"
            />
          </template>
        </organisimsGraphFrame>
      </organisimsChildContainerSixtyPercentBasis>
    </organisimsPageContainerTwoColumns>

    <!-- divider section -->
    <organisimsPageContainerPlain>
      <!-- divider atom-->
      <atomsDivider divider_width="border-b-2"/>
    </organisimsPageContainerPlain>

    <!-- content-second section   -->
    <organisimsPageContainerTwoColumns>
      <!-- full width organism with items aligned to end -->
      <organisimsChildContainerFortyPercentBasis>
        <moleculesParagraph>
          Pest control efforts across the catchment have been on a steady
          increase the last three years, as the number of active traps
          (including automatic traps) across the catchment has been increasing.
        </moleculesParagraph>
        <!-- call out molecule-->
        <moleculesCallout statistic_value="855 ">
          Increase in the number of traps between 2021 and 2022.
        </moleculesCallout>
        <moleculesParagraph>
          The number of pests caught continues to increase as well, indicating
          that pest presence remains an issue.
        </moleculesParagraph>
      </organisimsChildContainerFortyPercentBasis>
      <!-- graph frame organism-->
      <organisimsChildContainerSixtyPercentBasis>
        <organisimsGraphFrame graph_title="Predator control data over the last three years." flyout_id="flyout_PredatorControl">
          <template #flyout>
            <organisimsFlyout flyout_id="flyout_PredatorControl">
              <moleculesDatasourceItem link="https://www.trap.nz/" link_title="TrapNZ">
                Data were obtained from
              </moleculesDatasourceItem>
            </organisimsFlyout>
          </template>
          <template #graph>
            <organisimsGraphContainerMedium>
              <plotsPredatorControl ></plotsPredatorControl>
            </organisimsGraphContainerMedium>
          </template>
        </organisimsGraphFrame>
      </organisimsChildContainerSixtyPercentBasis>
    </organisimsPageContainerTwoColumns>

    <!-- divider section -->
    <organisimsPageContainerPlain>
      <!-- divider atom-->
      <atomsDivider divider_width="border-b-2"/>
    </organisimsPageContainerPlain>

    <!-- content-third section   -->
    <organisimsPageContainerTwoColumns>
      <!--  left side organism -->
      <organisimsChildContainerFortyPercentBasis>
        <moleculesParagraph>
          In 2022, the dominating pests caught in the catchment are rats (40%)
          followed by possums(12%).
        </moleculesParagraph>
        <!-- call out molecule-->
        <moleculesCallout statistic_value="40%">
          The majority of pests caught in the catchment are rats.
        </moleculesCallout>
        <moleculesParagraph>
          Continued efforts to control pests in the catchment is an important
          contribution to the national Predator Free 2050 goal, which is working
          towards an Aotearoa where our native species are safe from extinction
          and thrive alongside us.
        </moleculesParagraph>
      </organisimsChildContainerFortyPercentBasis>
      <!-- right side organism -->
      <organisimsChildContainerSixtyPercentBasis>
        <!-- graph frame organism-->
        <organisimsGraphFrame graph_title="Type of pests being caught in traps across the catchment." flyout_id="flyout_PredatorType">
          <template #flyout>
            <organisimsFlyout flyout_id="flyout_PredatorType">
              <moleculesDatasourceItem link="https://www.trap.nz/" link_title="TrapNZ">
                Data were obtained from
              </moleculesDatasourceItem>
            </organisimsFlyout>
          </template>
          <template #graph>
            <organisimsGraphContainerMedium>
              <plotsPredatorType></plotsPredatorType>
            </organisimsGraphContainerMedium>
          </template>
        </organisimsGraphFrame>
      </organisimsChildContainerSixtyPercentBasis>
    </organisimsPageContainerTwoColumns>

    <!-- divider section -->
    <organisimsPageContainerPlain>
      <!-- divider atom-->
      <atomsDivider divider_width="border-b-2"/>
    </organisimsPageContainerPlain>

    <!-- content-fourth section   -->
    <organisimsPageContainerTwoColumns>
      <!--  left side organism -->
      <organisimsChildContainerFortyPercentBasis>
      <!-- Subhead01Textstyle heading -->
        <atomsSubhead01Textstyle>
          Wilding Conifers
        </atomsSubhead01Textstyle>
        <moleculesParagraph>
          Wilding conifers are a threat to native plants and animals as they
          compete for sunlight and water. Particularly high-risk areas of
          wilding conifer invasion are the high country and tussock grasslands
          of the catchment, which are further threatened by water demand and
          fire risk associated by the increase in wilding conifers. While WCIS,
          the Whakatipu Wilding Conifer Control Group, and Central Otago Wilding
          Control Group continue their wilding pine management efforts, it is
          important to consider the increasing threat that spreading exotic
          forest cover may pose on the catchment.
        </moleculesParagraph>
        <moleculesParagraph>
          The wilding conifer data are currently only sourced from the WCIS,
          which only covers a fraction of the spatial extent of the catchment.
        </moleculesParagraph>
     </organisimsChildContainerFortyPercentBasis>
      <!-- right side organism -->
      <organisimsChildContainerSixtyPercentBasis>
        <!-- graph frame organism-->
        <organisimsGraphFrame graph_title="Wilding pines control efforts by WCIS." flyout_id="flyout_WildingPines">
          <template #flyout>
            <organisimsFlyout flyout_id="flyout_WildingPines">
              <moleculesDatasourceItem link="https://wildpines.linz.govt.nz/portal/apps/StoryMapBasic/index.html?appid=9694bf0ea4b24ee7b13ca368ef449049" link_title="WCIS">
                Data were obtained from the Wilding Conifers Information System
              </moleculesDatasourceItem>
            </organisimsFlyout>
          </template>
          <template #graph>
            <organisimsGraphContainerSmall>
              <plotsWildingPines></plotsWildingPines>
            </organisimsGraphContainerSmall>
          </template>
        </organisimsGraphFrame>
      </organisimsChildContainerSixtyPercentBasis>
    </organisimsPageContainerTwoColumns>

    <!-- divider section -->
    <organisimsPageContainerPlain>
      <!-- divider atom-->
      <atomsDivider divider_width="border-b-2"/>
    </organisimsPageContainerPlain>

    <organisimsPageContainerPlain>
      <moleculesReference>
        <atomsSubhead01Textstyle>
          Reference
        </atomsSubhead01Textstyle>
        <moleculesReferenceItem url="https://environment.govt.nz/publications/environment-new-zealand-2007/chapter-12-biodiversity/introduction/" name=" online" additional_info=", last accessed Jan 2024.">
          [3] Environment New Zealand 2007, Ministry for the Environment, Manatū
          Mō Te Taiao, Report ME 847, Chapter 12 &minus; available
        </moleculesReferenceItem>
        <moleculesReferenceItem url="https://www.orc.govt.nz/plans-policies-reports/regional-plans-and-policies/regional-pest-management-plan" name=" online" additional_info=", last accessed Jan 2024.">
          [4] Otago Pest Management Plan 2019-2029, Otago Regional Council, 2019
          &minus; available
        </moleculesReferenceItem>
      </moleculesReference>
    </organisimsPageContainerPlain>
</template>

<script setup lang="ts">
useFlowbite();
</script>