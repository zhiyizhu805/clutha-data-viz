<template>
  <organisimsHeadline> Social Well-being </organisimsHeadline>
  <!-- content01 -->
  <organisimsBaseArticleContainerTertiary>
    <template #left>
      <organisimsBaseContainerFullWidth>
        <atomsBodyTextstyle>
          Social well-being considers the social and economic aspects of
          catchment health, including&#58;
        </atomsBodyTextstyle>
        <moleculesUnorderlistDiscStyle>
          <moleculesUnorderlistItem>
            Community and Cultural Spirit
          </moleculesUnorderlistItem>
          <moleculesUnorderlistItem>
            Affordability Overall
          </moleculesUnorderlistItem>
          <moleculesUnorderlistItem> Quality of Life </moleculesUnorderlistItem>
        </moleculesUnorderlistDiscStyle>
      </organisimsBaseContainerFullWidth>
      <atomsBodyTextstyle>
        Monitoring social well-being is important, as social drivers have a key
        influence on other aspects of catchment health, including pest control,
        biodiversity, water quality and effective land use management.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        The Queenstown Lake District Council conducts a &#39;Quality of Life
        Survey&#39; annually to better understand what works well and what the
        challenges facing the residents in the district are. Data collected by
        this survey were used to derive social well-being rankings for the
        catchment.
      </atomsBodyTextstyle>
    </template>
    <template #right>
      <moleculesCallout statistic_value="C">
        Overall social well-being rank.
      </moleculesCallout>
      <atomsBodyTextstyle>
        Despite the low overall score, the sense of cultural heritage saw an
        improvement compared to the previous year, as more respondents reported
        being able to express their culture without feeling excluded from their
        community or neighbourhood. Nonetheless, just over one third of
        residents expressed satisfaction with the celebration of tangata whenua
        and Māori culture, which remains consistently low.
      </atomsBodyTextstyle>
    </template>
  </organisimsBaseArticleContainerTertiary>

  <atomsDivider divider_width="border-b-2" />

  <!-- content02 -->
  <organisimsBaseArticleContainerSecondary>
    <!-- graph frame organism-->
    <organisimsGraphFrame
      graph_title="Rankings of the social well-being, including its different aspects."
      flyout_id="placeholder6"
    >
      <template #flyout>
        <organisimsFlyout flyout_id="placeholder6">
          <moleculesDatasourceItem
            link="https://letstalk.qldc.govt.nz/qol"
            link_title="Quality of Life Survey"
          >
            Data and information were obtained from the Queenstown Lakes
            District Council (QLDC)
          </moleculesDatasourceItem>
        </organisimsFlyout>
      </template>
      <template #graph>
        <organisimsGraphContainerLarge>
          <img
            src="/assets/images/graphs/social_wellbeing.svg"
            alt="Social wellbeing"
            title="Social wellbeing"
          />
        </organisimsGraphContainerLarge>
      </template>
    </organisimsGraphFrame>
  </organisimsBaseArticleContainerSecondary>

  <atomsDivider divider_width="border-b-2" />

  <!-- content03 -->
  <organisimsBaseArticleContainerTertiary>
    <template #left>
      <atomsBodyTextstyle>
        Various studies have been conducted to understand how the health of the
        environment we live in may impact the well-being of the people who live
        in it. Societies living in a flourishing, green environment may be more
        likely to thrive<sup>5</sup>. Wealthier societies may have more
        opportunities to invest in climate-aware lifestyle choices<sup>6</sup>.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        Māori health models, such as the concept of Te Whare Tapa Whā,
        illustrate the intimate link between the physical, spiritual and mental
        health of individuals with their communities and
        environment<sup>7</sup>.
      </atomsBodyTextstyle>
      <moleculesCallout statistic_value="36%">
        of survey respondents indicated that they had sufficient levels of
        disposable income after meeting all of their basic needs.
      </moleculesCallout>
    </template>
    <template #right>
      <atomsBodyTextstyle>
        It is important to link social well-being to the other indicators
        presented in this report, to gain insights into how the health and
        happiness of the community may impact the catchment health.
      </atomsBodyTextstyle>
      <moleculesCallout statistic_value="82%">
        of survey respondents stating their quality of life to be
        &quot;good&quot; or &quot;extremely good&quot;.
      </moleculesCallout>
      <atomsBodyTextstyle>
        Spare income and spare time are vital requirements for residents of the
        catchment to be able to invest into caring for the environment; whether
        this is in the form of volunteer hours or financial donations to support
        ecological and environmental projects. Despite the high rank of the
        overall quality of life, the high cost of living and low affordability
        of housing pose significant threats for the future health of the
        catchment, as residents may simply be unable to afford to support
        improvements.
      </atomsBodyTextstyle>
    </template>
  </organisimsBaseArticleContainerTertiary>

  <atomsDivider divider_width="border-b-2" />

  <!--Reference -->
  <organisimsReference>
    <moleculesReferenceItem
      url="https://academic.oup.com/heapro/article/36/Supplement_1/i53/6460415"
      name=" online"
      additional_info=", last accessed Jan 2024."
    >
      [5] Hancock, T. and the IUHPE&#39;s Global Working Group on Waiora
      Planetary Health: Towards healthy One Planet cities and communities:
      planetary health promotion at the local level, Health Promotion
      International, Volume 36, 2021 &minus; available
    </moleculesReferenceItem>
    <moleculesReferenceItem
      url="https://edition.cnn.com/2019/07/12/health/rich-people-climate-change-intl/index.html"
      name=" online"
      additional_info=", last accessed Jan 2024."
    >
      [6] Bailey, S.: How rich people could help save the planet from climate
      change, CNN, Jul. 12, 2019 &minus; available
    </moleculesReferenceItem>
    <moleculesReferenceItem
      url="https://natlib.govt.nz/blog/posts/nature-and-nurture-connecting-conservation-and-wellbeing"
      name=" online"
      additional_info=", last accessed Jan 2024."
    >
      [7] Williamson E. and Gaston N: Nature and nurture: Connecting
      conservation and wellbeing, National Library of New Zealand, 2020,
      available
    </moleculesReferenceItem>
  </organisimsReference>
</template>

<script setup lang="ts">
useFlowbite();
</script>
