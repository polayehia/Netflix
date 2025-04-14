import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../AuthContext/AuthContext";

import logo from "../../assets/logo.svg";



// this will work perfict if the firebase did not expird 

// export default function Navbar() {
//   const { user,setUser } = useContext(Authcontext);
//   return (
//     <>
//       <nav>
//         <div className="flex justify-between absolute w-100 z-50 w-full p-4 items-center ">
//           <Link to={"/"}>
//             <img
//               src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
//               alt="NetflixLogo"
//               className="sm:block hidden w-[150px] "
//             />
//             <img src={logo} className="sm:hidden block w-8" alt="LogoN" />
//           </Link>

//           {user?.email ? (
//             <>
//               <div className="">
//                 {/* <Link to={"/account"}>
//                   <button className=" text-lg   cursor-pointer text-white">
//                     Account
//                   </button>
//                 </Link> */}
//                 <Link to={"/login"}>
//                   <button
//                   onClick={() => {
//                     localStorage.removeItem("token");

                     
                    
                    
//                   }}
//                   className="bg-red-600 ml-2 cursor-pointer text-white px-6 py-2 rounded">
//                     Logout
//                   </button>
//                 </Link>
//               </div>
//             </>
//           ) : (




//             <div className="">
//               <Link to={"/login"}>
//                 <button className="pr-2 text-white">Sign in</button>
//               </Link>
//               <Link to={"/register"}>
//                 <button className="bg-red-600  cursor-pointer text-white px-6 py-2 rounded">
//                   Sign Up
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }



export default function Navbar() {
  
  return (
    <>
      <nav>
        <div className="flex justify-between absolute w-100 z-50 w-full p-4 items-center ">
          <Link to={"/"}>
            <img
              src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt="NetflixLogo"
              className="sm:block hidden w-[150px] "
            />
            <img src={logo} className="sm:hidden block w-8" alt="LogoN" />
          </Link>

         
        </div>
      </nav>
    </>
  );
}

