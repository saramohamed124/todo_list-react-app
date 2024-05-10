import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../components/Navbar/Logo';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        <Toolbar style={backColor}>
            <Logo/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To Do List
          </Typography>
          <Button color="inherit">Porfile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const backColor ={
    backgroundColor :"var(--main-color)",
}