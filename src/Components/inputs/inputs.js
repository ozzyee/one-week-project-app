import React from "react";
import "./style.css";

function Inputs({ onChange, placeholder, type }) {
   return (
      <input
         placeholder={placeholder}
         type={type}
         onChange={onChange}
         className="inputs"
         autoComplete={true}
      />
   );
}

export default Inputs;
