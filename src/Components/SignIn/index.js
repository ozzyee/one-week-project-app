/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useReducer, useEffect } from "react";
import Button from "../button/Button.js";
import Inputs from "../inputs/inputs";
import Text from "../text/text";
import { useAuthContent } from "../../auth/auth.context";
import reducer from "../../functions/login-reducer";
// Note: css is in index.css as reusing these styles keeping it dry :)

function SignIn() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const { signIn, setHasErr, _setErrorMsg, hasError, fbErr } =
      useAuthContent();
   const [state, dispatch] = useReducer(reducer, null);

   function handleSignIn() {
      // FORM ERR
      if (!email && !password) {
         dispatch({ type: "no_email_password" });
         _setErrorMsg("you must enter a Email & Password");
         setHasErr(true);
      } else if (!email) {
         dispatch({ type: "no_email" });
         _setErrorMsg("you must enter a Email");
         setHasErr(true);
      } else if (!password) {
         dispatch({ type: "no_password" });
         _setErrorMsg("you must enter a Password");
         setHasErr(true);
      } else {
         dispatch({ type: "" });
         setHasErr(false);
         signIn({ email, password });
      }

      if (hasError) {
         dispatch({ type: "no_email_password" });
      }
   }

   useEffect(() => {
      if (fbErr.length > 0) {
         _setErrorMsg(fbErr);
         setHasErr(true);
      }
      if (fbErr == "The email address is badly formatted") {
         dispatch({ type: "no_email" });
      }
      if (fbErr == "Wrong Password") {
         dispatch({ type: "no_password" });
      }
      if (
         fbErr == "There is no user corresponding with these details" ||
         fbErr ==
            "you account has been temporarily disabled due to too many failed logins" ||
         fbErr == "an error ocurred we are very sorry"
      ) {
         dispatch({ type: "no_email_password" });
      }

      // dispatch({ type: "no_password" });
   }, [fbErr]);

   return (
      <div id="fixed-screen">
         {/* Background */}
         <div className="bg-img-wrapper">
            <img src="/space-4984262.jpg" className="bg-img" alt="bg" />
            <div className="overlay" />
         </div>
         <section id="login">
            <div className="login-wrapper">
               {/* Text and Logo */}
               <div className="heading-wrapper">
                  <img
                     src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                     alt="School of Code logo"
                     className="logo"
                  />
                  <div className="text-wrapper">
                     <Text type="title">Welcome!</Text>
                     <Text type="sub-title">Please sign in</Text>
                  </div>
               </div>

               {/* Form */}
               <div className="input-wrapper" id="inputs">
                  <Inputs
                     placeholder="Email"
                     onChange={(evt) => setEmail(evt.target.value)}
                     type="email"
                     className={state?.email && "red_boarder"}
                  />
                  <Inputs
                     placeholder="Password"
                     onChange={(evt) => setPassword(evt.target.value)}
                     type="password"
                     className={state?.password && "red_boarder"}
                  />
                  <Button handleClick={handleSignIn} text="Sign in" />
                  <a href='#'>Forgot Password?</a>
                  <Button text="Don't have an account? Sign up now!" />
               </div>
            </div>

            {/* Planet image */}
            <div id="planet-img-wrapper">
               <img
                  src="/planet_soc-936d90fa66f241adff76225618c37d0f.png"
                  alt="School of Code Chris Planet"
                  className="planet-img"
               />
            </div>
         </section>
      </div>
   );
}

export default SignIn;
