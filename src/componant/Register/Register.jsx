import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormInfo from "../FormInfo/FormInfo";
import { Authcontext } from "../../AuthContext/AuthContext";
import Row from "../Row/Row";

export default function Register() {
  const { user, SingUp } = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
   await SingUp(email, password);
   
   
   console.log("User Register Successfully");
   
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <>
      <FormInfo
        btn="Sign Up"
        logo="Sign Up"
        linkName="Sign In"
        goto="login"
        fn={handelSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        user={user}
      />
    
    </>
  );
}


// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import FormInfo from "../FormInfo/FormInfo";
// import { Authcontext } from "../../AuthContext/AuthContext";

// export default function Register() {
//   const { user, SingUp } = useContext(Authcontext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // To capture errors from Firebase

//   const handelSubmit = async (e) => {
//     e.preventDefault();

//     // Simple email validation
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     try {
//       await SingUp(email, password);
//       console.log("User registered successfully");
//     } catch (error) {
//       setError(error.message); // Set error message if sign up fails
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <FormInfo
//         btn="Sign Up"
//         logo="Sign Up"
//         linkName="Sign In"
//         goto="login"
//         fn={handelSubmit}
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//         user={user}
//         error={error} // Pass error message to FormInfo
//       />
//     </>
//   );
// }
