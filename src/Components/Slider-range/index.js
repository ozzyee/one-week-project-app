import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

function SliderRange({max, min}){

  const [ value, setValue ] = useState(0); 

  return (
    <RangeSlider
      value= {value}
      max= {max}
      min= {min}
      onChange={changeEvent => setValue(changeEvent.target.value)
      }
    />
  );

};

export default SliderRange;