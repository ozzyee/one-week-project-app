import React from "react";
import SliderRange from "../Components/Slider-range/index.js";

function FormPage(){
    return (
        <div className="form-page-wrapper">
            <div className="rate-experience">
                <p>Inadequate</p>
                <SliderRange max='5' min='0' />
                <p>Excellent</p>
            </div>
            <div className="guest-speaker-experience">
                <p>Inadequate</p>
                <SliderRange max='5' min='0' />
                <p>Excellent</p>
            </div>
            <div className="rate-emotionally-feeling">
                <p>😢</p>
                <SliderRange max='5' min='0' />
                <p>😁</p>
            </div>
        </div>
    )
}

export default FormPage;