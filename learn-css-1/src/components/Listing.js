import React from "react";
import Box from '@mui/material/Box';

import Category from "../components/Category";
import Title from "../components/Title";
import Meta from "../components/Meta";
import ListingTabs from "./ListingTabs";
import BiddingDetails from "./BiddingDetails";

const Listing = () => {

  return (
    <Box elevation={0} sx={{ padding: "20px" }}>
      <Category />
      <Title />
      <Meta />
      <ListingTabs />
      <BiddingDetails />
    </Box>
  )
}

export default Listing;