import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import CasesGraph from './CasesGraph';
import DeathsGraph from './DeathsGraph';

ReactFC.fcRoot(FusionCharts, Column2D, Line2D, FusionTheme);

export default class ChartArea extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      data: [],
      chartType: 'cases'
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        var last10DaysData = data["US"].slice(-10)
        this.setState({
          data: last10DaysData,
          isLoading: false
        })
      });
  }

  selectChart(chartType) {
    this.setState({chartType: chartType})
  }

  render() {
    let chart

    if (this.state.chartType === 'cases') {
      chart = <CasesGraph data={this.state.data} />
    } else {
      chart = <DeathsGraph data={this.state.data} />
    }

    return (
      <div className='chart-area'>
        <div className='buttons'>
          <button onClick={() => this.selectChart('cases')}>Cases</button>
          <button onClick={() => this.selectChart('death')}>Deaths</button>
        </div>
        <hr />
        <div className="chart">
          {this.state.isLoading ? <p>Loading...</p> : chart}
        </div>
      </div>
    )
  }
}