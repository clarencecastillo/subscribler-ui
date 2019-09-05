import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

const COLOR_REVENUE = 'rgb(238, 97, 54)';
const COLOR_REVENUE_BACKGROUND = 'rgba(238, 97, 54, 0.1)';
const COLOR_GRID_LINES = 'rgb(234, 236, 244)';
const COLOR_TOOLTIPS_BACKGROUND = 'rgb(255, 255, 255)';
const COLOR_TOOLTIPS_BORDER = '#dddfeb';
const COLOR_TOOLTIPS_TITLE = '#6e707e';
const COLOR_TOOLTIPS_BODY = '#858796';

@Component({
  selector: 'sbr-revenue-overview-chart',
  templateUrl: './revenue-overview-chart.component.html',
  styleUrls: ['./revenue-overview-chart.component.scss']
})
export class RevenueOverviewChartComponent implements OnInit {

  data: ChartDataSets[] = [{
    data: [4215, 4500, 4700, 4823, 4943, 5122, 5230, 5488, 5622, 5812, 5911, 5987],
    borderColor: COLOR_REVENUE,
    backgroundColor: COLOR_REVENUE,
    label: 'Revenue'
  }];

  labels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  options: ChartOptions = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 7000,
          maxTicksLimit: 5,
          padding: 10
        },
        gridLines: {
          color: COLOR_GRID_LINES,
          zeroLineColor: COLOR_GRID_LINES,
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: COLOR_TOOLTIPS_TITLE,
      titleFontSize: 14,
      backgroundColor: COLOR_TOOLTIPS_BACKGROUND,
      bodyFontColor: COLOR_TOOLTIPS_BODY,
      borderColor: COLOR_TOOLTIPS_BORDER,
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    }
  };

  showChart = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.showChart = true, 100);
  }

}
