import React, { useState } from "react";

export default function Slider({ images }) {
  const [index, setIndex] = useState(0);

  const sliderStyle = {
    width: "500px",
    height: "400px",
    borderRadius: "15px",
    backgroundColor:"brown",
    backgroundImage: `url(${images[index].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position:'relative',
  };

  const leftSlider = {
    width:"50px",
    height:"50px",
    backgroundImage: "url(/image/left.png)",
    backgroundSize: "cover",
    cursor: "pointer",
    zIndex: 1,
    position:'absolute',
    left:0,
    top:"50%",
    transform:"translate(0,-50%)"
  };
  const rightSlider = {
    width:"50px",
    height:"50px",
    backgroundImage: "url(/image/right.png)",
    backgroundSize: "cover",
    cursor: "pointer",
    zIndex: 1,
    position:'absolute',
    right:0,
    top:"50%",
    transform:"translate(0,-50%)"
  };
  return (
    <div style={sliderStyle}>
      <div
        style={leftSlider}
        onClick={() => {
          index === 0 ? setIndex(0) : setIndex(index - 1);
        }}
      ></div>
      <div
        style={rightSlider}
        onClick={() => {
          index === images.length - 1
            ? setIndex(images.length - 1)
            : setIndex(index + 1);
        }}
      ></div>
    </div>
  );
}
