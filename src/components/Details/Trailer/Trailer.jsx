import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../../API/Api";
import { useContext } from "react";
import { Authcontext } from './../../../AuthContext/AuthContext';
export default function Trailer() {
  const [trailer, setTrailer] = useState([]);
  const {movie}=useContext(Authcontext)

  const { id } = useParams();

  const fetchTrailer = async () => {
    try {
      setTrailer(null);
      if (!movie) {
        const response = await axios.get(
          request.movieTrailer(id)
        );
        setTrailer(response.data.results[0]);
      }else{
        const response = await axios.get(
          request.tvShowTrailer(id)
        );
        setTrailer(response.data.results[0]);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, [id]);

  if (!trailer) {
    return (
      <div>
        <h4 className="text-white text-2xl">NO TRAILER FOUND</h4>
      </div>
    );
  }

  return (
    <>
      <div className="">
        <iframe
          className=" w-[300px] sm:w-[500px] "
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}?controls=0&autoplay=1&mute=1&rel=0&cc_load_policy=1 `}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={trailer.name}
        ></iframe>
      </div>
    </>
  );
}
