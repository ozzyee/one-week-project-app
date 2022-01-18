import React from "react";
import { useState } from "react";
// import './Dropdown.css';

function Dropdown() {
   const [toggle, setToggle] = useState(true);

   function toggleMenu() {
      console.log("it works!");
      if (toggle === true) {
         setToggle(false);
      } else if (toggle === false) {
         setToggle(true);
      }
   }

   return (
      <div className="dropdown">
         <button onClick={toggleMenu} className="dropbtn"></button>
         <div id="myDropdown" className="dropdown-content">
             {/* NOTE WONT BUILD IF HREF ARE WRONG */}
            {/* <a>Home</a>
            <a>Dashboard</a>
            <a>Completed forms</a> */}
         </div>
      </div>
   );
}

export default Dropdown;
