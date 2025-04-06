import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MoviesList from './../../Movies/MoviesList';
import { useContext } from 'react';
import { Authcontext } from '../../../AuthContext/AuthContext';
import { request } from '../../../API/Api';

export default function ActorsMovies() {
  const { id } = useParams()
  const [actorMovies, setActorMovies] = useState([])
  const {movie}=useContext(Authcontext)

  const fetchActorMovies = async () => {
   if (!movie) {
    try {
      const { data } = await axios.get(request.actorsMovies(id))
      setActorMovies(data.cast) // `data.cast` contains the movie credits for the actor
      console.log(data)
    } catch (error) {
      console.log('Error fetching actor movies:', error)
    }
  }else{
    try {
      const { data } = await axios.get(request.tvActorsTvShows(id))
      setActorMovies(data.cast) // `data.cast` contains the movie credits for the actor
      console.log(data)
    } catch (error) {
      console.log('Error fetching actor movies:', error)
    }
  }
  }

  useEffect(() => {
    fetchActorMovies()
  }, [id])


  return (
    <>
    
      <div className="grid pt-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {actorMovies?.length > 0 ? (
          actorMovies.map((movie) => (
           <MoviesList movie={movie}></MoviesList>
          ))
        ) : (
          <p className="text-white text-center col-span-full">No movies found for this actor.</p>
        )}
      </div>
     

    
    
   
    </>
  )
}

{/* <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/O6vzY7vzP4k?autoplay=1&mute=1&loop=1&playlist=O6vzY7vzP4k"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Background"
      ></iframe> */}