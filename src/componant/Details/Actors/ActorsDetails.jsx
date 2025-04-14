import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ActorsactorDit() {
  const {id}=useParams()
  const [actorDit, setActorDit] = useState()

  
  const fetchActorDitals= async()=>{
    try {
      const {data}= await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=f0c559c70b2257a69cffc3fe3e12b60c`)
    setActorDit(data)
    
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchActorDitals()
  },[])

  const word=(str,num)=>{
if (str?.length>num) {
  return  str.slice(0, num)+'...'
}
else{
  return str
}
  }


  return (
    <>
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black/60"></div>
        <img className='w-full h-full  object-contain' src={`https://image.tmdb.org/t/p/original/${actorDit?.profile_path}`} alt={actorDit?.title} />
      </div>
    </div>
    
    <div className="  p-4 md:p-8 ">
      <h3 className='text-white mb-2 text-3xl md:text-5xl font-bold'>{actorDit?.name}</h3>
    <div className=" block sm:flex  ">
      <div className="w-full border-b-2 sm:border-b-0 sm:w-[60%]">
      <p className='text-gray-400 py-2  '>{word(actorDit?.biography,500)||'NO INFORMATION ABOUT THIS ACTOR..' }</p>

      </div>
    <div className="  flex justify-start items-center sm:justify-center  w-full sm:w-[40%]">
      
    <ul className="text-gray-400 space-y-2">
     
      <li>
        <span className="font-bold text-white">place_of_birth:</span> {actorDit?.place_of_birth||"NO INFORMATION"}
      </li>
      <li>
        <span className="font-bold text-white"> Birthday:</span> {actorDit?.birthday||"NO INFORMATION"}
      </li>
      {actorDit?.deathday==null?'':<li>
        <span className="font-bold text-white">Deathday:</span> {actorDit?.deathday||"NO INFORMATION"}
      </li>}
      <li>
        <span className="font-bold text-white"> Gender:</span> {actorDit?.gender===2?'Male':'Female'||"NO INFORMATION"} 
      </li>



    </ul>

    </div>
    
    </div>
    <Link to={`/actorsmovies/${actorDit?.id}`}>

<button type="button" class="focus:outline-none mt-1 text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Actors Works</button>
    </Link>
    
    </div>
    </>
  )
}
