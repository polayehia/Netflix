import React, { useContext, useState } from "react";
import FormInfo from "../FormInfo/FormInfo";
import { Authcontext } from "./../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { logIn, user} = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
    if (user?.accessToken) {
      localStorage.setItem("token", user.accessToken);
      Navigate("/");
    }
  };

  return (
    <>
      <FormInfo
        fn={handelSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        btn="Sign In"
        logo="Sign In"
        linkName="Sign Up"
        goto="register"
      />
    </>
  );
}
