
// import React from 'react';
// import ReactFC from 'react-fusioncharts';
// import FusionCharts from 'fusioncharts';
// import FusionMaps from 'fusioncharts/fusioncharts.maps';
// import India from 'fusionmaps/maps/fusioncharts.india';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import MapTable from './MapTable';
// import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
// ReactFC.fcRoot(FusionCharts, FusionMaps, India, FusionTheme);

// const mapData = [
//     { "id": "001", "value": 2834 },
//     { "id": "002", "value": 3182 },
//     { "id": "003", "value": 3280 },
//     { "id": "004", "value": 911 },
//     { "id": "005", "value": 292 },
//     { "id": "006", "value": 530 },
//     { "id": "007", "value": 2515 },
//     { "id": "009", "value": 728 },
//     { "id": "010", "value": 1974 },
//     { "id": "011", "value": 848 },
//     { "id": "012", "value": 3278 },
//     { "id": "013", "value": 4463 },
//     { "id": "014", "value": 1198 },
//     { "id": "015", "value": 378 },
//     { "id": "016", "value": 2610 },
//     { "id": "017", "value": 1200 },
//     { "id": "018", "value": 3820 },
//     { "id": "019", "value": 940 },
//     { "id": "020", "value": 3416 },
//     { "id": "021", "value": 4004},
//     { "id": "022", "value": 1604 },
//     { "id": "023", "value": 4011 },
//     { "id": "024", "value": 3203 },
//     { "id": "025", "value": 3775 },
//     { "id": "026", "value": 2721 },
//     { "id": "027", "value": 3417 },
//     { "id": "053", "value": 1530 },
// ]
// const colorrange = {
//     "minvalue": "0",
//     "startlabel": "Low",
//     "endlabel": "High",
//     "code": "#2c46f2",
//     "gradient": "1",
//     "color": [{ "maxvalue": "1000", "code": "#49c5f2" }, { "maxvalue": "5000", "code": "#bf49f2" }]
// };

// // // Step 9 - Creating the JSON object to store the map configurations
// const chartConfigs = {
//     type: 'maps/india',
//     width: '50%',
//     height: '600',
//     dataFormat: 'json',
//     dataSource: {
//         "chart": {
//             chartLeftMargin: "0",
//             chartRightMargin: "0",
//             chartTopMargin: "0",
//             chartBottomMargin: "0",
//             showLabels: "1",
//             includeNameInLabels: "1",
//             useSNameInLabels: "1",
//             borderColor: "#FFFFFF",
//             borderAlpha: "100",
//             "animation": "0",
//             "showbevel": "0",
//             "usehovercolor": "1",
//             "showlegend": "0",
//             // "legendposition": "BOTTOM",
//             // "legendborderalpha": "0",
//             // "legendbordercolor": "ffffff",
//             // "legendallowdrag": "0",
//             // "legendshadow": "0",

//             "connectorcolor": "#FFFFFF",
//             // "fillalpha": "80",
//             "hovercolor": "CCCCCC",
//             "theme": "fusion"
//         },
//         "colorrange": colorrange,
//         "data": mapData
//     }
// };
// // // Step 10 - Creating the DOM element to pass the react-fusioncharts component


// const MapChart = () => {
//     return (
//         <Box sx={{ display: 'flex', width: "98%" }}>
//             <ReactFC {...chartConfigs} />
//             <Box sx={{ width: "50%" }} >
//                 <Box sx={{ bgcolor: "", height: "45%" }}></Box>



//                 <RadioGroup
//                     sx={{
//                         '& .MuiSvgIcon-root': {
//                             fontSize: "0.9rem",
//                         },
//                         '& .MuiTypography-root': {
//                             fontSize: ".8rem"
//                         },
//                         padding: 1

//                     }}
//                     row
//                     aria-labelledby="demo-radio-buttons-group-label"
//                     defaultValue="female"
//                     name="radio-buttons-group"
//                 >
//                     <FormControlLabel value="region" sx={{}} control={<Radio />} label="Region" />
//                     <FormControlLabel value="state" sx={{}} control={<Radio />} label="State" />
//                     <FormControlLabel value="city" sx={{}} control={<Radio />} label="City" />
//                 </RadioGroup>


//                 <MapTable/>
//             </Box>
//         </Box>
//     );
// }


// export default MapChart
