import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , color:'Indigo'}}>
        <Tabs  aria-label="basic tabs example" centered>
        <div><Link to="/"><Tab label="ALL"></Tab></Link></div>
        <div><Link to="/fsd"><Tab label="FULLSTACKDEVELOPMENT"></Tab></Link></div>
        <div><Link to="/ds"> <Tab label="DATASCIENCE"></Tab></Link></div>
        <div><Link to="/cs"><Tab label="CYBERSECURITY"></Tab></Link></div>
        <div><Link to="/career"><Tab label="CAREER"></Tab></Link></div>
        </Tabs>
      </Box>
    </Box>
  );
}
