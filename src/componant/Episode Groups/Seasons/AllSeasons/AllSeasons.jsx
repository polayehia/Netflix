import React, { useContext } from 'react'
import { Authcontext } from '../../../../AuthContext/AuthContext'
import EpisodeStyle from '../../EpisodeStyle/EpisodeStyle'
import { Link } from 'react-router-dom';

export default function AllSeasons() {
    
    const {sharDetails}=useContext(Authcontext)
    
  return (
    <>
  
    

    
   
      <div className="grid  mt-4 ml-4 pt-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
    
    {sharDetails?.map((ele)=>
    <Link to={`/episodedetails/${ele?.show_id}/season/${ele?.season_number}/episode/${ele?.episode_number}`}>

      <EpisodeStyle episodeDetails={ele}></EpisodeStyle>
    </Link>
    
    )}
    </div>
  
    </>
  )
}
