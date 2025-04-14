import React from 'react'
import logo from '../../../assets/logo.svg'

// i toked the details from the seasonsEpisodes
// it show only one episod 
export default function EpisodeStyle({episodeDetails}) {
  return (
    <>
  
    <div  className="group  relative overflow-hidden rounded-md bg-gray-800">
                  
                  
                  <img
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={episodeDetails?.still_path ? `https://image.tmdb.org/t/p/w500/${episodeDetails?.still_path}` : `${logo}`} // Fallback image if no poster
                    alt={episodeDetails?.name}
                  />
                
    
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-3 text-center">
                  <h5 className="text-white text-lg font-bold">{episodeDetails?.name}</h5>
                </div>
              </div>
    </>
  )
}
