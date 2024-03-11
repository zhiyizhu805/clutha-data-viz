<template>
  <!-- The story section -->
  <organismsBaseContainerFullWidth gap="md:gap-7 gap-4">
    <organismsHeadline> The Story </organismsHeadline>

    <atomsBodyTextstyle>
      Welcome to the Upper Clutha Catchment Health Project, an initiative deeply
      rooted in the principles of Te Taiao – a profound connection to and
      reverence for the natural world (Figure below). Our project serves as a
      catalyst for community engagement, uniting diverse stakeholders – from
      residents and iwi to landowners and tourism operators – in a collective
      effort to revitalise Te Taiao.
    </atomsBodyTextstyle>
  </organismsBaseContainerFullWidth>

  <organismsBaseArticleContainerTertiary>
    <template #left>
      <organismsGraphFrame
        graph_title="The concept of Te Taiao and its four interconnected components"
        flyout_id="flyout_Illustration_TeTaiao"
        graph_container="graph_container_extrasmall"
      >
        <template #flyout>
          <organismsFlyout flyout_id="flyout_Illustration_TeTaiao">
          </organismsFlyout>
        </template>
        <template #graph>
          <img
            width="100%"
            height="100%"
            src="/assets/images/graphs/Illustration_TeTaiao.png"
            alt="The concept of Te Taiao and its four interconnected components"
            title="The concept of Te Taiao and its four interconnected components"
          />
        </template>
      </organismsGraphFrame>
      <atomsBodyTextstyle>
        At the heart of our endeavour lies a comprehensive monitoring framework,
        crafted to encapsulate the essence of Te Taiao and to foster a holistic
        understanding of catchment health.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        The monitoring framework is comprised of a selection of indicators that
        reflect the health of our land, water, biodiversity, livelihoods, and
        culture within the catchment, all interconnected within Te Taiao. These
        indicators not only provide valuable insights but also instil a sense of
        ownership and pride within our community for the stewardship of our
        catchment.
      </atomsBodyTextstyle>
    </template>
    <template #right>
      <atomsBodyTextstyle>
        The monitoring framework is comprised of a selection of indicators that
        reflect the health of our land, water, biodiversity, livelihoods, and
        culture within the catchment, all interconnected within Te Taiao. These
        indicators not only provide valuable insights but also instil a sense of
        ownership and pride within our community for the stewardship of our
        catchment.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        By rooting our monitoring framework indicators with direct community
        values, pressures, and actions that were identified in the
        <atomsReferenceTextstyle
          url="https://waiwanaka.nz/projects/community-catchment-plan/"
          >Upper Clutha Community Catchment Plan</atomsReferenceTextstyle
        >, our framework embodies a collaborative effort involving the entire
        catchment community, including residents from rural and urban areas, as
        well as visitors to our region. Through ongoing monitoring and
        reporting, we aim to showcase the myriad of local initiatives dedicated
        to preserving and enhancing our catchment's health as well as guide
        future environmental investments.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        The monitoring framework aims to connect the Upper Clutha community to
        Te Taiao through understanding the state of our catchment health and the
        interacting indicators that contribute such. We recognise that true
        health in our catchment transcends mere ecological balance; it
        encompasses a sustainable coexistence between human activities and
        endeavours, and the natural environment. Through our monitoring
        framework, we aim to assess and nurture this delicate equilibrium,
        guided by the ethos of respect and care for our surroundings.
      </atomsBodyTextstyle>
      <atomsBodyTextstyle>
        As a central repository for data collection and reporting, our
        monitoring framework fosters collaboration among various organisations
        across the catchment, ensuring a unified approach towards environmental
        stewardship. It serves as the cornerstone for our annual "State of
        Catchment Health" assessments, providing a concise overview of key
        findings as presented on this website.
      </atomsBodyTextstyle>
    </template>
  </organismsBaseArticleContainerTertiary>

  <atomsDivider divider_width="border-b-2" />

  <!-- Join us section -->
  <organismsBaseContainerFullWidth gap="md:gap-7 gap-4">
    <atomsSubhead01Textstyle>
      Join Us in Building a Healthier Catchment!
    </atomsSubhead01Textstyle>
    <atomsBodyTextstyle>
      By partnering with us, you'll not only contribute to the preservation of
      our natural resources but also strengthen your organisation's commitment
      to sustainability and community engagement. Together, we can make a
      lasting impact on the health and vitality of the Upper Clutha Catchment.
      We look forward to welcoming you as a valued partner in this important
      endeavour.
    </atomsBodyTextstyle>
    <atomsBodyTextstyle>
      <atomsButtonBlack>
        <nuxt-link to="/supporter">Become a supporter</nuxt-link>
      </atomsButtonBlack>
    </atomsBodyTextstyle>

    <atomsBodyTextstyle>
      Want to find more information on how to become a partner?

      <atomsReferenceTextstyle url="mailto:getinvolved@waiwanaka.nz"
        >contact us</atomsReferenceTextstyle
      >
    </atomsBodyTextstyle>
  </organismsBaseContainerFullWidth>
</template>

<script setup lang="ts">
useFlowbite();
</script>
