<template>
<atomsBodyTextstyle>test</atomsBodyTextstyle>
  <atomsButtonBlack>test</atomsButtonBlack>
  <atomsHeadlineTextstyle>Disclaimer</atomsHeadlineTextstyle>
  <atomsButtonHamburger>test</atomsButtonHamburger>
  <atomsFooter02Textstyle>test3</atomsFooter02Textstyle>
  <atomsFooter02Textstyle> test</atomsFooter02Textstyle>
  <atomsFooterTextstyle class="text-dark-blue-900"> test</atomsFooterTextstyle>
  <atomsLinkPlain url="https://www.google.com"> Google</atomsLinkPlain>
  <atomsNavTextstyle>test</atomsNavTextstyle>
  <atomsSubhead02Textstyle>test</atomsSubhead02Textstyle>
  <atomsDivider />
  <moleculesParagraph>dhcbqwudhniaskd</moleculesParagraph>
  <moleculesDatasourceItem
    link="https://www.google.com"
    link_title="Google test"
    >View out web at</moleculesDatasourceItem
  >
  <moleculesIconFrameWithCircleBadge>test</moleculesIconFrameWithCircleBadge>
  <moleculesCallout statistic_value="30%">test</moleculesCallout>
  <moleculesReference
    >UnorderlistDiscStyle
    <moleculesReferenceItem
      url="https://www.google.com"
      name="Google"
      additional_info="here."
      >View
    </moleculesReferenceItem>
  </moleculesReference>
  <moleculesUnoderlistNodiscStyle>
    <moleculesUnorderlistItem>test</moleculesUnorderlistItem>
    <moleculesUnorderlistItem>test</moleculesUnorderlistItem>
    <moleculesUnorderlistItem>test</moleculesUnorderlistItem>
  </moleculesUnoderlistNodiscStyle>
  <moleculesUnorderlistDiscStyle>
    <moleculesUnorderlistItem>test</moleculesUnorderlistItem>
    <moleculesUnorderlistItem>test</moleculesUnorderlistItem>
  </moleculesUnorderlistDiscStyle>

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

    <moleculesNavigationSecondaryItem url="/landuse_change" :active="active === 'landuse_change'">
      <img src="/assets/images/icons/land_use_change.svg" alt="Landuse change" title="Landuse change" />
    </moleculesNavigationSecondaryItem>

    <moleculesNavigationSecondaryItem url="/water_qualit'" :active="active === 'water_quality'">
      <img src="/assets/images/icons/water_quality.svg" alt="Water quality" title="Water quality" />
    </moleculesNavigationSecondaryItem>

    <moleculesNavigationSecondaryItem url="/invasive_species" :active="active === 'invasive_species'">
      <img src="/assets/images/icons/invasive_species.svg" alt="Invasive Species" title="Invasive Species" />
    </moleculesNavigationSecondaryItem>

    <moleculesNavigationSecondaryItem url="/greenhouse_gas_emissions" :active="active === 'greenhouse_gas_emissions'">
      <img src="/assets/images/icons/greenhouse_gas_emissions.svg" alt="Greenhouse Gas Emissions" title="Greenhouse Gas Emissions" />
    </moleculesNavigationSecondaryItem>

    <moleculesNavigationSecondaryItem url="/climate_variables" :active="active === 'climate_variables'">
      <img src="/assets/images/icons/climate_variables.svg" alt="Climate Variables" title="Climate Variables" />
    </moleculesNavigationSecondaryItem>

    <moleculesNavigationSecondaryItem url="/social_well_being" :active="active === 'social_well_being'">
      <img src="/assets/images/icons/social_wellbeing.svg" alt="Social Wellbeing" title="Social Wellbeing" />
    </moleculesNavigationSecondaryItem>

    <moleculesNavigationTertiary>
        <!-- animation navigation_icon molecule -->
        <moleculesNavigationTertiaryItem navigation_title="climate variables" navigation_class="icon_climate_variables">
        <a href="/climate_variables">
          <img
            src="/assets/images/icons/climate_variables.svg"
            alt="Climate Variables"
            title="{{ navigation_title }}"
            class="w-full h-full"
          />
        </a>
        </moleculesNavigationTertiaryItem>
           <moleculesNavigationTertiaryItem navigation_title="greenhouse gas emissions" navigation_class="icon_greenhouse_gas_emissions">
        <a href="/greenhouse_gas_emissions">
          <img
            src="/assets/images/icons/greenhouse_gas_emissions.svg"
            alt="Greenhouse Gas Emissions "
            title="Greenhouse Gas Emissions"
            class="w-full h-full"
          />
        </a>
        </moleculesNavigationTertiaryItem>
        <moleculesNavigationTertiaryItem navigation_title="land use change" navigation_class="icon_land_use_change">
        <a href="/landuse_change">  
        <img
            src="/assets/images/icons/land_use_change.svg"
            alt="Landuse change"
            title="Landuse change"
            class="w-full h-full"
          />
        </a>
        </moleculesNavigationTertiaryItem>
         <moleculesNavigationTertiaryItem navigation_title="social wellbeing" navigation_class="icon_social_wellbeing">
        <a href="/social_well_being">
          <img
            src="/assets/images/icons/social_wellbeing.svg"
            alt="Social Wellbeing"
            title="Social Wellbeing"
            class="w-full h-full"
          />
        </a>
        </moleculesNavigationTertiaryItem>
         <moleculesNavigationTertiaryItem navigation_title="water quality" navigation_class="icon_water_quality">
        <a href="/water_quality">
          <img
            src="/assets/images/icons/water_quality.svg"
            alt="Water quality"
            title="Water quality"
            class="w-full h-full"
          />
        </a>
        </moleculesNavigationTertiaryItem>
         <moleculesNavigationTertiaryItem navigation_title="invasive species" navigation_class="icon_invasive_species">
        <a href="/invasive_species">
          <img
            src="/assets/images/icons/invasive_species.svg"
            alt="Invasive Species"
            title="Invasive Species"
            class="w-full h-full"
          />
        </a>
        </moleculesNavigationTertiaryItem>
    </moleculesNavigationTertiary>

    <moleculesParagraph>test</moleculesParagraph>

</template>