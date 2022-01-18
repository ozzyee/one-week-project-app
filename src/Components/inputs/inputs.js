import React from "react";
import Button from "../button/Button.js";
import "./style.css";

function Inputs({ onChange, placeholder, type }) {
   return (
      <input
         placeholder={placeholder}
         type={type}
         onChange={onChange}
         className="inputs"
      />
   );
}

export default Inputs;
