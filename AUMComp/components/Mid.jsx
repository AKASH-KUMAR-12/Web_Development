import React, { useState } from 'react'
import './comp_style.css'
import InfoCard from './InfoCard';
import Investor from './Investor';
import AssetChart from './assetChart';
import Scheme from './Scheme';
import Distributor from './Distributor';
import City from './City';
import MapChart from './MapChart'
import Demography from './Demography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LineChart from './LineChart';
import Dis_Table from './Dis_Table';
import Menu_Top from './Menu_Top';


const AumDashBoard = () => {
  const values = [{
    "heading": "Distributor Category",

  }, {
    "heading": "Investor Category",
  }]
  const data = [{
    "heading": "Total AUM",
    "value": "₹23626.206 Cr",
    "description": "Total AUM month June.....",
    "desc1": "Total AUM month June 23 is ₹287 Cr.",
    "desc2": "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
    "desc3": "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year."
  }, {
    "heading": "Total PAN/ Investors",
    "value": "11,18,177",
    "description": "Total AUM month June.....",
    "desc1": "Total AUM month June 23 is ₹287 Cr.",
    "desc2": "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
    "desc3": "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year."
  }, {
    "heading": "Total Folio Count",
    "value": "14,09,302",
    "description": "Total AUM month June.....",
    "desc1": "Total AUM month June 23 is ₹287 Cr.",
    "desc2": "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
    "desc3": "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year."
  }, {
    "heading": "Distributor Count",
    "value": "16,676",
    "description": "Total AUM month June.....",
    "desc1": "Total AUM month June 23 is ₹287 Cr.",
    "desc2": "SIP Book has Increased by ₹14 Cr (2.71%) from last month.",
    "desc3": "Total AUM month June Decreased by ₹39 Cr(10.53%) in current Financial year."
  }]
  return (
    <div className='contain'>
      <div className='main_container'>
        <InfoCard data={data[0]} />
        <InfoCard data={data[1]} />
        <InfoCard data={data[2]} />
        <InfoCard data={data[3]} />
      </div>
      <div className='investor_category'>
        <p>Investor Category</p>
        <hr />
        <div className='investor_display'>
          <div className='fusionChart'>
            <Investor />
          </div>
          <div className='vl'></div>
          <div className='investor_content'>
            <ul>
              <li>Direct SIP book has grown fromo (March 23) to 98 Cr SIP book.</li>
              <li>Regular SIP book has grown from (March 23) to 99 Cr SIP book.</li>
              <li>Contribution of direct SIP Book has grown up by 2.7%.</li>
            </ul>
          </div>
        </div>

      </div>
      <div className='investor_category'>
        <p>Asset Class</p>
        <hr />
        <div className='investor_display'>
          <div className='fusionChart'>
            <AssetChart />
          </div>
          <div className='vl'></div>
          <div className='investor_content'>
            <ul>
              <li>Equity SIP book has grown from 220 Cr to 240 Cr.</li>
              <li>Debt SIP book has grown from 9 Cr to 14 Cr.</li>
              <li>Hybrid SIP has grown from 105 Cr to 126 Cr.</li>
            </ul>
          </div>
        </div>
      </div>
      <Scheme />
      <div className="distribute">
        <Distributor values={values[0]} />
        <Distributor values={values[1]} />
      </div>
      <div className='investor_category'>
        <div className='demography_top'>
          <p>City Categories</p>
          <FormControl>
            <RadioGroup sx={{
              '& .MuiTypography-root': {
                fontSize: '.8rem',
                padding: '0.5rem'
              }
            }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="AUM" control={<Radio />} label="AUM" />
              <FormControlLabel value="PAN Count" control={<Radio />} label="PAN Count" />
            </RadioGroup>
          </FormControl>

        </div>
        <hr />
        <div className='investor_display'>
          <div className='fusionChart'>
            <City />
          </div>
          <div className='vl'></div>
          <div className='investor_content'>
            <ul>
              <li>Direct SIP book has grown fromo (March 23) to 98 Cr SIP book.</li>
              <li>Regular SIP book has grown from (March 23) to 99 Cr SIP book.</li>
              <li>Contribution of direct SIP Book has grown up by 2.7%.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className='investor_category'>
    <div className='demography_top'>
        <p>Investor Demography</p>
        <FormControl>
      <RadioGroup sx={{
        '& .MuiTypography-root':{
          fontSize: '.8rem'
        }
      }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" 
      >
        <FormControlLabel value="Age" control={<Radio />} label="Age" />
        <FormControlLabel value="Gender" control={<Radio />} label="Gender" />
        <FormControlLabel value="Occupation" control={<Radio />} label="Occupation" />
      </RadioGroup>
    </FormControl>
    </div>
    <hr/>
    <div className="fusion">
    <Demography/>
    </div>
    </div>
    <div className='investor_category'>
    <p>Investor Demography</p>
    <hr/>
    <div className='investor_display'>
        <MapChart/> 
    </div>
    </div> */}
      <div className='investor_category'>
        <div className='demography_top'>
          <p>AUM Trend Graph</p>
          <FormControl>
            <RadioGroup sx={{
              '& .MuiTypography-root': {
                fontSize: '.8rem'
              }
            }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="AUM" control={<Radio />} label="AUM" />
              <FormControlLabel value="PAN Count" control={<Radio />} label="PAN Count" />
            </RadioGroup>
          </FormControl>

        </div>
        <hr />
        <div className='fusionChart'>
          <LineChart />
        </div>
      </div>
      <div className='investor_category'>
        <div className='demography_top'>
          <p>Distributor Details</p>
          <Menu_Top />
        </div>
        <hr />
        <div className='dis_table'>
          <Dis_Table />
        </div>
      </div>
    </div>
  )
}

export default  AumDashBoard;