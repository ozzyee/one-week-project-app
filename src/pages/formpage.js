/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react/style-prop-object */

import React, { useState, useEffect, forwardRef } from "react";
import SliderRange from "../Components/Slider-range/index.js";
import "../Style/formpage.css";
import Snackbar from "@mui/material/Snackbar";
import { useAuthContent } from "../auth/auth.context";
import MuiAlert from "@mui/material/Alert";
import { patch } from "../lib/http-functions/patch";
import { useNavigate } from "react-router-dom";
import { getData } from "../lib/http-functions/get";

function FormPage() {
   const [experience, setExperience] = useState(3);
   const [speaker, setSpeaker] = useState(3);
   const [feeling, setFeeling] = useState(3);
   const [open, setOpen] = useState(false);
   const [user, setUser] = useState();

   const history = useNavigate();
   const { _user } = useAuthContent();

   useEffect(() => {
      if (experience == 0) document.getElementById("ex-0").click();
      if (experience == 1) document.getElementById("ex-1").click();
      if (experience == 2) document.getElementById("ex-2").click();
      if (experience == 3) document.getElementById("ex-3").click();
      if (experience == 4) document.getElementById("ex-4").click();
      if (experience == 5) document.getElementById("ex-5").click();

      if (speaker == 0) document.getElementById("sk-0").click();
      if (speaker == 1) document.getElementById("sk-1").click();
      if (speaker == 2) document.getElementById("sk-2").click();
      if (speaker == 3) document.getElementById("sk-3").click();
      if (speaker == 4) document.getElementById("sk-4").click();
      if (speaker == 5) document.getElementById("sk-5").click();

      if (feeling == 0) document.getElementById("fl-0").click();
      if (feeling == 1) document.getElementById("fl-1").click();
      if (feeling == 2) document.getElementById("fl-2").click();
      if (feeling == 3) document.getElementById("fl-3").click();
      if (feeling == 4) document.getElementById("fl-4").click();
      if (feeling == 5) document.getElementById("fl-5").click();
   }, [experience, speaker, feeling]);

   useEffect(() => {
      (async () => {
         const user = await getData(
            `https://project-week-app.herokuapp.com/users/${_user.uid}`
         );

         setUser(user[0]);
      })();
   }, [_user]);

   const [state] = useState({
      vertical: "bottom",
      horizontal: "left",
   });
   const { vertical, horizontal } = state;

   const Alert = forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });

   const currentUrl = window.location.href.split("/")[4];
   const uid = _user.uid;

   const sendForm = async () => {
      setOpen(true);
      setTimeout(function () {
         history("/");
      }, 1000);
      const res = await patch(
         `https://project-week-app.herokuapp.com/forms/${currentUrl}/${uid}`
      );
      console.log(res);
   };

   const handleClose = (event, reason) => {
      setOpen(false);
   };

   return (
      <>
         <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
         >
            <Alert
               onClose={handleClose}
               severity="success"
               sx={{ width: "100%" }}
            >
               Your form was sent successfully
            </Alert>
         </Snackbar>
         <iframe title="fake" name="dummyframe" id="dummyframe"></iframe>
         <div className="form-page-wrapper">
            <form
               action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjEBgTIbcgXJtGYJgE0isTNn1WzSfHt6d5649n0lN0hXCddA/formResponse"
               method="POST"
               target="dummyframe"
            >
               <div id="HIDE_INPUST">
                  <input name="entry.521146627" value="Oscar Earle" />
                  <input name="entry.1292536241" value="8" />
                  <input name="entry.1893167912" value="Morning" />
                  <input name="entry.2062293409" value="2022-01-21" />
                  <input
                     name="entry.1585076580"
                     value="Gptvep5eichL2tWQurUST9WELih1"
                  />
                  <div id="time">
                     <input
                        type="radio"
                        name="entry.1893167912"
                        placeholder="test"
                        value="Morning"
                     />
                     <input
                        type="radio"
                        name="entry.1893167912"
                        placeholder="test"
                        value="Afternoon"
                     />
                  </div>

                  <div id="experience">
                     {/* entry.176026412 */}
                     <input
                        type="radio"
                        name="entry.176026412"
                        placeholder="test"
                        value="0"
                        id="ex-0"
                     />
                     <input
                        type="radio"
                        name="entry.176026412"
                        placeholder="test"
                        value="1"
                        id="ex-1"
                     />
                     <input
                        type="radio"
                        name="entry.176026412"
                        placeholder="test"
                        value="2"
                        id="ex-2"
                     />
                     <input
                        type="radio"
                        name="entry.176026412"
                        placeholder="test"
                        value="3"
                        id="ex-3"
                     />
                     <input
                        type="radio"
                        name="entry.176026412"
                        placeholder="test"
                        value="4"
                        id="ex-4"
                     />
                     <input
                        type="radio"
                        name="entry.176026412"
                        placeholder="test"
                        value="5"
                        id="ex-5"
                     />
                  </div>

                  <div id="speaker">
                     <input
                        type="radio"
                        name="entry.1989878571"
                        placeholder="test"
                        value="0"
                        id="sk-0"
                     />
                     <input
                        type="radio"
                        name="entry.1989878571"
                        placeholder="test"
                        value="1"
                        id="sk-1"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1989878571"
                        placeholder="test"
                        value="2"
                        id="sk-2"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1989878571"
                        placeholder="test"
                        value="3"
                        id="sk-3"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1989878571"
                        placeholder="test"
                        value="4"
                        id="sk-4"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1989878571"
                        placeholder="test"
                        value="5"
                        id="sk-5"
                     />
                  </div>

                  <div id="feeling">
                     <input
                        type="radio"
                        name="entry.1882844245"
                        placeholder="test"
                        value="0"
                        id="fl-0"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1882844245"
                        placeholder="test"
                        value="1"
                        id="fl-1"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1882844245"
                        placeholder="test"
                        value="2"
                        id="fl-2"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1882844245"
                        placeholder="test"
                        value="3"
                        id="fl-3"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1882844245"
                        placeholder="test"
                        value="4"
                        id="fl-4"
                     />{" "}
                     <input
                        type="radio"
                        name="entry.1882844245"
                        placeholder="test"
                        value="5"
                        id="fl-5"
                     />
                  </div>
               </div>
               <div className="form-header">
                  <img
                     src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
                     alt="School of Code logo"
                     className="logo"
                     id="logo"
                  />
                  <div className="header-h1h2">
                     <h1>School of Code</h1>
                     <h2>Content Feedback</h2>
                  </div>
               </div>

               <div className="date-input">
                  <h6>Date</h6>

                  <div id="date_wrapper">
                     <input
                        type="text"
                        name="entry.2062293409_day"
                        placeholder="dd"
                        className="date"
                     />
                     <p id="splash">/</p>
                     <input
                        type="text"
                        name="entry.2062293409_month"
                        className="date"
                        placeholder="mm"
                     />
                     <p id="splash">/</p>

                     <input
                        type="text"
                        name="entry.2062293409_year"
                        placeholder="yy"
                        className="date"
                     />
                  </div>
               </div>

               <h6>Rate your experience</h6>
               <div className="rate-experience">
                  <p className="range-text">Inadequate</p>
                  <SliderRange
                     max="5"
                     min="0"
                     value={experience}
                     onChange={(evt) => setExperience(evt.target.value)}
                  />
                  <p className="range-text">Excellent</p>
               </div>
               <h6>
                  If there was a guest speaker, rate the quality of the guest
                  speaker:
               </h6>

               <div className="guest-speaker-experience">
                  <p className="range-text">Inadequate</p>
                  <SliderRange
                     max="5"
                     min="0"
                     value={speaker}
                     onChange={(evt) => {
                        setSpeaker(evt.target.value);
                     }}
                  />
                  <p className="range-text">Excellent</p>
               </div>
               <h6>How are you feeling emotionally?</h6>

               <div className="rate-emotionally-feeling">
                  <p className="emoji">😢</p>
                  <div className="slider-wrapper">
                     <SliderRange
                        max="5"
                        min="0"
                        value={feeling}
                        onChange={(evt) => setFeeling(evt.target.value)}
                     />
                  </div>
                  <p className="emoji">😁</p>
               </div>

               <div className="review-section">
                  <h6>
                     Why did you choose the rating(s) above? What did we do
                     well, and what can we improve on?{" "}
                  </h6>
                  <textarea placeholder="Your answer" name="entry.651497452" />
               </div>
               <input type="submit" onClick={sendForm} />
            </form>
         </div>
      </>
   );
}

export default FormPage;
