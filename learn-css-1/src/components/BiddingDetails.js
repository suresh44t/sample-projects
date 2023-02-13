import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const data = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

const BiddingDetails = () => {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6}>
          Price
          <Autocomplete
            disablePortal
            id="combo-box-demo1"
            options={data}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              marginTop: "10px"
            }}
            renderInput={(params) => <TextField sx={{ color: "#ffffff", ".MuiAutocomplete-input" : { padding: "0 !important" }, "label" : { top: "-5px" } }} {...params} label="Movie" />}
          />
        </Grid>
        <Grid item md={6}>
          Expires In
          <Autocomplete
            disablePortal
            id="combo-box-demo2"
            options={data}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              marginTop: "10px"
            }}
            renderInput={(params) => <TextField sx={{ color: "#ffffff", ".MuiAutocomplete-input" : { padding: "0 !important" }, "label" : { top: "-5px" } }} {...params} label="Movie" />}
          />
        </Grid>
      </Grid>
      <Box component="div" sx={{ textAlign: "center", marginTop: "20px" }}>Service Fee 1.275%</Box>
      <Box component="h3" sx={{ textAlign: "center", marginBottom: "20px" }}>TOTAL 0.49875 ETH</Box>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: "40px" }}>
        <Button variant="contained" sx={{ color: "#ffffff", backgroundColor: "#888888" }}>
          Close
        </Button>
        <Button variant="contained" sx={{ color: "#ffffff", backgroundColor: "#1692d2" }}>
          List
        </Button>
      </Stack>
    </>
  )
}

export default BiddingDetails;