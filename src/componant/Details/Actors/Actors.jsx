import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Authcontext } from "../../../AuthContext/AuthContext";
import { request } from "../../../API/Api";

export default function Actors() {
  const [actors, setActors] = useState();
  const [more, setMore] = useState(false);
  const { id } = useParams();
  const {movie}=useContext(Authcontext)
  const fetchActors = async () => {
    if (!movie) {
      try {
        const { data } = await axios.get(request.movieActors(id));
        setActors(data.cast);
      } catch (error) {
      }
  }else{
    try {
      const { data } = await axios.get(request.tvActors(id));
      setActors(data.cast);
    } catch (error) {
    }
  }
  };

  useEffect(() => {
    fetchActors();
  }, [id]);
  return (
    <>
      <div className="my-3">
        <h3 className="font-bold text-xl text-white">Actors</h3>

        {!more
          ? actors?.slice(0, 5).map((ele) => (
              <Link to={`/actorsdetails/${ele.id}`} key={ele.id}>
                <span className="bg-gray-600 cursor-pointer text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                  {ele.name}
                </span>
              </Link>
            ))
          : actors?.map((ele) => (
              <Link to={`/actorsdetails/${ele.id}`} key={ele.id}>
                <span className="bg-gray-600 cursor-pointer text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
                  {ele.name}
                </span>
              </Link>
            ))}

        <button
          onClick={() => {
            setMore(!more);
          }}
          className="text-white"
        >
          {more ? "less.." : "more.."}
        </button>
      </div>
    </>
  );
}
