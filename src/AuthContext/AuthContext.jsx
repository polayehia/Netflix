import { createContext, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore"; 

 export const Authcontext = createContext();
export function AuthContextProvider({ children }) {
  const [err,setErr]=useState(null);
    const [user, setUser] = useState({});
    // this for to switch from movies to tv serise
    const [movie, setMovie] = useState(false);
    // this for to get the number of seasons from the details componant and send it to allseasons componant
    const [sharDetails, setSharDetails] = useState([]);
console.log(user);

async function SingUp(email,password) {
  setErr('')
     try {
      await  createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),{
         savedShows:[],
        })
     } catch (error) {
        console.log("Error during SignUp:auth",error.message);
        setErr(error)

        
     }
    
}

async function logIn(email, password) {
  setErr('')
    try {
      
 await  signInWithEmailAndPassword(auth, email, password);

 console.log("User logged in successfully");
 
} catch (error) {
  console.log("Error during LogIn:auth", error);
  setErr(error.message)
    }
  }
  
  async function logOut() {
    setErr('')
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.log("Error during LogOut:auth", error.message);
      setErr(error.message)
    }
  }
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currnetUser)=>{
        setUser(currnetUser)
        
    })
    return ()=>{
        unsubscribe()
    }
},[])
  return <Authcontext.Provider value={{user,SingUp,logIn,logOut,err,movie,setMovie,sharDetails,setSharDetails}}>{children}</Authcontext.Provider>;
    
}
export function UserAuth() {
    return useContext(Authcontext);
}
// import { createContext, useState, useEffect, useContext } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import Details from './../componant/Details/Details';

// export const Authcontext = createContext();

// export function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const SingUp = async (email, password) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Error during SignUp:", error.message);
//       throw error; // Allow handling the error in Register.jsx
//     }
//   };

//   const logIn = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Error during LogIn:", error.message);
//       throw error; // Allow handling the error in Register.jsx
//     }
//   };

//   const logOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return <Authcontext.Provider value={{ user, SingUp, logIn, logOut }}>{children}</Authcontext.Provider>;
// }

// export function UserAuth() {
//   return useContext(Authcontext);
// }
