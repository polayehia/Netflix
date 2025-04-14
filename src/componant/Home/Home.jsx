import React from "react";
import { request } from "./../../API/Api";
import Switch from "../Switch/Switch";
import { useContext } from "react";
import { Authcontext } from "../../AuthContext/AuthContext";
import Search from "../Search/Search";
import MovieShow from "../Show/MovieShow";
import TvShow from "../Show/TvShow";
// import { auth } from "../../firebase";
import MoviesList from './../Movies/MoviesList';
import Button from '@mui/material/Button';

export default function Home() {
 

  const { movie,searchResults,setSearchResults } = useContext(Authcontext);


  return (
    <>
  
{searchResults.length > 0 ? (
  <div className=" pt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
    {searchResults.map((movie) => (
      <MoviesList movie={movie} key={movie.id}></MoviesList>
    ))
  }
  <Button sx={{ position: 'fixed', right: 0, bottom:'50%' }} variant="contained" onClick={()=>{setSearchResults('')}}>Back</Button>
  </div>
) : !movie ? (
  <MovieShow></MovieShow>
) : (
  <TvShow></TvShow>
)}


 

     


    </>
  );
}
