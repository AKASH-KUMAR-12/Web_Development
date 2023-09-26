import React from "react";
import { Grid } from "@mui/material";
import BarChart from "../../../newCharts/charts/BarChart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../SIPBookComp/components/style/style.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import LineChart from "../../../newCharts/charts/LineChart";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const AumTrend = () => {
  let SipCount = [];


  const [value, setValue] = React.useState("AUM");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const data =  [
    {
      label: "JAN",
      value: "15"
    },
    {
      label: "FEB",
      value: "22"
    },
    {
      label: "MAR",
      value: "40"
    },
    {
      label: "APR",
      value: "30"
    },
    {
      label: "MAY",
      value: "44"
    },
    {
      label: "JUN",
      value: "40"
    },
    {
      label: "JULY",
      value: "55"
    },
    {
      label: "AUG",
      value: "60"
    },
    {
      label: "SEP",
      value: "70"
    },
    {
      label: "OCT",
      value: "75"
    },
    {
      label: "NOV",
      value: "78"
    },
    {
      label: "DEC",
      value: "80"
    }
  ]

  // let freshApiResult = useSelector((state) => state.currentCycle.freshData);
  // const [value, setValue] = React.useState("SIP_Book");
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  // let assetClassData = freshApiResult[4]?.["DISTRIBUTOR CATEGORY"];
  // assetClassData?.map((ele, ind) => {
  //   SipCount.push({ label: ele.label, value: ele.SIP_Count });
  // });
  // let finalData = value == "SIP_Book" ? assetClassData : SipCount;
  return (
    <Grid item xs={12} md={12}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          {" "}
          <p>AUM Trend Graph</p>
        </div>
        <div>
          <FormControl>
            <RadioGroup
              sx={{
                '& .MuiTypography-root':{
                  fontSize: '.8rem',
                }
              }}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="AUM"
                control={<Radio />}
                label="AUM"
              />
              <FormControlLabel
                value="PAN Count"
                control={<Radio />}
                label="PAN Count"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <LineChart data={data} />
      </div>
    </Grid>
  );
};

export default AumTrend;
