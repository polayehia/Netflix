import React, { useContext, useRef } from 'react'
import { Authcontext } from '../../AuthContext/AuthContext'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import { Link, useLocation, useParams } from 'react-router-dom';
import Search from '../Search/Search';
// this compont to switch from movies to tv 
export default function Switch() {
  const {movie,setMovie}=useContext(Authcontext)
  const location = useLocation()
  console.log('location',location);
  

  // console.log('switch',movie);
  // const moviebtn= useRef(null)
  // const tvbtn= useRef(null)
  
  // function changemovie() {
  //   moviebtn.current.classList.add('bg-red-600')
  //   tvbtn.current.classList.remove('bg-red-600')
  //   }

  // function changetv() {
  //   tvbtn.current.classList.add('bg-red-600')
  //   moviebtn.current.classList.remove('bg-red-600')
  //   }
  // return (
  //   <div className="text-white mt-3 text-end">
  //          <button  className={`bg-white text-black p-2  py-2 inline-block border`} ref={moviebtn} onClick={()=>{setMovie(false);changemovie()}}>Movie</button>
  //          <button  className={`${!movie?`bg-red-600`:null} p-2  py-2 inline-block border`} ref={moviebtn} onClick={()=>{setMovie(false);changemovie()}}>Movie</button>
  //          <button  className="mr-3  inline-block py-2 p-4 border" ref={tvbtn} onClick={()=>{setMovie(true);changetv()}}>TV</button>
  //        </div>
  // )
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
