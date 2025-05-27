import React, { useState, useRef } from "react";
import Header from "./Header";
// import { checkValidData } from "../utils/Validate";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = () => {
    console.log(email.current.value, password.current.value);
    const msg = checkValidData(email.current.value,password.current.value);
    setErrorMessage(msg);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-xl"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 my-4 w-full bg-gray-700 rounded-xl"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-xl"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-xl" onClick={handleClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? sign Up Now"
            : "Already registered please sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
