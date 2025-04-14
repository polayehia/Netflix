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
    // this for to get the number of seasons from the details components and send it to allseasons components
    const [sharDetails, setSharDetails] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

async function SingUp(email,password) {
  setErr('')
     try {
      await  createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),{
         savedShows:[],
        })
     } catch (error) {
        setErr(error)

        
     }
    
}

async function logIn(email, password) {
  setErr('')
    try {
      
 await  signInWithEmailAndPassword(auth, email, password);

 
} catch (error) {
  setErr(error.message)
    }
  }
  
  async function logOut() {
    setErr('')
    try {
      await signOut(auth);
    } catch (error) {
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
  return <Authcontext.Provider value={{user,setUser,SingUp,logIn,logOut,err,movie,setMovie,sharDetails,setSharDetails,searchResults, setSearchResults}}>{children}</Authcontext.Provider>;
    
}
export function UserAuth() {
    return useContext(Authcontext);
}
