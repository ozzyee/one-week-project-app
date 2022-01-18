import React from "react";
import Button from "../button/Button";
import Inputs from "../inputs/inputs";
import Text from "../text/text";
// Note: css is in index.css as reusing these styles keeping it dry :)

function Credentials() {
   function uploadDetails() {
      console.log("details added!");
   }

   return (
      <div id="fixed-screen">
         {/* Background */}
         <div className="bg-img-wrapper">
            <img src="/space-4984262.jpg" className="bg-img" alt="bg"/>
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
                     <Text type="sub-title">Please fill in your info</Text>
                  </div>
               </div>

               {/* Form */}
               <div className="input-wrapper" id="inputs">
                  <Inputs placeholder="Name" />
                  <Inputs placeholder="Bootcamper ID" />
                  <Inputs placeholder="Cohort" />
                  <Button handleClick={uploadDetails} text="Next" />
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

export default Credentials;
