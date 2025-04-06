import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "../Movies/Movies";
import Slider from "react-slick";

export default function Row({ title, apiUrl }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      console.log('tv or movie data', data);
      
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
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
      <h2 className="text-white md:text-xl p-4 font-bold">{title}</h2>
      <div className="relative">
        <Slider {...settings}>
          {movies?.map((movie, id) => (
            <Movies key={id} id={id} ele={movie} />
          ))}
        </Slider>
      </div>
    </section>
  );
}


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import log from '../../assets/daniel.jpg'
// export default function Row({ title, Slider }) {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     try {
//       const { data } = await axios.get(Slider);
//       console.log('slider', data);
//       setMovies(data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <section className="py-4">
//       <div>
//         <h2 className="text-white md:text-xl px-4 font-bold">{title}</h2>
//         <div className="flex items-center relative overflow-x-auto scrollbar-hide">
//           <div className="flex flex-nowrap space-x-4 px-4">
//             {movies.map((movie, id) => (
//               <div key={id} className="cursor-pointer relative inline-block w-40 sm:w-52 md:w-60 lg:w-72">
//                 {movie.backdrop_path ? (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//                     className="block h-auto w-full rounded-md transition-transform duration-300 hover:scale-105"
//                     alt={movie.title || 'Movie Poster'}
//                   />
//                 ) : (
//                   <div className="bg-gray-800 h-40 sm:h-52 md:h-60 lg:h-72 flex items-center justify-center text-gray-400">
//                     <img src={log} alt="" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
