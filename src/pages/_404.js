import React, { useEffect, useState } from "react";
import { getData } from "../lib/http-functions/get";
import { useNavigate } from "react-router-dom";
import { useAuthContent } from "../auth/auth.context";

export const PageNotFound = () => {
   const history = useNavigate();
   const [loading, setLoading] = useState(true);

   const { _user } = useAuthContent();

   const checkData = async () => {
      if (!_user) return null;
      const user = await getData(
         `https://project-week-app.herokuapp.com/users/${_user.uid}`
      );
      if (user.length === 0) {
         // history("/details");
         setLoading(false);
      } else {
         // history("/dashboard");

         setLoading(false);
      }
   };
   useEffect(() => {
      checkData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return null;
};
