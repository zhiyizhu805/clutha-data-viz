<template>
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
        <template name="content">
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
        <template name="graph">
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
  <organisimsPageContainerPlain>
    <!-- divider atom-->
    <atomsDivider divider_width="border-b-2" />
  </organisimsPageContainerPlain>

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
        <template name="flyout">
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
        <template name="graph">
          <organisimsGraphContainerSmall>
            <!--  {{ LandUseChangeBuildUp.create_figure().to_html(div_id="LandUseChangeBuildUp",full_html=False, include_plotlyjs=False, include_mathjax=false )|safe }}-->
          </organisimsGraphContainerSmall>
        </template>
      </organisimsGraphFrame>
    </organisimsChildContainerSixtyPercentBasis>
  </organisimsPageContainerTwoColumns>
</template>
