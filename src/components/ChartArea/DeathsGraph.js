import React from 'react';
import ReactFC from "react-fusioncharts";

export default class DeathsGraph extends React.Component {
  render() {
    var confirmedDeathsData = this.props.data.map((d) => {
      return {
        label: d.date,
        value: d.deaths
      }
    })

    var chartConfigs = {
      type: "line", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          //Set the chart caption
          caption: "Covid-19 deaths in the US",
          //Set the chart subcaption
          subCaption: "Last 10 days",
          //Set the x-axis name
          xAxisName: "Date",
          //Set the y-axis name
          yAxisName: "Deaths",
          //Set the theme for your chart
          theme: "fusion"
        },
        data: confirmedDeathsData
      }
    }

    return (
      <ReactFC {...chartConfigs} />
    )
  }
}