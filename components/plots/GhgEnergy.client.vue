<template>
  <div>
    <nuxt-plotly
      :data="pieChart.data"
      :layout="pieChart.layout"
      :config="pieChart.config"
      style="width: 100%; height: 100%;"
    ></nuxt-plotly>
  </div>
</template>

<script setup>
const energyConsumptionData = [
  { substation: "Cardrona", kWh: "1,565,870", percent: "2%" },
  { substation: "Camp Hill", kWh: "14,653,252", percent: "14%" },
  { substation: "Queensberry", kWh: "6,614,956", percent: "6%" },
  { substation: "Wānaka", kWh: "79,434,936", percent: "78%" },
];

const labels = energyConsumptionData.map(data => data.substation);
const values = energyConsumptionData.map(data => parseFloat(data.kWh.replace(/,/g, '')));

const colors = ['#F0E442', '#009E73', '#FFB44F', '#56B4E9'];

const data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    labels,
    values,
    type: "pie",
    hole: .70,
    rotation: -90,
    textinfo: "percent",
    textposition: "outside",
    insidetextorientation: "auto",
    hoverinfo: "label+percent",
    hovertemplate: "<b>%{label}</b><br>%{percent:.0%}<br>Total: %{value} kWh<extra></extra>",
    marker: { colors },
    textfont: { size: 15, family: "Overused Grotesk, sans-serif", color: "#898989" },
  },
];

const layout = {
  autosize: true,
  margin: { l: 0, r: 0, t: 0, b: 0 },
  legend: {
    x: 0.5,
    y: -0.1,
    xanchor: "center",
    orientation: "h",
    font: { size: 11 },
  },
  plot_bgcolor: "rgba(0,0,0,0)",
  paper_bgcolor: "#F5F5F5",
};

const config = { responsive: true };

const pieChart = {
  data,
  layout,
  config,
}
</script>
