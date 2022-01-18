import React, { useState } from "react";
import Button from "../button/Button";
import Inputs from "../inputs/inputs";
import Text from "../text/text";
import { useAuthContent } from "../../auth/auth.context";

// Note: css is in index.css as reusing these styles keeping it dry :)

function SignUp() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const { signUp } = useAuthContent();

   const handleSignUp = () => {
      signUp({ email, password });
   };

   return (
      <div id="fixed-screen">
         {/* Background */}
         <div className="bg-img-wrapper">
            <img src="/space-4984262.jpg" className="bg-img" atl="bg"/>
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
                  />
                  <Inputs
                     placeholder="Password"
                     type="password"
                     onChange={(evt) => setPassword(evt.target.value)}
                  />
                  <Inputs placeholder="Confirm Password" type="password" />
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
