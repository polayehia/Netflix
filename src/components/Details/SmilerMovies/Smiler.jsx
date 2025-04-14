import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from "../../Movies/Movies";
import Slider from "react-slick";
import { useContext } from "react";
import { Authcontext } from "../../../AuthContext/AuthContext";
import { request } from "../../../API/Api";

export default function Smiler() {
  const [smilerMo, setSmilerMov] = useState();
  const {movie}=useContext(Authcontext)
  const { id } = useParams();

  const fetchSmiler = async () => {
    if (!movie) {
      try {
        const { data } = await axios.get(request.similarMovies(id));
        setSmilerMov(data.results);
      } catch (error) {
      }
    }else{
      try {
        const { data } = await axios.get(request.tvSimilar(id));
        setSmilerMov(data.results);
      } catch (error) {
      }
    }
   
  };
  useEffect(() => {
    fetchSmiler();
  }, [id]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    dots: true,

    
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, 
          
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-8 ">
      <h2 className="text-white md:text-xl p-4 font-bold">You May Like</h2>
      <div className="relative">
        <Slider {...settings}>
          {smilerMo?.map((movie, id) => (
            <Movies key={id} id={id} ele={movie} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
