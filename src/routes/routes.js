import { Routes, Route } from "react-router-dom";
// PAGES!!
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";

export const Router = () => {
   return (
      <Routes>
         <Route path="signup" element={<Signup />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="signin" element={<Signin />} />
      </Routes>
   );
};
