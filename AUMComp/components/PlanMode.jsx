import React from "react";
import { Grid } from "@mui/material";
import BarChart from "../../../newCharts/charts/BarChart";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../../SIPBookComp/components/style/style.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const PlanMode = () => {
  let SipCount = [];


  const [value, setValue] = React.useState("AUM");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const data = [
    {
      label: "MFD",
      value: "41"
    },
    {
      label: "ND",
      value: "50"
    },
    {
      label: "DIRECT",
      value: "30"
    },
    {
      label: "RIA",
      value: "35"
    },
    {
      label: "BANK",
      value: "32"
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
          <p>Plan Mode</p>
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
      <div style={{ marginTop: "10px",}}>
        <BarChart data={data} />
      </div>
    </Grid>
  );
};

export default PlanMode;
