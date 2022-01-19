import React, { useState, useReducer, useEffect } from "react";
import Button from "../button/Button";
import Inputs from "../inputs/inputs";
import Text from "../text/text";
import { useAuthContent } from "../../auth/auth.context";
import reducer from "../../functions/login-reducer";

// Note: css is in index.css as reusing these styles keeping it dry :)

function SignUp() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [confirmPassword, setConfirmPassword] = useState("");
   const [state, dispatch] = useReducer(reducer, null);

   const { signUp, setHasErr, _setErrorMsg, hasError, fbErr, errorMsg } =
      useAuthContent();

   const handleSignUp = () => {
      if (!email && !password && !confirmPassword) {
         dispatch({ type: "no_email_password_confirm" });
         _setErrorMsg("you must enter a Email, Password & confirm password");
         setHasErr(true);
      } else if (!email) {
         dispatch({ type: "no_email" });
         _setErrorMsg("you must enter a Email");
         setHasErr(true);
      } else if (!password) {
         dispatch({ type: "passwords_no_match" });
         _setErrorMsg("you must enter a Password");
         setHasErr(true);
      } else if (password !== confirmPassword) {
         dispatch({ type: "passwords_no_match" });
         _setErrorMsg("you passwords dont match");
         setHasErr(true);
      } else {
         setHasErr(false);
         signUp({ email, password });
         dispatch({ type: "" });
      }

      if (!email && !confirmPassword) {
         dispatch({ type: "no_email_password_confirm" });
         _setErrorMsg("you must fill in all inputs");
         setHasErr(true);
      }

      if (hasError) {
         dispatch({ type: "no_email_password_confirm" });
      }
   };

   useEffect(() => {
      if (fbErr.length > 0 || errorMsg.length > 0) {
         _setErrorMsg(fbErr);
         setHasErr(true);
      }
      // eslint-disable-next-line eqeqeq
      if (fbErr == "The email address is badly formatted") {
         dispatch({ type: "no_email" });
      }

      if (hasError) {
         dispatch({ type: "no_email_password_confirm" });
      }

      // dispatch({ type: "no_password" });
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
                     <Text type="sub-title">Please sign up</Text>
                  </div>
               </div>

               {/* Form */}
               <div className="input-wrapper" id="inputs">
                  <Inputs
                     placeholder="Email"
                     type="email"
                     onChange={(evt) => setEmail(evt.target.value)}
                     className={state?.email && "red_boarder"}
                  />
                  <Inputs
                     placeholder="Password"
                     type="password"
                     onChange={(evt) => setPassword(evt.target.value)}
                     className={state?.password && "red_boarder"}
                  />
                  <Inputs
                     placeholder="Confirm Password"
                     type="password"
                     onChange={(evt) => setConfirmPassword(evt.target.value)}
                     className={state?.confirmPassword && "red_boarder"}
                  />
                  <Button handleClick={handleSignUp} text="Sign in" />
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

export default SignUp;
