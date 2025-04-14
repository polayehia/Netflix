import React, { useContext, useState } from "react";
import { Authcontext } from "../../AuthContext/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
export default function Movies({ id, ele }) {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const { user } = useContext(Authcontext);
  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovies = async () => {
    if (user?.email) {
      setLike(!like);
      setSave(true);
      console.log('saved');
      
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: ele.id,
          title: ele.title || ele.original_name,
          image: ele.backdrop_path,
        }),
      });
    } else {
      alert("Please Sign In");
    }
  };

  return (
    <>
      <Link to={`/details/${ele?.id}`}>
        <div
          key={id}
          className="movie-container  relative inline-block w-40 sm:w-52 md:w-60 lg:w-72 p-2 group "
        >
{ele.backdrop_path?<img
            src={ `https://image.tmdb.org/t/p/w500/${ele.backdrop_path}`
            }
            alt={ele?.title}
            className="movie-image overflow-hidden block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />: <img
          src={ logo}
          alt={ele?.title}
          className="mx-auto w-full overflow-hidden object-contain block h-20 sm:h-40  transition-transform duration-300 group-hover:scale-105"
        />}
          
         
  

          <div className="overlay  absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="movie-title text-white flex justify-center text-center items-center w-full h-full p-4 text-lg font-semibold">
              {ele?.title || ele?.original_name}
            </p>
            
          </div>
        </div>
      </Link>
    </>
  );
}
