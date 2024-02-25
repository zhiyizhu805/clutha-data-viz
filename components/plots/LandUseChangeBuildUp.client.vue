<template>
  <div>
    <h1>Built-Up Area Land Use Change 1990-2016</h1>
    <nuxt-plotly
      :data="pieChart.data"
      :layout="pieChart.layout"
      :config="pieChart.config"
      style="width: 100%; height: 100%;"
    ></nuxt-plotly>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const LandUseChange_BuildUp_1990_2016 = [
  {
    type: 'Built-up area',
    startYear: 1990,
    endYear: 2016,
    productionGrassland: 534.15,
    forest: 9.82,
    grasslandWithWoodyBiomass: 6.71,
  },
];

const labels = ['Production grassland', 'Forest', 'Grassland with woody biomass'];
const values = Object.values(LandUseChange_BuildUp_1990_2016[0]).slice(3);

const colors = ['#009E73', '#FFB44F', '#F0E442'];

const data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    labels: labels,
    values: values,
    type: "pie",
    hole: 0.7,
    rotation: -30,
    textinfo: "percent",
    textposition: "outside",
    insidetextorientation: "auto",
    hoverinfo: "label+percent+value",
    hovertemplate: "<b>%{label}</b><br>%{percent:.0%}<br>Total: %{value}<extra></extra>",
    marker: { colors: colors },
    textfont: { size: 18, family: "Overused Grotesk, sans-serif", color: "#898989" },
  },
];

const layout = {
  title: "Built-Up Area Land Use Change 1990-2016",
  autosize: true,
  margin: { l: 0, r: 0, t: 0, b: 0 },
  legend: {
    x: 0.5,
    y: -0.1,
    xanchor: "center",
    orientation: "h",
    font: { size: 12 },
  },
  plot_bgcolor: "rgba(0,0,0,0)",
  paper_bgcolor: "#F5F5F5",
};

const config = { responsive: true };

const pieChart = reactive({
  data: data,
  layout: layout,
  config: config,
});
</script>

