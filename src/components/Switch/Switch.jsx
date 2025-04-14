import React, { useContext, useRef } from 'react'
import { Authcontext } from '../../AuthContext/AuthContext'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import { Link, useLocation, useParams } from 'react-router-dom';
// this compont to switch from movies to tv 
export default function Switch() {
  const {movie,setMovie}=useContext(Authcontext)
  const location = useLocation()
  

 
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
    <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'end'} ,marginTop:'20px',marginRight:{sm:'10px'}}}> 
    <ToggleButtonGroup
      color="error"
      
      sx={{bgcolor: 'white'}}
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <Link to='/categorylist'>
      {location.pathname !=='/categorylist'?
      <ToggleButton value="CategoryList">Category</ToggleButton>
      :''}
      </Link>
      <ToggleButton value={false} onClick={()=>{setMovie(false)}}>Movie</ToggleButton>
      <ToggleButton value={true} onClick={()=>{setMovie(true)}} >TV Show</ToggleButton>
    </ToggleButtonGroup>

    </Box>
    </>
  );
}
