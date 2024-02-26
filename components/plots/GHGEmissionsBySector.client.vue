<template>
  <div>
    <nuxt-plotly
      :data="chartData"
      :layout="chartLayout"
      style="width:100%; height:100%;"
    ></nuxt-plotly>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const chartData = ref([
      {
        x: [-69525.71, -69525.71, -69525.71], // Forestry 
        y: ['2020', '2021', '2022'],
        name: 'Forestry',
        type: 'bar',
        orientation: 'h',
        marker: { color: '#1AA881' }
      },
      {
        x: [66782, 72495, 69073], // Transport
        y: ['2020', '2021', '2022'],
        name: 'Transport',
        type: 'bar',
        orientation: 'h',
        marker: { color: '#4DBB9D' }
      },
      {
        x: [12132.26, 12387.92, 13397.24], // Energy
        y: ['2020', '2021', '2022'],
        name: 'Energy',
        type: 'bar',
        orientation: 'h',
        marker: { color: '#80CFB9' }
      },
      {
        x: [127788.51, 132608.48, 137428.44], // Agriculture
        y: ['2020', '2021', '2022'],
        name: 'Agriculture',
        type: 'bar',
        orientation: 'h',
        marker: { color: '#B3E2D5' }
      }
    ]);

    const chartLayout = ref({
      barmode: 'relative',
      margin: { l: 100, r: 100, t: 20, b: 70 },
      legend: { orientation: 'h', y: -0.2 },
      xaxis: {
          title: 'GHG Emissions (tCO2e)',
          automargin: true,
          showgrid: true, 
          gridcolor: '#b6b6b6',
          tickvals: [-100000, -50000, 0, 50000, 100000, 150000, 200000,250000],
          range: [-100000, 250000]
      },
      yaxis: {
          automargin: true,
          showgrid: true, 
          gridcolor: '#b6b6b6',
          tickmode: 'array',
          tickvals: ['2020', '2021', '2022']
      },
      plot_bgcolor: '#F5F5F5',
      paper_bgcolor: '#F5F5F5',
      shapes: [
        {
          type: 'rect',
          xref: 'paper',
          yref: 'paper',
          x0: 0,
          y0: 0,
          x1: 1,
          y1: 1,
          line: {
            color: '#b6b6b6',
            width: 1,
          },
        },
      ],
    });

    return { chartData, chartLayout };
  }
};
</script>
