import React, { useContext } from "react";
import { Card } from "./Card";
import { ThemeContext } from "./Dashboard";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartData } from "./Data";

import { darkGrey, lightGrey } from "./GlobalStyle";

function getOptions(dark) {
  return {
    chart: {
      height: "360px",
      type: "column",

      backgroundColor: dark ? darkGrey : "white",

      style: {
        fontFamily: "Blinker, sans-serif",
      },
    },
    title: {
      text: "Revenue by Product",
      style: { 
          color: dark ? lightGrey : 'black',
      }
    },
    xAxis: {

        labels: {
            style: {
                color: dark ? lightGrey : 'black',
              }
        },

      categories: [
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
      ],


    
    },
    yAxis: {

        girdLineColor: dark ? 'grey' : lightGrey,
        labels: {
            style: {
                color: dark ? lightGrey : 'black',
              }
        },
      min: 0,
      reversedStacks: false,
      title: {
        style: {
            color: dark ? lightGrey : 'black',
            fontSize: 20,
          },
        text: "Millions of Dollars",

      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: "bold",
          color:
            // theme
            (Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            "gray",
        },
      },
    },
    legend: {

     itemStyle: {
        color: dark ? lightGrey : 'black',
     },
     
    },
    tooltip: {
     pointFormat:
     '<span style="color:{series.color}"> {series.name} </span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
     shared: true,
     backgroundColor: dark ? darkGrey : "white",
      style: {
        color: dark ? lightGrey : 'black',
        
    
      },
    },
    plotOptions: {
      series: {
        borderWidth: "0",
      },
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: ChartData,
  };
}

export function Chart() {
  const [theme, setTheme] = useContext(ThemeContext);

  const dark = theme === "dark";

  return (
    <Card height={400} dark={dark}>
      <HighchartsReact highcharts={Highcharts} options={getOptions(dark)} />
    </Card>
  );
}
