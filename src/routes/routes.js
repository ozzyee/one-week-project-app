import { Routes, Route } from "react-router-dom";
// PAGES!!
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import Credentials from "../pages/credentials";
import Details from "../pages/credentials";

export const Router = () => {
   return (
      <Routes>
         <Route path="signup" element={<Signup />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="signin" element={<Signin />} />
         <Route path="details" element={<Details />} />
      </Routes>
   );
};
