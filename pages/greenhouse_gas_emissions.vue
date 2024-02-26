<template>
  <!-- headline section-->
  <organisimsHeadline>
    Greenhouse Gas Emissions
  </organisimsHeadline>
  <!-- content-first section   -->
  
    <!-- full width organism with items aligned to end -->
    <organisimsChildContainerFullWidthItemsEnd>
      <organisimsChildContainerSixtyPercentWidth>
        <organisimsParagraph>
          Climate change mitigation is an important target for the catchment,
          which has a strong focus on being a sustainable tourism
          destination<sup>9,10</sup>. The purpose of providing an emissions
          inventory as part of the monitoring framework is to determine
          significant sources of GHG emissions in the catchment, which can help
          to prioritise mitigation efforts.
        </organisimsParagraph>
      </organisimsChildContainerSixtyPercentWidth>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="GHG emissions by sector in 2022 for the catchment. Forestry emissions are based on the most recent LUCAS data (from 2016)."
        flyout_id="flyout_GHGemissions"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_GHGemissions">
            <organisimsDatasourceItem
              link="https://www.auroraenergy.co.nz/"
              link_title="Aurora Energy"
            >
              Energy consumption data were obtained from the electricity network
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://www.stats.govt.nz/information-releases/agricultural-production-statistics-year-to-june-2022-provisional/"
              link_title="Stats NZ Agricultural Production Census"
            >
              Agricultural activity data were obtained from
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://waiwanaka.nz/wp-content/uploads/2023/10/Technical-Report-and-SOPs.pdf"
              link_title="Technical Report"
            >
              Transport emissions were derived from fuel tax data which were
              obtained from the Central Otago District Council. The detailed
              method on how emissions were derived can be found in the
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/"
              link_title="LUCAS"
            >
              GHG sequestration removals from forestry were estimated using data
              obtained from the Land Use and Coverage Area frame Survey (LUCAS)
              data set
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://lris.scinfo.org.nz/layer/104400-lcdb-v50-land-cover-database-version-50-mainland-new-zealand/"
              link_title="LCDB"
            >
              GHG sequestration removals from forestry were estimated using data
              obtained from the New Zealand Land Cover Database.
            </organisimsDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsTableContainer>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-6">
                  <!-- Leave this empty if there's no header in the first cell of the thead row -->
                </th>
                <th scope="col" class="py-3 px-6">
                  Emissions (tCO<sub>2</sub>e)
                </th>
                <th scope="col" class="py-3 px-6">
                  Change to previous year (%)
                </th>
              </tr>
            </thead>
            <tbody class="text-black">
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Transport</td>
                <td class="py-4 px-6 bg-grey-300 text-center">69,100</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">-4.7%</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Energy</td>
                <td class="py-4 px-6 bg-grey-300 text-center">13,400</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">8.1%</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Agriculture</td>
                <td class="py-4 px-6 bg-grey-300 text-center">137,000</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">3.6%</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Forestry</td>
                <td class="py-4 px-6 bg-grey-300 text-center">-69,500</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">N/A</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Net</td>
                <td class="py-4 px-6 bg-grey-300 text-center">150,000</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">1.6%</td>
              </tr>
            </tbody>
          </organisimsTableContainer>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerFullWidthItemsEnd>
  

  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  <!-- content-second section   -->
  <organisimsPageContainerTwoColumns>
    <!--  left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <!--  text without heading molecule-->
      <organisimsParagraph>
        Agriculture emissions are dominated by the sheep, dairy, and beef
        industries. Data for this sector were obtained from StatsNZ census.
      </organisimsParagraph>
      <organisimsParagraph>
        An overview of the GHG emissions by sector since 2020 is provided below.
        Overall, the emissions within the catchment have increased since 2020
        due to an increase in the emissions from the energy and agriculture
        sector.
      </organisimsParagraph>
    </organisimsChildContainerFortyPercentBasis>
    <!-- right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="GHG emissions from the agriculture sector by industry."
        flyout_id="flyout_GhgAgri"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_GhgAgri">
            <organisimsDatasourceItem
              link="https://www.stats.govt.nz/information-releases/agricultural-production-statistics-year-to-june-2022-provisional/"
              link_title="Stats NZ Agricultural Production Census"
            >
              Agricultural activity data were obtained from the (LUCAS) data set
            </organisimsDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerSmall>
            <plotsGhgAgri></plotsGhgAgri>
          </organisimsGraphContainerSmall>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>

  <!-- content-fourth section   -->
  
    <!-- full width organism with items aligned to end -->
    <organisimsChildContainerFullWidthItemsEnd>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="GHG emissions by industry sector in 2020, 2021 and 2022."
        flyout_id="flyout_GHGEmissionsBySector"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_GHGEmissionsBySector">
            <organisimsDatasourceItem
              link="https://www.auroraenergy.co.nz/"
              link_title="Aurora Energy"
            >
              Energy consumption data were obtained from the electricity network
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://www.stats.govt.nz/information-releases/agricultural-production-statistics-year-to-june-2022-provisional/"
              link_title="Stats NZ Agricultural Production Census"
            >
              Agricultural activity data were obtained from
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://waiwanaka.nz/wp-content/uploads/2023/10/Technical-Report-and-SOPs.pdf"
              link_title="Technical Report"
            >
              Transport emissions were derived from fuel tax data which were
              obtained from the Central Otago District Council. The detailed
              method on how emissions were derived can be found in the
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/"
              link_title="LUCAS"
            >
              GHG sequestration removals from forestry were estimated using data
              obtained from the Land Use and Coverage Area frame Survey (LUCAS)
              data set
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://lris.scinfo.org.nz/layer/104400-lcdb-v50-land-cover-database-version-50-mainland-new-zealand/"
              link_title="LCDB"
            >
              GHG sequestration removals from forestry were estimated using data
              obtained from the New Zealand Land Cover Database.
            </organisimsDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerLarge>
            <plotsGHGEmissionsBySector></plotsGHGEmissionsBySector>
          </organisimsGraphContainerLarge>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerFullWidthItemsEnd>
  

  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  <!-- content-third section   -->
  <organisimsPageContainerTwoColumns>
    <!-- left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <!--  text without heading molecule-->
      <organisimsParagraph>
        Each sector can be analysed in more detail to understand where the
        largest contributing activities or sources exist.For example, Wanaka is
        the main contributor to the overall emissions from the energy sector
        with 78%.
      </organisimsParagraph>
      <!-- call out molecule-->
      <organisimsCallout statistic_value="80%">
        According to a survey conducted by the QLDC 80% of residents in the
        catchment stated that they were &#147;concerned&#148; or &#147;very
        concerned&#148; about the potential impacts of climate change.
      </organisimsCallout>
      <organisimsParagraph>
        To align with national climate change commitments and targets and to
        alleviate concern from residents increase in GHG emissions needs to be
        addressed across the sectors and catchment.
      </organisimsParagraph>
    </organisimsChildContainerFortyPercentBasis>
    <!--  right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="GHG Emissions from the energy sector by location."
        flyout_id="flyout_GhgEnergy"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_GhgEnergy">
            <organisimsDatasourceItem
              link="https://www.auroraenergy.co.nz/"
              link_title="Aurora Energy"
            >
              Energy consumption data were obtained from the electricity network
            </organisimsDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerSmall>
            <plotsGhgEnergy></plotsGhgEnergy>
          </organisimsGraphContainerSmall>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>

  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  <!-- content-fourth section   -->
  <organisimsPageContainerTwoColumns>
    <!-- left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <organisimsParagraph>
        The forestry sector accounts for greenhouse gas removals in the
        catchment&#59; as forests grow, they sequester carbon dioxide and act as
        a natural carbon sink. A small quantity of greenhouse gas emissions
        result from deforestation and harvesting of both natural and plantation
        forests&#58; for example,a loss of 10.3 ha of forestland in 2016 led to
        9,500 tonnes of CO<sub>2</sub>e emitted to the atmosphere.
      </organisimsParagraph>
    </organisimsChildContainerFortyPercentBasis>
    <!--  right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="GHG emissions and removals from the forestry sector."
        flyout_id="flyout_GhgRemoval"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_GhgRemoval">
            <organisimsDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/"
              link_title="LUCAS"
            >
              GHG sequestration removals from forestry were estimated using data
              obtained from the Land Use and Coverage Area frame Survey
            </organisimsDatasourceItem>
            <organisimsDatasourceItem
              link="https://lris.scinfo.org.nz/layer/104400-lcdb-v50-land-cover-database-version-50-mainland-new-zealand/"
              link_title="LCDB"
            >
              GHG sequestration removals from forestry were estimated using data
              obtained from the New Zealand Land Cover Database
            </organisimsDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <plotsGhgRemoval></plotsGhgRemoval>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>
  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  
    <moleculesReference>
      <atomsSubhead01Textstyle> Reference </atomsSubhead01Textstyle>
      <moleculesReferenceItem
        url="https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/queenstownnz/Queenstown_Lakes_Regenerative_Tourism_Plan_956930e4-1b59-4293-9294-96b5d5ec5196.pdf"
        name=" online"
        additional_info=", last accessed Jan 2024."
      >
        [9] Destination Management Plan for Queenstown Lakes, Travel to a
        thriving future &minus; available
      </moleculesReferenceItem>
      <moleculesReferenceItem
        url="https://www.qldc.govt.nz/media/ie3jk5bb/qldc_climate-and-biodiversity-plan_jun22-web.pdf"
        name=" online"
        additional_info=", last accessed Jan 2024."
      >
        [10] Queenstown Lakes Climate and Biodiversity Plan 2022-2025, July 2022
        - available
      </moleculesReferenceItem>
    </moleculesReference>
  
</template>

<script setup lang="ts">
useFlowbite();
</script>
