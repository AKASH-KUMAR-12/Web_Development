import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import { Grid } from '@mui/material';
import Donut from '../../../newCharts/charts/Donut';
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);


const data = [
  {
    label: "Hybrid",
    value: "1000",
   
  },
  {
    label: "Debt",
    value: "500",
  
  },
  {
      label:"Equity",
      value: "400",
  
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

const AssetClass=()=>
   {
    return (
      <>
    <Grid item xs={12} md={12}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "10px",marginBottom:"10px" }}
        >
          {" "}
          <p>Asset Class</p>
        </div>
        <div>
        </div>
      </div>
       </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} >
          <Donut data={data} />
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <div className="description_main_card_container">
          <div className="vl"></div>
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


export default AssetClass