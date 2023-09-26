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
import Donut from '../../../newCharts/charts/Donut';
import { Height } from "@mui/icons-material";

const Terflag = () => {
  let SipCount = [];


  const [value, setValue] = React.useState("AUM");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const data = [
    {
      label: "T30",
      value: "41"
    },
    {
      label: "B30",
      value: "50"
    },
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
      <>
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
          <p>Terflag</p>
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
      {/* <div style={{ marginTop: "10px",padding:"0" }}>
        <Donut data={data} />
      </div> */}
      <Grid item xs={12} sm={12} md={12} sx={{}}>
          <Donut data={data} />
        </Grid>     
      </>
  );
};

export default Terflag
