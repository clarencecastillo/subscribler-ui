import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

const COLOR_SUBSCRIBERS = 'rgb(238, 97, 54)';
const COLOR_SUBSCRIBERS_BACKGROUND = 'rgba(238, 97, 54, 0.1)';
const COLOR_SUBSCRIPTIONS = 'rgb(242, 166, 44)';
const COLOR_SUBSCRIPTIONS_BACKGROUND = 'rgb(242, 166, 44, 0.05)';
const COLOR_GRID_LINES = 'rgb(234, 236, 244)';
const COLOR_TOOLTIPS_BACKGROUND = 'rgb(255, 255, 255)';
const COLOR_TOOLTIPS_BORDER = '#dddfeb';
const COLOR_TOOLTIPS_TITLE = '#6e707e';
const COLOR_TOOLTIPS_BODY = '#858796';

@Component({
  selector: 'sbr-subscriptions-overview-chart',
  templateUrl: './subscriptions-overview-chart.component.html',
  styleUrls: ['./subscriptions-overview-chart.component.scss']
})
export class SubscriptionsOverviewChartComponent implements OnInit {

  data: ChartDataSets[] = [
    {
      data: [25, 39, 50, 62, 78, 93, 129, 146, 178, 213, 256, 288],
      label: 'Subscribers',
      lineTension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 3,
      pointHitRadius: 10,
      pointBorderWidth: 2,
      pointBorderColor: COLOR_SUBSCRIBERS,
      pointHoverBorderColor: COLOR_SUBSCRIBERS,
      pointHoverBackgroundColor: COLOR_SUBSCRIBERS,
      pointBackgroundColor: COLOR_SUBSCRIBERS,
      borderColor: COLOR_SUBSCRIBERS,
      backgroundColor: COLOR_SUBSCRIBERS_BACKGROUND
    },
    {
      data: [25, 42, 54, 65, 84, 98, 138, 153, 189, 234, 274, 302],
      label: 'Package Subscriptions',
      lineTension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 3,
      pointHitRadius: 10,
      pointBorderWidth: 2,
      pointBorderColor: COLOR_SUBSCRIPTIONS,
      pointHoverBorderColor: COLOR_SUBSCRIPTIONS,
      pointHoverBackgroundColor: COLOR_SUBSCRIPTIONS,
      pointBackgroundColor: COLOR_SUBSCRIPTIONS,
      borderColor: COLOR_SUBSCRIPTIONS,
      backgroundColor: COLOR_SUBSCRIPTIONS_BACKGROUND
    }
  ];

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
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
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
      backgroundColor: COLOR_TOOLTIPS_BACKGROUND,
      bodyFontColor: COLOR_TOOLTIPS_BODY,
      titleFontColor: COLOR_TOOLTIPS_TITLE,
      borderColor: COLOR_TOOLTIPS_BORDER,
      titleMarginBottom: 10,
      titleFontSize: 14,
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
