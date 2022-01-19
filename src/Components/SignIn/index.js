import React, { useState } from "react";
import Button from "../button/Button.js";
import Inputs from "../inputs/inputs";
import Text from "../text/text";
import { useAuthContent } from "../../auth/auth.context";
// Note: css is in index.css as reusing these styles keeping it dry :)

function SignIn() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const { signIn } = useAuthContent();

   function handleSignIn() {
      signIn({ email, password });
   }

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
                  />
                  <Inputs
                     placeholder="Password"
                     onChange={(evt) => setPassword(evt.target.value)}
                     type="password"
                  />
                  <Button handleClick={handleSignIn} text="Sign in" />
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
