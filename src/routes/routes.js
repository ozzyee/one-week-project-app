/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// PAGES!!
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import Details from "../pages/credentials";
import CompletedFormsPage from "../pages/completedforms.js";
import { PageNotFound } from "../pages/_404";
import { useAuthContent } from "../auth/auth.context";
import { post } from "../lib/http-functions/post";
import { getData } from "../lib/http-functions/get";

export const Router = () => {
   // const [loading, setLoading] = useState(true);
   const history = useNavigate();
   const { authenticated, signupStage, _user } = useAuthContent();
   const [auth, setAuth] = useState(null);

   // if (loading) return null;

   const getUser = async () => {
      const uid = _user.uid;
      const user = await getData(
         `https://project-week-app.herokuapp.com/users/${uid}`
      );

      const usersArrLength = user.length;
      if (usersArrLength == 0) {
         post("https://project-week-app.herokuapp.com/users", {
            googleuuid: _user.uid,
            email: _user.email,
         });
      }
      const USER_DATA = user[0];

      if (
         !USER_DATA.bootcmperid &&
         !USER_DATA.displayname &&
         !USER_DATA.cohort
      ) {
         // setLoading(false);
         history("/details");
      } else {
         // setLoading(false);
         history("/dashboard");
      }
   };

   useEffect(() => {
      setAuth(authenticated);
   }, [authenticated]);

   const currentUrl = window.location.href.split("/")[3];

   useEffect(() => {
      getUser();
      // if (authenticated && !currentUrl && !signupStage) history("/dashboard");
      if (!authenticated && currentUrl !== "signin") {
         history("/");
      }
   }, [authenticated, currentUrl, history, signupStage]);

   // if (loading) return null;
   return <>{auth ? <Authenticated /> : <UnAuthenticated />}</>;
};

export const Authenticated = () => {
   return (
      <Routes>
         <Route path="details" element={<Details />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="completedforms" element={<CompletedFormsPage />} />
         <Route path=":id" element={<PageNotFound />} />
      </Routes>
   );
};

export const UnAuthenticated = () => {
   return (
      <Routes>
         <Route path="/" element={<Signup />} />
         <Route path="signin" element={<Signin />} />
         <Route path=":id" element={<PageNotFound />} />
      </Routes>
   );
};
