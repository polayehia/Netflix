import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import Slider from "react-slick";

export default function Row({ title, apiUrl ,ismovie}) {
  const [movies, setMovies] = useState([]);
  

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      
      setMovies(data.results);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [apiUrl]);

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
          donts:false
        },
      },
    ],
  };

  return (
    <section className="mb-8">
      <h2 className="text-white md:text-xl p-4 font-bold">{title}</h2>
      <div className="relative ">
        <Slider {...settings}>
          {movies?.map((movie, id) => (
            <Movies key={id} id={id} ele={movie} />
          ))}
        </Slider>
      </div>
    </section>
  );
}


