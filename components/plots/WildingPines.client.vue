<template>
  <div>
    <nuxt-plotly
      :data="barChart.data"
      :layout="barChart.layout"
      :config="barChart.config"
      style="width: 100%; height: 100%;"
    ></nuxt-plotly>
  </div>
</template>

<script setup>
const years = [2020, 2021, 2022];
const daysOperating = [2, 26, 198];
const areaCovered = [0.14, 1141.07, 15079.85]; 

const data = [
  {
    name: 'Number of days control work was carried out',
    x: years,
    y: daysOperating,
    type: 'bar',
    yaxis: 'y',
    offsetgroup: 1,
    marker: { color: '#f59f00' },
  },
  {
    name: 'Area covered by control work (ha)',
    x: years,
    y: areaCovered,
    type: 'bar',
    yaxis: 'y2',
    offsetgroup: 2,
    marker: { color: '#339af0' },
  },
];

const layout = {
  autosize: true,
  margin: { l: 80, r: 80, t: 40, b: 80 },
  xaxis: { dtick: 1 },
  yaxis: {
    title: 'Days Operating',
    range: [0, 250],
    dtick: 50,
    showgrid: true,  
    gridcolor: 'white',
  },
  yaxis2: {
    title: 'Area Covered (ha)',
    overlaying: 'y',
    side: 'right',
    range: [0, 16000],
    dtick: 2000,
    showgrid: true,  
    gridcolor: '#e5e5e5',
  },
  legend: {
    x: 0.5,
    y: -0.2,
    xanchor: 'center',
    orientation: 'h',
    font: { size: 12 },
    itemclick: false,  
    itemdoubleclick: false,
  },
  barmode: 'group',
  bargap: 0.15, 
  bargroupgap: 0.1,
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: '#F5F5F5',
};

const config = { responsive: true ,
                 displayModeBar: false};

const barChart = {
  data,
  layout,
  config,
}
</script>
