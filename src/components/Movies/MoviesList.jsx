import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
// used to  call movie list in category and actors movie and in SeasonEpisodes
export default function MoviesList({movie}) {
  return (
    <div key={movie.id} className="group relative overflow-hidden rounded-md bg-gray-800">
              
              <Link to={`/details/${movie.id}`}>
                <img
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}` : logo} // Fallback image if no poster
                  alt={movie?.title||movie?.name}
                />
              </Link>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-3 text-center">
                <h5 className="text-white text-lg font-bold">{movie?.title||movie?.name}</h5>
              </div>
            </div>
  )
}
