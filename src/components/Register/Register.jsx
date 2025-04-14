import React, { useContext, useState } from "react";
import FormInfo from "../FormInfo/FormInfo";
import { Authcontext } from "../../AuthContext/AuthContext";

export default function Register() {
  const { user, SingUp } = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handelSubmit = async (e) => {
    try {
      e.preventDefault();
   await SingUp(email, password);
   
   
   
    } catch (error) {
      
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


