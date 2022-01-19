import { Routes, Route } from "react-router-dom";
// PAGES!!
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Details from "../pages/credentials";
import Dashboard from '../pages/dashboard.js';
import FormPage from "../pages/formpage.js";


export const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Signin />} />
         <Route path="signup" element={<Signup />} />
         <Route path="details" element={<Details />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="forms" element={<FormPage />} />
      </Routes>
   );
};
