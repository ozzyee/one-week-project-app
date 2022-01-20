import React from "react";
import RangeSlider from "react-bootstrap-range-slider";

function SliderRange({ max, min, onChange, value }) {
   return <RangeSlider value={value} max={max} min={min} onChange={onChange} />;
}

export default SliderRange;
