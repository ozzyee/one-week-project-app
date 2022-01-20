import React from "react";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

function Menu() {
   return (
      <div className="dropdown">
         {/* <button onClick={toggleMenu} className="dropbtn"></button> */}
         <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               Dropdown Button
            </Dropdown.Toggle>

         <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Completed Forms</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Forms to-do</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Forms to-do</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
      </div>
   );
}

export default Menu;
