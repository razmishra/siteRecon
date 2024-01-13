import React from "react";
import {
  NotesIcon,
  NotesPath,
  ReportInnerPathOne,
  ReportInnerPathTwo,
  ReportPath,
} from "../path";

const SvgIcons = ({ open, setOpen, setPanelVisible }) => {
  const handleIconClick = () => {
    setOpen(!open);
    setPanelVisible(true);
  };

  return (
    <div>
      <svg
        width="56"
        height="102"
        viewBox="0 0 56 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleIconClick}
      >
        <rect width="56" height="102" rx="8" fill="white" />
        <rect
          x="4"
          y="4"
          width="48"
          height="45"
          rx="4"
          fill={open ? "#FFD02B" : "white"}
        />
        <path
          d={NotesIcon}
          stroke={open ? "#333333" : "#666666"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={open ? "white" : ""}
        />
        <path d={NotesPath} fill={open ? "#333333" : "#666666"} />
        <rect x="4.5" y="53" width="47" height="45" rx="4" fill="white" />
        <rect
          x="18.6"
          y="58.1"
          width="18.8"
          height="20.8"
          rx="1.4"
          fill="white"
          stroke="#666666"
          strokeWidth="1.2"
        />
        <path d={ReportInnerPathOne} fill="#999999" />
        <path d={ReportInnerPathTwo} fill="#999999" />
        <rect
          x="20.8"
          y="60.8636"
          width="14.4"
          height="6.54545"
          rx="1.2"
          fill="#999999"
        />
        <path d={ReportPath} fill="#666666" />
      </svg>
    </div>
  );
};

export default SvgIcons;
