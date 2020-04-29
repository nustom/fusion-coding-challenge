import React from 'react';
import ReactFC from "react-fusioncharts";

export default class CasesGraph extends React.Component {
  render() {
    var confirmedCasesData = this.props.data.map((d) => {
      return {
        label: d.date,
        value: d.confirmed
      }
    })

    var chartConfigs = {
      type: "column2d", // The chart type
      width: "100%", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        // Chart Configuration
        chart: {
          //Set the chart caption
          caption: "Confirmed Covid-19 cases in the US",
          //Set the chart subcaption
          subCaption: "Last 10 days",
          //Set the x-axis name
          xAxisName: "Date",
          //Set the y-axis name
          yAxisName: "Cases",
          //Set the theme for your chart
          theme: "fusion"
        },
        data: confirmedCasesData
      }
    }

    console.log(chartConfigs)

    return (
      <ReactFC {...chartConfigs} />
    )
  }
}