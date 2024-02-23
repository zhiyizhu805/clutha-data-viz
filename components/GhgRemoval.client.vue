<template>
  <div>
    <h1>GHG Emissions and Removals in Forestry</h1>
    <nuxt-plotly
      :data="barChart.data"
      :layout="barChart.layout"
      :config="barChart.config"
      style="width: 100%; height: 100%;"
    ></nuxt-plotly>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Data preparation
const years = ['2008', '2012', '2016'];
const sequestration = [-74842.11, -74543.11, -79003.55];
const emissions = [8688.65, 5748.80, 9477.84];

// Transform data to match Plotly structure
const data = [
  {
    x: years,
    y: sequestration,
    name: 'Total sequestration (removal (tCO2e/yr))',
    type: 'bar',
    marker: { color: '#1AA881' },
  },
  {
    x: years,
    y: emissions,
    name: 'Total emissions (from harvest (tCO2e/yr))',
    type: 'bar',
    marker: { color: '#FFB44F' },
  },
];

const layout = {
  autosize: true,
  margin: { l: 80, r: 40, t: 20, b: 80 },
  legend: {
    x: 0.5,
    y: -0.3,
    xanchor: 'center',
    yanchor: 'top',
    orientation: 'h',
    font: { size: 12, family: "Overused Grotesk, sans-serif", color: '#898989' },
    itemclick: false,
    itemdoubleclick: false,
  },
  barmode: 'relative',
  plot_bgcolor: '#F5F5F5',
  paper_bgcolor: '#F5F5F5',
  xaxis: {
    title: 'Year',
    showline: true,
    linewidth: 1,
    linecolor: '#b6b6b6',
    showgrid: false,
  },
  yaxis: {
    title: 'Amount (tCO2e/yr)',
    showline: true,
    linewidth: 1,
    linecolor: '#b6b6b6',
    showgrid: true,
    gridcolor: '#b6b6b6',
  },
};

const config = { responsive: true };

const barChart = reactive({
  data,
  layout,
  config,
});
</script>
