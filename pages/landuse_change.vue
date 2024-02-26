<template>
  <!-- headline section-->
  <organisimsHeadline>
    Landuse Change
  </organisimsHeadline>
  <!-- content-first section   -->
  <organisimsPageContainerTwoColumns>
    <!--  left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <!--  text without heading molecule-->
      <moleculesParagraph>
        Land use and land use change are catchment-wide indicators assessing how
        we are using our land. Over half of the area of the catchment is
        categorised as “production grassland”, dominated by low producing
        grassland. Following grassland, the most common land uses in the
        catchment are forest land (16.6%), and grassland with woody biomass
        (11.0%). Built-up areas account for only 0.3% of the total area of the
        catchment.
      </moleculesParagraph>
      <!-- call out molecule-->
      <moleculesCallout statistic_value="60%">
        Areas of built-up land have increased by 60% while the population
        increased four-fold since 1990.
      </moleculesCallout>
    </organisimsChildContainerFortyPercentBasis>
    <!-- right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Land use cover across the catchment in 2016."
        flyout_id="placeholder3"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="placeholder3">
            <moleculesDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/)"
              link_title="MfE Data Service"
            >
              Data were obtained from the Land Use and Coverage Area frame
              Survey (LUCAS) data set
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <img
            src="/assets/images/maps/map_landuse.svg"
            alt="Landuse Map"
            title="Landuse Map"
          />
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>

  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  <!-- content-second section   -->
  <organisimsPageContainerTwoColumns>
    <!-- left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <!--  text without heading molecule-->
      <moleculesParagraph>
        Urban areas in Wānaka and Hāwea have increased since 1990. Primarily
        through the conversion of productive grassland. Despite this conversion,
        the total area of production grassland remained the same, as grassland
        with woody biomass has been converted to production grassland.
      </moleculesParagraph>
    </organisimsChildContainerFortyPercentBasis>
    <!--  right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Land use categories before 1990"
        flyout_id="flyout_LandUseChangeBuildUp"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_LandUseChangeBuildUp">
            <moleculesDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/)"
              link_title="MfE Data Service"
            >
              Data were obtained from the Land Use and Coverage Area frame
              Survey (LUCAS) data set
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerSmall>
            <plotsLandUseChangeBuildUp />
          </organisimsGraphContainerSmall>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>

  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  <!-- content-third section   -->
  
    <!-- full width organism with items aligned to end -->
    <organisimsChildContainerFullWidthItemsEnd>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Total area by land use category for the catchment and their changes since 1990 (in hectares)."
        flyout_id="placeholder4"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="placeholder4">
            <moleculesDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/)"
              link_title="MfE Data Service"
            >
              Data were obtained from the Land Use and Coverage Area frame
              Survey (LUCAS) data set
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsTableContainer>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-6">Land Use Category</th>
                <th scope="col" class="py-3 px-6">2016 (ha)</th>
                <th scope="col" class="py-3 px-6">
                  Net change since 1990 (ha)
                </th>
              </tr>
            </thead>
            <tbody class="text-black">
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Forest</td>
                <td class="py-4 px-6 bg-grey-300 text-center">76,000</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">392</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">
                  Grassland with woody biomass
                </td>
                <td class="py-4 px-6 bg-grey-300 text-center">50,500</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">-932</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Production grassland</td>
                <td class="py-4 px-6 bg-grey-300 text-center">247,800</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">35</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Cropland</td>
                <td class="py-4 px-6 bg-grey-300 text-center">1,100</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">-18</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Wetland</td>
                <td class="py-4 px-6 bg-grey-300 text-center">39,400</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">-21</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Built-up area</td>
                <td class="py-4 px-6 bg-grey-300 text-center">1,400</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">551</td>
              </tr>
              <tr class="border-b-2 border-white">
                <td class="py-4 px-6 bg-grey-500">Other</td>
                <td class="py-4 px-6 bg-grey-300 text-center">42,600</td>
                <td class="py-4 px-6 bg-neutral-100 text-center">-7</td>
              </tr>
            </tbody>
          </organisimsTableContainer>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerFullWidthItemsEnd>
  

  <!-- two column organisims -->
  <organisimsPageContainerTwoColumns>
    <!-- left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <!--  text without heading molecule-->
      <moleculesParagraph>
        Since 1990, there has been a net increase of 392 ha of forestland across
        the catchment.Most of this increase has been through the growth of new
        exotic forest. The cover of natural, indigenous forest has seen a net
        decline.
      </moleculesParagraph>
    </organisimsChildContainerFortyPercentBasis>
    <!--  right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Land uses converted from forestland since 1990."
        flyout_id="flyout_landUses"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_landUses">
            <moleculesDatasourceItem
              link="https://data.mfe.govt.nz/layer/52375-lucas-nz-land-use-map-1990-2008-2012-2016-v011/)"
              link_title="MfE Data Service"
            >
              Data were obtained from the Land Use and Coverage Area frame
              Survey (LUCAS) data set
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerMedium>
            <plotsLandUses />
          </organisimsGraphContainerMedium>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>
  <!-- divider section -->
  
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  

  <!-- content-four section   -->
  <organisimsPageContainerTwoColumns>
    <!--  left side organism -->
    <organisimsChildContainerFortyPercentBasis>
      <!-- Subhead01Textstyle molecule-->
      <atomsSubhead01Textstyle> Forest Cover </atomsSubhead01Textstyle>
      <!--  text with heading molecule-->
      <moleculesParagraph>
        To understand the current land use and land use change practices, a more
        recent dataset from 2008 to 2018 was analysed, showing a gross increase
        in exotic forest cover of 71 ha.This increase results from the
        conversion of production grassland (52 ha). 52 ha account for 0.02% of
        the total production grassland available in the catchment. A gross
        decrease in indigenous forest cover of 69 ha is observed between 2008
        and 2018.
      </moleculesParagraph>

      <!-- call out -->
      <moleculesCallout statistic_value="<0.2%">
        Indigenous forest cover has decreased by &lt;0.2% between 2008 and 2018.
      </moleculesCallout>
      <moleculesParagraph>
        Most of the loss of indigenous forest that took place between 2008 and
        2018 was the result of landslides in the high alpine<sup>1</sup>, rather
        than a direct impact of anthropogenic activities. While indigenous
        forest is not under particular threat, other native vegetation classes
        have seen significant reductions in land cover.For example, fernlands
        decreased by 1,500 ha.
      </moleculesParagraph>
    </organisimsChildContainerFortyPercentBasis>
    <!-- right side organism -->
    <organisimsChildContainerSixtyPercentBasis>
      <!-- graph frame organism-->
      <organisimsGraphFrame
        graph_title="Land uses converted into exotic forest between 2008 and 2018."
        flyout_id="flyout_LandUseChangeExoticForest"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_LandUseChangeExoticForest">
            <moleculesDatasourceItem
              link="https://lris.scinfo.org.nz/layer/104400-lcdb-v50-land-cover-database-version-50-mainland-new-zealand/"
              link_title="LDCB-LRIS Portal"
            >
              Data were obtained from the New Zealand Land Cover Database
            </moleculesDatasourceItem>
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerSmall>
            <plotsLandUseChangeExoticForest />
          </organisimsGraphContainerSmall>
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
        url="https://lris.scinfo.org.nz/layer/104400-lcdb-v50-land-cover-database-version-50-mainland-new-zealand/"
        name=" LRIS Portal"
        additional_info=",last accessed Jan 2024."
      >
        [1] Land Cover Database version 5.0, Mainland, New Zealand &minus;
        available from the
      </moleculesReferenceItem>
    </moleculesReference>
  
</template>

<script setup lang="ts">
useFlowbite();
</script>
