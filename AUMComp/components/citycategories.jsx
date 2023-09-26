import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { Grid } from '@mui/material';
import Donut from '../../../newCharts/charts/Donut';
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);


const data = [
  {
    label: "B30",
    value: "1000",
   
  },
  {
    label: "T30",
    value: "500",
   
  }  
]
// const dataSource = {
//   chart: {
//     theme: "candy",
//     use3DLighting:false,
//     showShadow: false,
//     doughnutRadius: window.innerWidth <=390 ? 40:70,
//     pieRadius:window.innerWidth <=390 ? 60:100,
//     showLegend :1,
//     bgcolor:"#ffffff",
//     "showborder": "0",
//     "legendPosition": window.innerWidth <=390 ? "bottom":"right-bottom",
//     legendBorderColor :"#ffffff",
//     "chartLeftMargin": window.innerWidth <=390 ? "0":"100",
//     "chartTopMargin": "0",
//     "chartRightMargin": "0",
//     "chartBottomMargin": window.innerWidth <=390 ? "0":"20",
//     "drawCustomLegendIcon": "1",
//     "legendIconSides": "4",
//     "legendIconStartAngle": "45"
//   },
 
//   ]
// };

const CityCategories=()=>
   {
    return (
      <>
      <p>City Categories </p> <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} >
          <Donut data={data} />
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <div className="description_main_card_container">
            <div className="description_card_container">
              <ul className="description_card_list_container">
                <li>Direct SIP book from (March 23 ) to 172 Cr SIP book.</li>
                <li>
                  Regular SIP book has grown from (March 23) to 99 Cr SIP book.
                </li>
                <li>Contribution of direct SIP Book has grown up by 2.7%.</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>      
      </>
    );
  }


export default CityCategories