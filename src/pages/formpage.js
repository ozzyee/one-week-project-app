import React from "react";
import SliderRange from "../Components/Slider-range/index.js";
import '../Style/formpage.css';

function FormPage(){
    return (
        <div className="form-page-wrapper">
            <div className="rate-experience">
                <p className="range-text">Inadequate</p>
                <SliderRange max='5' min='0' />
                <p className="range-text">Excellent</p>
            </div>
            <div className="guest-speaker-experience">
                <p className="range-text">Inadequate</p>
                <SliderRange max='5' min='0' />
                <p className="range-text">Excellent</p>
            </div>
            <div className="rate-emotionally-feeling">
                <p className="range-text">😢</p>
                <SliderRange max='5' min='0' />
                <p className="range-text">😁</p>
            </div>
        </div>
    )
}

export default FormPage;