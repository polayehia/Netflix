import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500,backgroundColor:'black',border:'1px solid white'}}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 ,color:'white' }}
        
        placeholder='Search Movie / TV Show / Actor'
       
      />
      <IconButton type="button" sx={{ p: '10px' ,color:'white' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    
    </Paper>
  );
}