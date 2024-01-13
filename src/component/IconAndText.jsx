import React, { useContext } from "react";
import { FullCardContext } from "../context/Poppercontext";

const IconAndText = ({ left, top, text }) => {
  const svgStyle = {
    position: "absolute",
    left: left,
    top: top,
  };
  const {handleClick} = useContext(FullCardContext)
  return (
    <div>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyle}
        onClick={handleClick("bottom")}
      >
        <path
          d="M33 22.3333C33 23.2763 32.6254 24.1807 31.9586 24.8475C31.2918 25.5143 30.3874 25.8889 29.4444 25.8889H8.11111L1 33V4.55556C1 3.61256 1.3746 2.70819 2.0414 2.0414C2.70819 1.3746 3.61256 1 4.55556 1H29.4444C30.3874 1 31.2918 1.3746 31.9586 2.0414C32.6254 2.70819 33 3.61256 33 4.55556V22.3333Z"
          fill="#7EE17E"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={svgStyle} className="pl-2" onClick={handleClick("left")}>
        {text}
      </span>
    </div>
  );
};

export default IconAndText;
