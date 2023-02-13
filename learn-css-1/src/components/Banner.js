import React from "react";
import Box from '@mui/material/Box';

import Scenary from "../images/scenary.jpg";

const Banner = () => {

  return (
    <>
      <img
        src={Scenary}
        alt=""
        style={{
          width: '100%',
        }}
      />
      <Box elevation={0} sx={{ padding: "10px", textAlign: "center" }}>
        Bought by <Box component="span" sx={{ color: "#ebcc60" }}>Switchshaq</Box> for 0.08 ETH Last Year
      </Box>
    </>
  )
}

export default Banner;