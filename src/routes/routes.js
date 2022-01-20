/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// PAGES!!
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import Details from "../pages/credentials";

import CompletedFormsPage from "../pages/dashboard";
import { PageNotFound } from "../pages/_404";
import { useAuthContent } from "../auth/auth.context";
import { getData } from "../lib/http-functions/get";
import { BasePath } from "../pages/base-path";
import FormPage from "../pages/formpage";

import Dashboard from "../pages/dashboard.js";

export const Router = () => {
   // const [loading, setLoading] = useState(true);
   const history = useNavigate();
   const { authenticated, signupStage, _user } = useAuthContent();
   const [auth, setAuth] = useState(null);

   // if (loading) return null;

   const getUser = async () => {
      const uid = _user?.uid;
      const user = await getData(
         `https://project-week-app.herokuapp.com/users/${uid}`
      );

      const USER_DATA = user[0];
      console.log(USER_DATA);
   };

   useEffect(() => {
      setAuth(authenticated);
   }, [authenticated]);

   const currentUrl = window.location.href.split("/")[3];

   useEffect(() => {
      getUser();
      if (!authenticated && currentUrl !== "signup") {
         // history("/");
      }
      // if (authenticated && currentUrl !== "/") history("/dashboard");
   }, [authenticated, currentUrl, history, signupStage]);

   useEffect(() => {
      getUser();
   }, []);

   // if (loading) return null;
   return <>{auth ? <Authenticated /> : <UnAuthenticated />}</>;
};

export const Authenticated = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />

         <Route path="details" element={<Details />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="completedforms" element={<CompletedFormsPage />} />
         <Route path="form/:id" element={<FormPage />} />
         <Route path=":id" element={<PageNotFound />} />
      </Routes>
   );
};

export const UnAuthenticated = () => {
   return (
      <Routes>
         <Route path="/signup" element={<Signup />} />
         <Route path="/" element={<Signin />} />
         <Route path=":id" element={<PageNotFound />} />
      </Routes>
   );
};
