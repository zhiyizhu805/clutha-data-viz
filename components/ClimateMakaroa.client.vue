<template>
  <div>
    <h1>Average Monthly Rainfall: Makarora Station (1990-2005 vs. 2022)</h1>
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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const values1990_2005 = [190.71, 129.51, 191.48, 163.89, 199.11, 241.45, 170.84, 240.00, 237.39, 240.54, 200.38, 228.16];
const values2022 = [9.2, 343.7, 20.2, 161.8, 187.2, 341.9, 344.7, 420.7, 435.5, 153.2, 274.4, 120.9];

const data = [
  {
    x: months,
    y: values1990_2005,
    name: '1990-2005 average rainfall',
    type: 'bar',
    marker: { color: '#009E73' },
  },
  {
    x: months,
    y: values2022,
    name: '2022 Monthly rainfall',
    type: 'bar',
    marker: { color: '#80CFB9' },
  },
];

const layout = {
  autosize: true,
  margin: { l: 80, r: 40, t: 40, b: 0 },
  xaxis: {
    title: 'Month',
    tickfont: { size: 14 },
    showgrid: true, 
    gridcolor: '#d4d4d4',
  },
  yaxis: {
    title: 'Rainfall (mm)',
    titlefont: { size: 16 },
    tickfont: { size: 14 },
    dtick: 50,
    gridcolor: '#d4d4d4',
  },
  legend: {
    x: 0.5,
    y: -0.2, 
    xanchor: 'center',
    orientation: 'h', 
    font: { size: 12 },
    itemclick: false,
    itemdoubleclick: false
  },
  barmode: 'group',
  bargap: 0.15, 
  bargroupgap: 0.1,
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: '#F5F5F5',
};

const config = { responsive: true };

const barChart = reactive({
  data,
  layout,
  config,
});
</script>
