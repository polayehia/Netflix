import React, { useContext } from 'react'
import { Authcontext } from '../../../../AuthContext/AuthContext'
import EpisodeStyle from '../../EpisodeStyle/EpisodeStyle'
import { Link } from 'react-router-dom';

export default function AllSeasons() {
    
    const {sharDetails}=useContext(Authcontext)
    console.log('sharDetails',sharDetails);
    
  return (
    <>
  
    

    
    {/* <div className="grid  mt-4 ml-4 pt-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
    {sharDetails?.map((ele)=>
    
    <div  className="group  relative overflow-hidden rounded-md bg-gray-800">
                  
                  
                  <img
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={ele?.still_path ? `https://image.tmdb.org/t/p/w500/${ele?.still_path}` : `${logo}`} // Fallback image if no poster
                    alt={ele?.name}
                  />
                
    
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-3 text-center">
                  <h5 className="text-white text-lg font-bold">{ele?.name}</h5>
                </div>
              </div>
    
)}
    </div> */}
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
