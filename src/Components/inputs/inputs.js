/* eslint-disable no-useless-concat */
import React from "react";
import "./style.css";

function Inputs({ onChange, placeholder, type, className }) {
   return (
      <input
         placeholder={placeholder}
         type={type}
         onChange={onChange}

         className={className + " " + "inputs"}
         autoComplete={true}
      />
   );
}

export default Inputs;
