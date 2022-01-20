import React, { useEffect } from "react";

import "../Style/dashboard.css";
import { useNavigate } from "react-router-dom";
import { useAuthContent } from "../auth/auth.context";
import { getData } from "../lib/http-functions/get";

export const BasePath = () => {
   const history = useNavigate();
   const { _user } = useAuthContent();

   const checkData = async () => {
      const user = await getData(
         `https://project-week-app.herokuapp.com/users/${_user.uid}`
      );
      if (user.length === 0) {
         history("/details");
      } else {
         history("/dashboard");
      }
   };
   useEffect(() => {
      checkData();
   });

   return <h1>loading..MEEEE.</h1>;
};
