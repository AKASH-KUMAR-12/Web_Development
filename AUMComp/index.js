import React from "react";
import AumDashboard from "./aum.main";
import { Container } from "@mui/material";

const AUMDashboard = () => {
  return (
    <Container>
      {/* <div style={{
          background: "#E3EAF3",
          padding: "10px",
          borderRadius: "9px",
          marginTop: "20px",
        }}
      >
        <h2>Dashboard</h2>
      </div> */}
      <div
        style={{
          background: "#E3EAF3",
          padding: "10px",
          borderRadius: "9px",
          marginTop: "20px",
        }}
      >
        <h2>Data as on 30th June</h2>
      </div>

      <div style={{ height: "100vh", marginTop: "20px", overflow: "auto" }}>
          <div style={{ height: "100%",margin:"5px"}}>
      <AumDashboard />
      </div>
      </div>
    </Container>
  );
};

export default AUMDashboard;
