import React from 'react'
import { request } from '../../../API/Api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import EpisodeTralier from '../EpisodeTralier/EpisodeTralier';

export default function EpisodeDetails() {
  const [episodeDetails,setEpisodeDetails]=useState(null)
  const { id, season, episode } = useParams();
  console.log('params', { id, season, episode });

   async function episodeFetch () {
      try {
        const {data}=await axios.get(request.tvSeasonEpisodes(id,season,episode))
        setEpisodeDetails(data)
        console.log('episodeData',data);
      } catch (error) {
        console.log('errorfromepisodeFetch ',error);
        
      }
    }
    useEffect(()=>{
      episodeFetch()
    },[])
  return (
    <>
    
    <div className="w-full h-[550px] text-white mt-4 ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px]  bg-gradient-to-r from-black/60"></div>
        <img 
  className='w-full h-full object-contain' 
  src={`https://image.tmdb.org/t/p/original/${episodeDetails?.still_path}`} 
  alt={episodeDetails?.name || 'Episode Image'} 
/>      </div>
    </div>
    <div className="  p-4 md:p-8 ">
      <h3 className='text-white mb-2 text-3xl md:text-5xl font-bold'>{episodeDetails?.name}</h3>
   
      <div className="w-full  sm:w-[60%]">
      <p className='text-gray-400 py-2 '>{episodeDetails?.overview}</p>
      
      </div>
      <div className="">
       <EpisodeTralier/>
       
      </div>
    </div>
    </>
  )
}
