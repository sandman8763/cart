
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GenderFilter from './GenderFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';
import TypeFilter from './TypeFilter';
import "./Filter.css"
const Filter = () => {
  return (
    <Box className="filter-container">
        <div style={{display:"flex"}}>
      <Typography variant="h6" className="filter-title">
        Filters
      </Typography>
      <Button variant="outlined" color="secondary" className="filter-clear-all-btn"
      sx={{marginLeft:"2rem"}}>
        Clear all
      </Button>
      </div>
      <GenderFilter />
      <ColorFilter />
      <TypeFilter/>
      <PriceFilter />
    </Box>
  );
};
export default Filter;
