<template>
  <div>
    <h1>Predator Types in 2022</h1>
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

const predatorData2022 = [
  { predator: "Rabbit", count: 232 },
  { predator: "Ferret", count: 155 },
  { predator: "Other", count: 245 },
  { predator: "Hedgehog", count: 717 },
  { predator: "Mouse", count: 585 },
  { predator: "Possum", count: 623 },
  { predator: "Rat", count: 2066 },
  { predator: "Stoat", count: 541 },
];

const labels = predatorData2022.map(data => data.predator);
const values = predatorData2022.map(data => data.count);

const colors = [
  '#0072B2', // Rabbit
  '#CC79A7', // Ferret
  '#F0E442', // Other
  '#009E73', // Hedgehog
  '#D55E00', // Mouse
  '#56B4E9', // Possum
  '#B3E2D5', // Rat
  '#FFB44F', // Stoat
];

const data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    labels,
    values,
    type: "pie",
    hole: .70,
    rotation: -50,
    textinfo: "percent",
    textposition: "outside",
    insidetextorientation: "auto",
    hoverinfo: "label+percent",
    hovertemplate: "<b>%{label}</b><br>%{percent:.0%}<br>Total: %{value}<extra></extra>",
    marker: { colors },
    textfont: { size: 18, family: "Overused Grotesk, sans-serif", color: "#898989" },
  },
];

const layout = {
  autosize: true,
  margin: { l: 0, r: 0, t: 0, b: 0 },
  legend: {
    x: 0.5,
    y: -0.15,
    xanchor: "center",
    yanchor: "top",
    orientation: "h",
    font: { size: 12 },
    itemclick: false,
    itemdoubleclick: false
  },
  plot_bgcolor: "rgba(0,0,0,0)",
  paper_bgcolor: "#F5F5F5",
};

const config = { responsive: true };

const pieChart = reactive({
  data,
  layout,
  config,
});
</script>


