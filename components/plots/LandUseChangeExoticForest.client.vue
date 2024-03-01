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
const csvData = [
  {
    type: 'Exotic forest',
    startYear: 2008,
    endYear: 2018,
    productionGrassland: 51.92,
    fernland: 18.15,
    manukaAndOrKanuka: 1,
  },
];

const labels = ['Production grassland', 'Fernland', 'Manuka and/or Kanuka'];
const values = [51.92, 18.15, 1];

const colors = ['#009E73', '#FFB44F', '#CC79A7']; 

const data0 = [
  {
    domain: { x: [0, 1], y: [0, 1] },
    labels: labels,
    values: values,
    type: "pie",
    hole: 0.7,
    rotation: -50,
    textinfo: "percent",
    textposition: "outside",
    insidetextorientation: "auto",
    texttemplate: '%{percent:.0%}',
    hoverinfo: 'label+percent+value',
    hovertemplate: '<b>%{label}</b><br>%{percent:.0%}<br>Total: %{value}<extra></extra>',
    marker: { colors: colors },
    textfont: { size: 18, family: "Overused Grotesk, sans-serif", color: "#898989" },
  },
];

const layout0 = {
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

const config0 = { responsive: true };

const pieChart = {
  data: data0,
  layout: layout0,
  config: config0,
}
</script>
