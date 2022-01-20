/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import FormList from "../Components/FormList/index.js";
import React, { useEffect, useState } from "react";
import "../Style/dashboard.css";
import Notification from "../Components/Notification/Notification.js";
import { useAuthContent } from "../auth/auth.context";
import { getData } from "../lib/http-functions/get";
import { useNavigate } from "react-router-dom";

function Dashboard() {
   "";
   const [forms, setForms] = useState([]);
   const { _user } = useAuthContent();
   const [user, setUser] = useState("");
   const history = useNavigate();

   console.log("this is the uid => =>", forms);

   useEffect(() => {
      (async () => {
         const data = await getData(
            `https://project-week-app.herokuapp.com/forms/${_user.uid}`
         );

         const user = await getData(
            `https://project-week-app.herokuapp.com/users/${_user.uid}`
         );
         setUser(user[0]);
         setForms(data);
      })();
   }, []);


   const completedMockForms = forms?.filter(function (item) {
      return item.iscompleted === true;
   });

   const unCompletedMockForms = forms?.filter(function (item) {
      return item.iscompleted === false;
   });

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
            <h1 className="dashboard-h1">Welcome {user.displayname}</h1>
         </div>

         <div className="dashboard-container">
            <div className="dashboard-header"></div>
            <h2 className="dashboard-h2">Forms To-Do</h2>
            <FormList
               forms={unCompletedMockForms}
               onClick={(evt) => {
                  const target = evt.target.parentElement.parentElement.id;
                  console.log(target);
                  history(`/form/${target}`);
               }}
            />
            <h2 className="dashboard-h2">Completed Forms</h2>
            <FormList forms={completedMockForms} />
         </div>
         <footer>
            <a href="#">Sign Out</a>
         </footer>
      </div>
   );
}

export default Dashboard;
