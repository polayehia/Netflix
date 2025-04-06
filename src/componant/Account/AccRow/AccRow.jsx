import React from 'react'
import Slider from "react-slick";
import FavMovies from '../FavMovies/FavMovies';
export default function AccRow({ele,deleteFn}) {
  
  const settings = {
    infinite:ele.lenght>2? true:false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
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
          slidesToShow: 4,
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
        <section className="mb-8">
          <div className="relative">
            <Slider {...settings}>
              {ele.map((movie,index)=> <FavMovies key={index} deleteFn={deleteFn}  movie={movie}></FavMovies>)}
              {/* {ele.length>1?ele.map((movie,index)=> <FavMovies key={index} movie={movie}></FavMovies>):<FavMovies movie={ele[0]}></FavMovies>} */}
             
            </Slider>
          </div>
        </section>
      );
}
