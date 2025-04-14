import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function Header({wallpaper}) {
  
  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]
  
  const apiFetch=async ()=>{
    try {
      const {data}= await axios.get(wallpaper)
      setMovies(data.results)
  } catch (error) {
    
  }
}
useEffect(()=>{
  apiFetch()
},[wallpaper])
const word = (str,num)=>{
if (str?.length>num) {
 return str.slice(0,num)+`...`
}else{
  return str
}
}
  return (
<>
<div className="w-full h-[550px] text-white ">
  <div className="w-full h-full">
    <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
    <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
  </div>
</div>
<div className=" absolute top-[30%] p-4 md:p-8 left-[5%]">
<div className=" ">
  <h3 className='text-white mb-2 text-3xl md:text-5xl font-bold'>{movie?.title||movie?.original_name}</h3>
  <p className='text-gray-400 py-2'>{movie?.release_date||movie?.first_air_date}</p>
  <p className='text-gray-400 py-2 w-full md:w-[70%] lg:w-[50%] xl:w-[35%}'>{word(movie?.overview,150)||'NO Info About this Show'}</p>

  {/* <button className='border px-6 py-3 rounded bg-white mr-2 ' >play</button>
  <button className='border  text-white px-6 py-3 bg-red-600 rounded' >watch later</button> */}
</div>

</div>

</>
  )

}
