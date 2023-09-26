import React, { useState } from "react";
import InfoCard from "./components/InfoCard";
import Investor from "./components/Investor";
import AssetChart from "./components/assetChart";
import Scheme from "./components/Scheme";
import PlanMode from "./components/PlanMode";
import Terflag from "./components/Terflag";
import MapChart from "./components/MapChart";
import Demography from "./components/Demography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AumTrend from "./components/aumtrend";
import Dis_Table from "./components/Dis_Table";
import Menu_Top from "./components/Menu_Top";
import "../SIPBookComp/components/style/style.css"
import "./styles/style.css";
import AssetClass from "./components/assetChart";
import CityCategories from "./components/citycategories";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { barChartData } from './Database';
import { BarChart } from "@mui/icons-material";


const AumDashBoard = () => {
  const data = [
    {
      heading: "Total AUM",
      value: "₹23626.206 Cr",
      description: "Total AUM month June.....",
      desc1: "Total AUM month June 23 is ₹287 Cr.",
      desc2: "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
      desc3:
        "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year.",
    },
    {
      heading: "Total PAN/ Investors",
      value: "11,18,177",
      description: "Total AUM month June.....",
      desc1: "Total AUM month June 23 is ₹287 Cr.",
      desc2: "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
      desc3:
        "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year.",
    },
    {
      heading: "Total Folio Count",
      value: "14,09,302",
      description: "Total AUM month June.....",
      desc1: "Total AUM month June 23 is ₹287 Cr.",
      desc2: "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
      desc3:
        "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year.",
    },
    {
      heading: "Distributor Count",
      value: "16,676",
      description: "Total AUM month June.....",
      desc1: "Total AUM month June 23 is ₹287 Cr.",
      desc2: "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
      desc3:
        "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year.",
    },
  ];
  return (
    <>
          <div className='main_container'> 
          {/* have to make one component */}
        <Grid container spacing={0} sx={{backgroundColor: "white",margin:{sm:"0 0rem",xs:"0 1rem"},
padding: "0.5rem",fontFamily: "Roboto, sans-serif",borderRadius: "0.5rem",boxShadow:" 0px 0px 5px 0px rgba(0, 0, 0, 0.26)"}} >
          <Grid item xs={12} lg={3} md={3} sm={12}>
          <InfoCard data={data[0]} />
          </Grid>
          <Grid item xs={12} lg={3} md={3} sm={12}>
          <InfoCard data={data[1]} />
          </Grid>
          <Grid item xs={12} lg={3} md={3} sm={12}>
          <InfoCard data={data[2]} />
          </Grid>
          <Grid item xs={12} lg={3} md={3} sm={12}>
          <InfoCard data={data[3]} />
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "10px",
          margin: " 20px 5px",
          borderRadius:"10px",
          width: "98%",
        }}
        className="box_shadow"
      >
        <Investor /> 
      </div>

      {/* AssteClass Components */}
      <div
        style={{
          background: "#fff",
          padding: "10px",
          margin: " 20px 5px",
          borderRadius:"10px",
          width:"98%",
        }}
        className="box_shadow"
      >
        <AssetClass />
      </div>

      <Grid container sx={{ display: 'flex', marginBottom: 1 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{ bgcolor: 'white', borderRadius: 4, margin: 3, padding: 1, boxShadow: "1px 3px 19px -4px rgba(0,0,0,0.25)" }}>
                <p style={{ marginInline: 16, marginBlock: 6, fontWeight: 'bold' }}>Scheme Name</p><hr />
                <BarChart data={barChartData[3]}/>
              </Box>
            </Grid>
          </Grid>

      {/* SchemeDetails Components */}
      {/* <Scheme /> */}

      {/* Distributor Categories */}


      <Grid container spacing={2} sx={{ marginTop: "20px", }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius:"10px",
            }}
            className="box_shadow"
          >
            <PlanMode />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              background: "#fff",
              padding: "10px",
              borderRadius:"10px",
            }}
            className="box_shadow"
          >
            <Terflag/>

          </div>
        </Grid>

      </Grid>


      {/* CityCategories Components */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
        }}
        className="box_shadow"
      >
        <CityCategories />
      </div>

      {/* AUM Trend Graph */}

      <div
        style={{
          background: "#fff",
          padding: "10px",
          marginTop: "30px"
        }}
        className="box_shadow"
      >
        <AumTrend />
      </div>


      {/* Distributor Details */}
      {/* <div className="investor_category">
        <div className="demography_top">
          <p>Distributor Details</p>
          <Menu_Top />
        </div>
        <hr />
        <div className="dis_table">
          <Dis_Table />
        </div>
      </div> */}
    </>
  );
};

export default AumDashBoard;
