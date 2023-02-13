import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{
                backgroundColor: "#011c3d",
                border: 0
              }}>
            <TableCell sx={{ color: "#ffffff" }}>Dessert (100g serving)</TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">Calories</TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">Fat&nbsp;(g)</TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                backgroundColor: "#011c3d",
                border: 0
              }}
            >
              <TableCell sx={{ color: "#ffffff", border: 0 }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "#ffffff", border: 0 }} align="right">{row.calories}</TableCell>
              <TableCell sx={{ color: "#ffffff", border: 0 }} align="right">{row.fat}</TableCell>
              <TableCell sx={{ color: "#ffffff", border: 0 }} align="right">{row.carbs}</TableCell>
              <TableCell sx={{ color: "#ffffff", border: 0 }} align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}