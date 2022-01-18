import { Routes, Route, Link } from "react-router-dom";
// PAGES!!
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";

export const Router = () => {
   return (
      <Routes>
         <Route path="signup" element={<Signup />} />
         <Route path="dashboard" element={<Dashboard />} />
         {/* <Route path="signup" element={<Signup />} /> */}
      </Routes>
   );
};
