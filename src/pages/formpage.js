import React from "react";
import SliderRange from "../Components/Slider-range/index.js";
import "../Style/formpage.css";

function FormPage() {
  const formURL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfr3RK6pqOgeAUSFt_ZisY2dSQA9QT4FBSjFglij476t1nypQ/formResponse";
  const formResponse = {
    "entry.241441914_sentinel": "am/pm answer here",
    "entry.779781745_sentinel": "rate your experience answer here",
    "entry.1719766692_sentinel": "guest speaker answer here",
    "entry.2105669134_sentinel": "emotion answer here",
    "couldnt find yet": "anything else answer here",
  }; //construct object to send from values entered into our form

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("submit form");
    //construct form response and send to google forms here
  }

  return (
    <div className="form-page-wrapper">
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
        <input placeholder="dd/mm/yyyy" />
      </div>
      <div className="ampm-session">
        <h6>What session was this - morning or afternoon?</h6>
        <p className="range-session">Morning</p>
        <SliderRange max="1" min="2" />
        <p className="range-session">Afternoon</p>
      </div>
      <h6>Rate your experience</h6>
      <div className="rate-experience">
        <p className="range-text">Inadequate</p>
        <SliderRange max="5" min="0" />
        <p className="range-text">Excellent</p>
      </div>
      <h6>
        If there was a guest speaker, rate the quality of the guest speaker:
      </h6>
      <div className="guest-speaker-experience">
        <p className="range-text">Inadequate</p>
        <SliderRange max="5" min="0" />
        <p className="range-text">Excellent</p>
      </div>
      <h6>How are you feeling emotionally?</h6>
      <div className="rate-emotionally-feeling">
        <p className="emoji">😢</p>
        <div className="slider-wrapper">
          <SliderRange max="5" min="0" />
        </div>
        <p className="emoji">😁</p>
      </div>
      <div className="review-section">
        <h6>
          Why did you choose the rating(s) above? What did we do well, and what
          can we improve on?{" "}
        </h6>
        <textarea placeholder="Your answer" />
      </div>
      <input type="submit" onClick={handleSubmitForm}>
        Submit
      </input>
    </div>
  );
}

export default FormPage;
