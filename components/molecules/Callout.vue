<template>
  <div
    class="flex flex-col justify-center items-start xl:gap-8 xl:py-8 lg:gap-6 lg:py-6 gap-4 py-4 border-y-2 border-black border-dashed"
  >
    <div class="w-4/5 pl-4">
      <atomsStatisticTextstyle>{{ statistic_value }}</atomsStatisticTextstyle>
    </div>
    <div class="w-4/5 pl-4">
      <atomsCallOutCopyTextstyle>
        <slot/>
      </atomsCallOutCopyTextstyle>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statistic_value: {
      type: String,
      required: true,
    },
  },
};
</script>