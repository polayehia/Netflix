import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
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
    } catch (error) {
    }
  }else{
    try {
      const { data } = await axios.get(request.tvActorsTvShows(id))
      setActorMovies(data.cast) // `data.cast` contains the movie credits for the actor
    } catch (error) {
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

