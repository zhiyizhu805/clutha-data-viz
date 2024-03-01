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
const GHG_Emissions_Agri_2002 = {
  Fertiliser: 2465.32,
  Sheep: 48984.06,
  Pigs: 1.91,
  BeefCattle: 30068.04,
  DairyCattle: 30305.88,
  Deer: 25603.23,
};

const labels = Object.keys(GHG_Emissions_Agri_2002);
const values = Object.values(GHG_Emissions_Agri_2002);

const colors = ['#F0E442', '#56B4E9', '#1A80BA', '#009E73', '#FFB44F', '#CC79A7'];

const data = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    labels: labels,
    values: values,
    type: "pie",
    hole: 0.7,
    rotation: 5,
    textinfo: "percent",
    textposition: "outside",
    insidetextorientation: "auto",
    hoverinfo: "label+percent",
    hovertemplate: "<b>%{label}</b><br>%{percent:.0%}<br>Total: %{value}<extra></extra>",
    marker: { colors: colors },
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
    font: { size: 12 },
  },
  plot_bgcolor: "rgba(0,0,0,0)",
  paper_bgcolor: "#F5F5F5",
};

const config = { responsive: true };

const pieChart = {
  data: data,
  layout: layout,
  config: config,
}
</script>
