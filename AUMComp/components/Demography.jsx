import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import React from 'react'

const ColumnChart = ({ data }) => {
    charts(FusionCharts);

    const dataSource = {
        chart: {
            showXAxisLine: "1",
            showYAxisLine: "1",
            xaxisname: "Age",
            yaxisname: "Average AUM",
            labelFontSize: "10",
            yAxisValueFontSize: "10",
            theme: "fusion",
            showValues: "0",
            bgColor: "#FFFFFF",
            showBorder: "0",
            showCanvasBorder: "0",
            showPlotBorder: "0",
            plotFillRatio: "100",
            showAlternateHGridColor: "0",
            divLineColor: "#cdd4cf",
            plottooltext: "<b>Value</b>{br}   <b>₹ $value</b>",
            "paletteColors": "#69b8f4"

        },
        data: [{
            label:"<18",
            "value": "70",
        },{
            label:"18-25",
            "value": "85",
        
        },{
            label:"25-35",
            "value": "48",
           
        },{
            label:"35-45",
            "value": "62",
          
        },{
            label:"45-55",
            "value": "42",
           
        },{
            label:"55-65",
            "value": "90",
           
        },{
            label:">65",
            "value": "75",
           
        }]
    };

    return (

        <ReactFusioncharts
            type="column2d"
            width={window.innerWidth <=390 ? "80%":"75%"}
            height="40%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );
}
export default ColumnChart;
