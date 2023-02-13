import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import ListingTable from "../components/ListingTable";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ListingTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab sx={{
          color: "#ffffff"
        }} label="Item One" />
        <Tab sx={{
          color: "#ffffff"
        }} label="Item Two" />
        <Tab sx={{
          color: "#ffffff"
        }} label="Item Three" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ListingTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListingTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListingTable />
      </TabPanel>
    </>)
}

export default ListingTabs;