<template>
  <div>
    <nuxt-plotly
      :data="combinedChart.data"
      :layout="combinedChart.layout"
      :config="combinedChart.config"
      style="width: 100%; height: 100%;"
    ></nuxt-plotly>
  </div>
</template>

<script setup>
const years = [2020, 2021, 2022];
const trapsCaught = [3443, 3946, 4801];
const pestsCaught = [5501, 4682, 7042];
const catchRate = [1.60, 1.19, 1.47];

const data = [
  {
    x: years,
    y: trapsCaught,
    name: 'Number of Active Traps',
    type: 'bar',
    marker: { color: '#009E73' },
  },
  {
    x: years,
    y: pestsCaught,
    name: 'Pests Caught',
    type: 'bar',
    marker: { color: '#80CFB9' },
  },
  {
    x: years,
    y: catchRate,
    name: 'Catch Rate',
    type: 'scatter',
    mode: 'lines+markers',
    line: { color: '#FFB44F' },
    yaxis: 'y2',
  },
];

const layout = {
  autosize: true,
  margin: { l: 70, r: 70, t: 40, b: 80 },
  xaxis: {
    title: 'Year',
    tickfont: { size: 14 },
    showgrid: true,
    gridcolor: '#dee2e6',
    dtick: 1,
  },
  yaxis: {
    title: 'Number of traps or pests caught (#)',
    titlefont: { size: 14 },
    tickfont: { size: 12 },
    range: [0, 8000],
    dtick: 1000,
    tickformat: '.0s', 
    gridcolor: '#dee2e6',
  },
  yaxis2: {
    title: 'Average catch rate (catches/trap/year)',
    titlefont: { size: 14 },
    tickfont: { size: 12 },
    range: [0, 1.8],
    tickmode: 'linear',
    tick0: 0,
    dtick: 0.2,
    overlaying: 'y',
    side: 'right',
  },
  legend: {
    x: 0.5,
    y: -0.3,
    xanchor: 'center',
    orientation: 'h',
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255, 0)',
    font: { size: 12 },
  },
  barmode: 'group',
  bargap: 0.15,
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: '#F5F5F5',
};

const config = { responsive: true ,
                 displayModeBar: false};
const combinedChart = {
  data,
  layout,
  config,
}
</script>
