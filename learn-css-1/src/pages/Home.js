import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Banner from "../components/Banner";
import Listing from "../components/Listing";

const Home = () => {
 return (
  <Box sx={{ flexGrow: 1, color: "#ffffff", backgroundColor: "#011c3d" }}>
    <Grid container>
      <Grid item sm={6}>
        <Banner />
      </Grid>
      <Grid item sm={6}>
        <Listing />
      </Grid>
    </Grid>
  </Box>

 )
}

export default Home;