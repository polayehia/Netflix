import React, { useContext, useState, useEffect } from "react";
import AccRow from "../Account/AccRow/AccRow";
import { Authcontext } from "./../../AuthContext/AuthContext";
import { db } from "../../firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";

export default function SavedShow() {
  const [favShow, setFavShow] = useState([]);
  const { user } = useContext(Authcontext);


  useEffect(() => {
    if (user?.email) {
      const snap = onSnapshot(
        doc(db, "users", user.email),
        (doc) => {
          setFavShow(doc.data()?.savedShows ||[]);
        }
      );

      // Cleanup subscription on unmount/try to comment it and see the error
      return () => snap();
    }
  }, [user?.email]);


const deleteMovie = async (movie) => {
  
  const movieRef = doc(db, 'users', `${user?.email}`);
  try {
    const result = favShow.filter((item) => item.id !== movie);

    await updateDoc(movieRef, { savedShows: result });

  } catch (error) {
   
  }
};

  return (
    <>
      <h3 className="text-white">savedShow</h3>
      <div className="">
        {favShow? (
          <AccRow ele={favShow} deleteFn={deleteMovie}></AccRow>
        ) : (
          <h4 className="text-center text-red-600 text-3xl ">
            No Fievrot Right Now Movies
          </h4>
        )}
      </div>
    </>
  );
}
