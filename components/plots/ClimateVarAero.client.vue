<template>
  <div>
    <nuxt-plotly
      :data="chartData"
      :layout="chartLayout"
      :config="config"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import Plotly from "plotly.js-dist-min";

export default {
  setup() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const averageRainfall = [
      58.66, 38.85, 35.57, 30.14, 59.09, 65.69, 32.67, 41.69, 53.67, 47.51,
      37.97, 57.09,
    ];
    const rainfall2022 = [
      13.8, 104.6, 12.4, 35.8, 38, 116.4, 106.6, 123.8, 20.2, 38.2, 74.8, 47.6,
    ];

    const averageTemp = [
      17.04, 16.96, 14.56, 11.02, 7.49, 4.29, 3.71, 5.89, 8.61, 10.42, 13.14,
      15.76,
    ];
    const temp2022 = [
      19.1, 16.9, 16.9, 11.9, 9.1, 5.3, 3.8, 7, 8.8, 10.9, 14.4, 16.7,
    ];

    const chartData = ref([
      {
        x: months,
        y: averageRainfall,
        name: "2000-2013 Avg Rainfall",
        type: "bar",
        marker: { color: "#009E73" },
      },
      {
        x: months,
        y: rainfall2022,
        name: "2022 Rainfall",
        type: "bar",
        marker: { color: "#80CFB9" },
      },
      {
        x: months,
        y: averageTemp,
        name: "2000-2013 Avg Temp",
        type: "scatter",
        mode: "lines+markers",
        yaxis: "y2",
        line: { color: "#009E73" },
      },
      {
        x: months,
        y: temp2022,
        name: "2022 Temp",
        type: "scatter",
        mode: "lines+markers",
        yaxis: "y2",
        line: { color: "#80CFB9" },
      },
    ]);

    const chartLayout = ref({
      barmode: "group",
      legend: { orientation: "h", x: 0.5, xanchor: "center", y: -0.2 },
      yaxis: { title: "Rainfall (mm)" },
      yaxis2: {
        title: "Temperature (°C)",
        overlaying: "y",
        side: "right",
      },
      margin: { l: 80, r: 80, t: 50, b: 50 },
      plot_bgcolor: "rgba(0,0,0,0)",
      paper_bgcolor: "#F5F5F5",
    });
     const config = { responsive: true };

    return { chartData, chartLayout, config};
  },
};
</script>
