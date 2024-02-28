<template>
  <organisimsAnimation>
    <moleculesNavigationTertiaryItem
      navigation_title="climate variables"
      navigation_class="icon_climate_variables"
    >
      <a href="/climate_variables">
        <img
          src="/assets/images/icons/climate_variables.svg"
          alt="Climate Variables"
          title="{{ navigation_title }}"
          class="w-full h-full"
        />
      </a>
    </moleculesNavigationTertiaryItem>
    <moleculesNavigationTertiaryItem
      navigation_title="greenhouse gas emissions"
      navigation_class="icon_greenhouse_gas_emissions"
    >
      <a href="/greenhouse_gas_emissions">
        <img
          src="/assets/images/icons/greenhouse_gas_emissions.svg"
          alt="Greenhouse Gas Emissions "
          title="Greenhouse Gas Emissions"
          class="w-full h-full"
        />
      </a>
    </moleculesNavigationTertiaryItem>
    <moleculesNavigationTertiaryItem
      navigation_title="land use change"
      navigation_class="icon_land_use_change"
    >
      <a href="/landuse_change">
        <img
          src="/assets/images/icons/land_use_change.svg"
          alt="Landuse change"
          title="Landuse change"
          class="w-full h-full"
        />
      </a>
    </moleculesNavigationTertiaryItem>
    <moleculesNavigationTertiaryItem
      navigation_title="social wellbeing"
      navigation_class="icon_social_wellbeing"
    >
      <a href="/social_well_being">
        <img
          src="/assets/images/icons/social_wellbeing.svg"
          alt="Social Wellbeing"
          title="Social Wellbeing"
          class="w-full h-full"
        />
      </a>
    </moleculesNavigationTertiaryItem>
    <moleculesNavigationTertiaryItem
      navigation_title="water quality"
      navigation_class="icon_water_quality"
    >
      <a href="/water_quality">
        <img
          src="/assets/images/icons/water_quality.svg"
          alt="Water quality"
          title="Water quality"
          class="w-full h-full"
        />
      </a>
    </moleculesNavigationTertiaryItem>
    <moleculesNavigationTertiaryItem
      navigation_title="invasive species"
      navigation_class="icon_invasive_species"
    >
      <a href="/invasive_species">
        <img
          src="/assets/images/icons/invasive_species.svg"
          alt="Invasive Species"
          title="Invasive Species"
          class="w-full h-full"
        />
      </a>
    </moleculesNavigationTertiaryItem>
  </organisimsAnimation>


  <atomsDivider divider_width="border-b-2" />

  <!-- The story section -->
  <organisimsBaseContainerFullWidth gap="md:gap-7 gap-4">
    <atomsSubhead01Textstyle> The Story </atomsSubhead01Textstyle>

    <moleculesParagraph>
      Welcome to the Upper Clutha Catchment Health Project, an initiative deeply
      rooted in the principles of Te Taiao – a profound connection to and
      reverence for the natural world (Figure below). Our project serves as a
      catalyst for community engagement, uniting diverse stakeholders – from
      residents and iwi to landowners and tourism operators – in a collective
      effort to revitalise Te Taiao.
    </moleculesParagraph>
  </organisimsBaseContainerFullWidth>

  <organisimsBaseArticleContainerTertiary>
    <template #left>
      <organisimsGraphFrame
        graph_title="The concept of Te Taiao and its four interconnected components"
        flyout_id="flyout_Illustration_TeTaiao"
      >
        <template #flyout>
          <organisimsFlyout flyout_id="flyout_Illustration_TeTaiao">
          </organisimsFlyout>
        </template>
        <template #graph>
          <organisimsGraphContainerExtrasmall>
            <img
              width="100%"
              height="100%"
              src="/assets/images/graphs/Illustration_TeTaiao.png"
              alt="The concept of Te Taiao and its four interconnected components"
              title="The concept of Te Taiao and its four interconnected components"
            />
          </organisimsGraphContainerExtrasmall>
        </template>
      </organisimsGraphFrame>
      <moleculesParagraph>
        At the heart of our endeavour lies a comprehensive monitoring framework,
        crafted to encapsulate the essence of Te Taiao and to foster a holistic
        understanding of catchment health.
      </moleculesParagraph>
      <moleculesParagraph>
        The monitoring framework is comprised of a selection of indicators that
        reflect the health of our land, water, biodiversity, livelihoods, and
        culture within the catchment, all interconnected within Te Taiao. These
        indicators not only provide valuable insights but also instil a sense of
        ownership and pride within our community for the stewardship of our
        catchment.
      </moleculesParagraph>
    </template>
    <template #right>
      <moleculesParagraph>
        The monitoring framework is comprised of a selection of indicators that
        reflect the health of our land, water, biodiversity, livelihoods, and
        culture within the catchment, all interconnected within Te Taiao. These
        indicators not only provide valuable insights but also instil a sense of
        ownership and pride within our community for the stewardship of our
        catchment.
      </moleculesParagraph>
      <moleculesParagraph>
        By rooting our monitoring framework indicators with direct community
        values, pressures, and actions that were identified in the
        <a
          href="https://waiwanaka.nz/projects/community-catchment-plan/"
          class="underline"
          >Upper Clutha Community Catchment Plan</a
        >, our framework embodies a collaborative effort involving the entire
        catchment community, including residents from rural and urban areas, as
        well as visitors to our region. Through ongoing monitoring and
        reporting, we aim to showcase the myriad of local initiatives dedicated
        to preserving and enhancing our catchment's health as well as guide
        future environmental investments.
      </moleculesParagraph>
      <moleculesParagraph>
        The monitoring framework aims to connect the Upper Clutha community to
        Te Taiao through understanding the state of our catchment health and the
        interacting indicators that contribute such. We recognise that true
        health in our catchment transcends mere ecological balance; it
        encompasses a sustainable coexistence between human activities and
        endeavours, and the natural environment. Through our monitoring
        framework, we aim to assess and nurture this delicate equilibrium,
        guided by the ethos of respect and care for our surroundings.
      </moleculesParagraph>
      <moleculesParagraph>
        As a central repository for data collection and reporting, our
        monitoring framework fosters collaboration among various organisations
        across the catchment, ensuring a unified approach towards environmental
        stewardship. It serves as the cornerstone for our annual "State of
        Catchment Health" assessments, providing a concise overview of key
        findings as presented on this website.
      </moleculesParagraph>
    </template>
  </organisimsBaseArticleContainerTertiary>

  <atomsDivider divider_width="border-b-2" />

  <!-- Join us section -->
  <organisimsBaseContainerFullWidth gap="md:gap-7 gap-4">
    <atomsSubhead01Textstyle>
      Join Us in Building a Healthier Catchment!
    </atomsSubhead01Textstyle>
    <moleculesParagraph>
      By partnering with us, you'll not only contribute to the preservation of
      our natural resources but also strengthen your organisation's commitment
      to sustainability and community engagement. Together, we can make a
      lasting impact on the health and vitality of the Upper Clutha Catchment.
      We look forward to welcoming you as a valued partner in this important
      endeavour.
    </moleculesParagraph>
    <moleculesParagraph>
      <atomsButtonBlack>
        <a href="/supporter">Become a supporter</a>
      </atomsButtonBlack>
    </moleculesParagraph>

    <moleculesParagraph>
      Want to find more information on how to become a partner?

      <a href="mailto:getinvolved@waiwanaka.nz" class="underline">contact us</a>
    </moleculesParagraph>
  </organisimsBaseContainerFullWidth>
</template>

<script setup lang="ts">
useFlowbite();
useScrollAnimation();
</script>
