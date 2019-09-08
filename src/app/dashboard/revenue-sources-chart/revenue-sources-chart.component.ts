import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

const COLOR_PIE_1 = '#8E54E9';
const COLOR_PIE_2 = '#4776E6';
const COLOR_PIE_3 = '#60E1E0';
const COLOR_HOVER_BORDER_COLOR = 'rgb(234, 236, 244)';
const COLOR_TOOLTIPS_BACKGROUND = 'rgb(255, 255, 255)';
const COLOR_TOOLTIPS_BORDER = '#dddfeb';
const COLOR_TOOLTIPS_BODY = '#858796';

@Component({
  selector: 'sbr-revenue-sources-chart',
  templateUrl: './revenue-sources-chart.component.html',
  styleUrls: ['./revenue-sources-chart.component.scss']
})
export class RevenueSourcesChartComponent implements OnInit {

  legendIcon = faCircle;

  data: ChartDataSets[] = [
    {
      data: [55, 30, 15],
      backgroundColor: [COLOR_PIE_1, COLOR_PIE_2, COLOR_PIE_3],
      hoverBorderColor: COLOR_HOVER_BORDER_COLOR
    }
  ];

  labels: Label[] = ['Package A', 'Package B', 'Package C'];

  options: ChartOptions = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: COLOR_TOOLTIPS_BACKGROUND,
      bodyFontColor: COLOR_TOOLTIPS_BODY,
      borderColor: COLOR_TOOLTIPS_BORDER,
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80
  };

  showChart = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.showChart = true);
  }

}
