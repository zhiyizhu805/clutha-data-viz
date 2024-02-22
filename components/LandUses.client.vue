<template>
  <div>
    <h1>Forest Land Use Change 1990-2016</h1>
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

//LandUseChange_Forest_1990_2016
const csvData = [
  {
    type: 'Forest',
    startYear: 1990,
    endYear: 2016,
    grasslandWithWoodyBiomass: 17.98,
    productionGrassland: 212.97,
    cropland: 7.78,
    wetland: 54.21,
    builtUpArea: 9.82,
  },
];

const labels = ['Grassland with woody biomass', 'Production grassland', 'Cropland', 'Wetland', 'Built-up area'];
const values = Object.values(csvData[0]).slice(3);

const colors = ['#DD7E33', '#1AA881', '#F2E755', '#1A80BA', '#D186B0']; 

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
    texttemplate: "%{percent:.0%}",
    hoverinfo: "label+percent+value",
    hovertemplate: "<b>%{label}</b><br>%{percent:.0%}<br>Total: %{value} ha<extra></extra>",
    marker: { colors: colors },
    textfont: { size: 18, family: "Overused Grotesk, sans-serif", color: "#898989" },
  },
];

const layout = {
  title: "Forest Land Use Change 1990-2016",
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

