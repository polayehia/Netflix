import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { request } from '../../../API/Api';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import EpisodeStyle from '../EpisodeStyle/EpisodeStyle';
import { useContext } from 'react';
import { Authcontext } from '../../../AuthContext/AuthContext';
// i toke the details form details components and it pass the number of seasons to the SeasonsEpisodes components

export default function SeasonsEpisodes({details}) {
  const [open, setOpen] = React.useState(false);
  const [seasone, setSeason] = React.useState(0||1);
  const [episode, setEpisode] = React.useState([]);
const [allepisode,setAllEpisodes]=React.useState([])
const [episodeDetails,setEpisodeDetails]=React.useState(null)
const {setSharDetails}=useContext(Authcontext)


  const {id}=useParams()



  const handleSeasonChange = (event) => {
   
    setSeason(event.target.value);
    
    
  };
const handleEpisodeChange=(event)=>{
  setEpisode(event.target.value);
}
 async function seasonFetch () {
    try {
      const {data}=await axios.get(request.tvSeasons(seasone,id))
    setAllEpisodes(data.episodes)
    setSharDetails(data.episodes)
    
    
    
    } catch (error) {
      
    }
    
  }
 
  async function episodeFetch () {
    try {
      const {data}=await axios.get(request.tvSeasonEpisodes(id,seasone,episode))
      setEpisodeDetails(data)
    } catch (error) {
      
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
React.useEffect(()=>{
  
  seasonFetch ()
  

  
  
},[seasone])
  return (
    <>
    <div>
      <Button sx={{color:'red',bgcolor:'white',ml:'20px'}} onClick={handleClickOpen}> Select Season & Episode</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>select Seasons & Episodes</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Seasons</InputLabel>
              <Select
                native
                value={seasone}
                onChange={handleSeasonChange}
                input={<OutlinedInput label="Seasons" id="demo-dialog-native" />}
              >
                
                { details?.map((ele,index)=>(<option key={index} value={ele?.season_number}>{ele?.season_number}</option>))}
                
                
              </Select>
            </FormControl>





            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Episode</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={episode}
                onChange={handleEpisodeChange}
                input={<OutlinedInput label="Episode" />}
              >
                {allepisode?.map((ele,index)=>(<MenuItem key={index} value={ele?.episode_number}>{ele?.episode_number}</MenuItem>))}
                
                
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{episodeFetch();handleClose()}}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
    
    <div className="grid sm:grid-cols-6 grid-cols-2   mt-4 ml-4 pt-20  p-4">
    <Link to={`/episodedetails/${id}/season/${seasone}/episode/${episode}`}>
  {episodeDetails ? <EpisodeStyle episodeDetails={episodeDetails} /> : ''}
</Link>

    </div>

    {episodeDetails?
    // <Link to={`/tv/${id}/seasons/${seasone}/episodes/${episode}`}><p className='text-white  text-center '>See All Episodes..</p></Link>:
    <Link to={`/allseasons/${id}/season/${seasone}/episode/${episode}`}><p className='text-white  text-center '>See All Episodes..</p></Link>:
    ''}
    </>
    
  );
}
