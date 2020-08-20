import React from 'react';
import {Card} from "./Card";

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
        height: '360px',
      type: 'column',
      style: {
        fontFamily: 'Blinker, sans-serif',
      }
  },
  title: {
      text: 'Revenue by Product'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
      min: 0,
      reversedStacks: false,
      title: {
          text: 'Millions of Dollars'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: ( // theme
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || 'gray'
          }
      }
  },
  legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      series: {
        borderWidth: '0',
      },
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: false
          }
      }
  },
  series: [{
      name: 'Xanax',
      data: [5, 3, 4, 7, 2],
      color: '#008f70'
  }, {
      name: 'Oxycontin',
      data: [2, 2, 3, 2, 1],

      color: '#00CCA0'
  }, 
  {
    name: 'Valium',
    data: [3, 4, 4, 2, 5],
    color: '#0AFFCA'
},

{
    name: 'Zopoclone',
    data: [3, 4, 4, 2, 5],
    color: '#47FFD7'
},

]
};






export function Chart() {

    return( <Card height={400}> 
    
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
    
     </Card>

    );

}