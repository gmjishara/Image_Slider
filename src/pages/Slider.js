import React, { useState } from "react";

export default function Slider({ images }) {
  const [index, setIndex] = useState(0);

  const sliderStyle = {
    width: "400px",
    height: "300px",
    borderRadius: "15px",
    backgroundColor:"brown",
    backgroundImage: `url(${images[index].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position:'relative',
  };

  const leftSlider = {
    backgroundImage: "url(/image/left.png",
    backgroundSize: "cover",
    cursor: "pointer",
    zIndex: 1,
  };
  const rightSlider = {
    backgroundImage: "url(/image/right.png",
    backgroundSize: "cover",
    cursor: "pointer",
    zIndex: 1,
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
