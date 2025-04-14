import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Trailer from './Trailer/Trailer'
import Actors from './Actors/Actors'
import Smiler from './SmilerMovies/Smiler'
import { request } from '../../API/Api'
import { Authcontext } from '../../AuthContext/AuthContext'
import SeasonsEpisodes from '../EpisodeGroups/Seasons/SeasonsEpisodes'
export default function Details() {
// we tryed to make a use state share the data to all episod but is wrong
//  and take alook in samiler what the hell is that 
  const [details,setDetails]=useState([])
  // const {setSharDetails}=useContext(Authcontext)
  const [category,setCategory]=useState()
  const {movie,setSharDetails,sharDetails}=useContext(Authcontext)
  
  const {id}=useParams()
  
  const fetchDetails=async()=>{

    try {
      setDetails(null)
        setCategory(null)
      if (!movie) {
        const {data}=await axios.get(request.movieDetails(id))
        setDetails(data)
        
        setCategory(data.genres)
        
      }else{
        const {data}=await axios.get(request.tvDetails(id))
        setDetails(data)
        setSharDetails([data])
        setCategory(data.genres)
      }
    } catch (error) {
      
    }
  }
useEffect(()=>{
  fetchDetails()
},[id])
  return (
    <>
<div className="w-full h-[550px] text-white ">
  <div className="w-full h-full">
    <div className="absolute w-full h-[550px] bg-gradient-to-r from-black/60"></div>
    <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path}`} alt={details?.title} />
  </div>
</div>
<div className="  p-4 md:p-8 ">
  <h3 className='text-white mb-2 text-3xl md:text-5xl font-bold'>{details?.title}</h3>
<div className=" block sm:flex  ">
  <div className="w-full border-b-2 sm:border-b-0 sm:w-[60%]">
  <p className='text-gray-400 py-2 '>{details?.overview}</p>
  <div className="my-3">
    <h3 className='font-bold text-xl text-white'>Category</h3>
{category?.map((ele)=>
<Link key={ele.id} to={`/category/${ele.id}`}>

<span className="bg-gray-600 text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{ele.name}</span>

</Link>


)}
  </div>
  </div>
<div className="  flex justify-start items-center sm:justify-center  w-full sm:w-[40%]">
  
<ul className="text-gray-400 space-y-2">
  <li>
    <span className="font-bold text-white">Release Date:</span> {details?.release_date||details?.first_air_date}
  </li>
  <li>
    <span className="font-bold text-white">Language:</span> {details?.spoken_languages?.[0]?.name}
  </li>
  <li>
    <span className="font-bold text-white">Time:</span> {details?.runtime} mins
  </li>
  <li>
    <span className="font-bold text-white">Vote:</span> {details?.vote_average?.toFixed(1)} 
  </li>
</ul>

</div>

</div>
<Trailer></Trailer>
<Actors></Actors>
<Smiler></Smiler>
</div>
{movie?<SeasonsEpisodes details={details?.seasons}></SeasonsEpisodes>:''}
    
    </>
  )
}

