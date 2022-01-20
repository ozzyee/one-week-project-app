/* eslint-disable react-hooks/exhaustive-deps */
import FormList from "../Components/FormList/index.js";
import React, { useEffect, useState } from "react";
import "../Style/dashboard.css";
import Notification from "../Components/Notification/Notification.js";
import { useNavigate } from "react-router-dom";
import { useAuthContent } from "../auth/auth.context";
import { getData } from "../lib/http-functions/get";

function Dashboard() {
   const mockForms = [
      {
         key: 1,
         formid: 1,
         formtitle: "Content Feedback",
         date: "18/01/22",
         userid: "hggvhnv7rer",
         iscompleted: true,
         synopsis: "",
         url: "www.bbc.com",
      },

      {
         key: 2,
         formid: 2,
         formtitle: "Content Feedback",
         date: "17/01/22",
         userid: "hggvhnv7rer",
         iscompleted: false,
         synopsis: "",
         url: "www.bbc.com/1",
      },

      {
         key: 3,
         formid: 3,
         formtitle: "Content Feedback",
         date: "16/01/22",
         userid: "qwerty123",
         iscompleted: true,
         synopsis: "",
         url: "www.bbc.com",
      },
   ];
   const [loading, setLoading] = useState(true);
   const completedMockForms = mockForms.filter(function (item) {
      return item.iscompleted === true;
   });

   const unCompletedMockForms = mockForms.filter(function (item) {
      return item.iscompleted === false;
   });

   const history = useNavigate();
   const { _user } = useAuthContent();

   const checkData = async () => {
      const user = await getData(
         `https://project-week-app.herokuapp.com/users/${_user.uid}`
      );
      console.log("this is user", user);
      if (user.length === 0) {
         history("/details");
      } else {
         history("/dashboard");
      }
   };

   useEffect(() => {
      checkData();
   }, [loading]);

   let todos = unCompletedMockForms.length;

   return (
      <div className="dashboard-container">
         <div className="dashboard-header">
            <div className="logo-btn">
               <img
                  className="logo-soc"
                  src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                  alt="School of Code Logo"
               />
               <Notification todos={todos} />
            </div>
            <h1 className="dashboard-h1">Welcome LuScOz</h1>
         </div>

         <div className="dashboard-container">
            <div className="dashboard-header"></div>
            <h2 className="dashboard-h2">Forms To-Do</h2>
            <FormList forms={unCompletedMockForms} />
            <h2 className="dashboard-h2">Completed Forms</h2>
            <FormList forms={completedMockForms} />
         </div>
      </div>
   );
}

export default Dashboard;
