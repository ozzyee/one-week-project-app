/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useReducer } from "react";

import Button from "../button/Button";
import Inputs from "../inputs/inputs";
import Text from "../text/text";
import { useNavigate } from "react-router-dom";
import { post } from "../../lib/http-functions/post";
import { useAuthContent } from "../../auth/auth.context";

// Note: css is in index.css as reusing these styles keeping it dry :)

const reducer = (state, action) => {};

function Credentials() {
   const history = useNavigate();
   const { _user } = useAuthContent();
   const [name, setName] = useState("");
   const [bootcamperId, setBootcamperId] = useState("");
   const [cohort, setCohort] = useState("");
   const [state] = useReducer(reducer, null);

   async function uploadDetails() {
      console.log(_user);
      await post("https://project-week-app.herokuapp.com/users", {
         googleuuid: _user.uid,
         email: _user.email,
         displayname: name,
         bootcamperid: bootcamperId,
         cohort: cohort,
      });
      history("/dashboard");
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
                     <Text type="sub-title">Please fill in your info</Text>
                  </div>
               </div>

               {/* Form */}
               <div className="input-wrapper" id="inputs">
                  <Inputs
                     placeholder="Name"
                     onChange={(evt) => setName(evt.target.value)}
                     className={state?.error && "red_boarder"}
                  />
                  <Inputs
                     placeholder="Bootcamper ID"
                     onChange={(evt) => setBootcamperId(evt.target.value)}
                     className={state?.error && "red_boarder"}
                  />
                  <Inputs
                     placeholder="Cohort"
                     onChange={(evt) => setCohort(evt.target.value)}
                     className={state?.error && "red_boarder"}
                  />
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
