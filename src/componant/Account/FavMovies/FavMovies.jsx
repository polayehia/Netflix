import React from "react";
import icon from "../../../assets/daniel.jpg";
export default function FavMovies({ movie, key, deleteFn }) {
  return (
    <>
      <div className=" cursor-pointer relative inline-block  w-40  sm:w-52  md:w-60 lg:w-72 p-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.image}`}
          className="block h-auto w-full"
          alt={movie?.title}
        />
        <div className=" absolute inset-0 hover:bg-black/80 opacity-0 hover:opacity-100  transition-all ">
          <p className="text-white flex justify-center text-center items-center  w-full  h-full ">
            {movie?.title}
          </p>

          <i
            className="fas fa-xmark absolute top-3  left-3 text-2xl text-red-600"
            onClick={() => {
              deleteFn(movie?.id);
            }}
          ></i>
        </div>
      </div>
    </>
  );
}
