import React, { useState } from "react";
import mapImage from "../assets/Outer-map.png";
import IconAndText from "./IconAndText";
import DrawerComponent from "./DrawerComponent";
import SvgIcons from "./SvgIcons";
import img6 from "../assets/image6.png";
import Poppercomponent from "./PopperComponent";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
    setPanelVisible(false);
  };

  return (
    <div className="relative" style={{ width: "1440px", height: "820px" }}>
      <div className="absolute top flex-shrink-0 top-11 w-[48.81%] h-[48.35%] left-[25%]">
        <img src={img6} alt="" width="100%" height="100%" />
      </div>
      <div>
        <img
          src={mapImage}
          alt="map image"
          width="1440px"
          height="820px"
          className="flex-shrink-0"
        />
        <IconAndText top={"20%"} left={"45%"} text={"T1"} />
        <IconAndText top={"37%"} left={"35.8%"} text={"T3"} />
        <IconAndText top={"45.4%"} left={"48%"} text={"T2"} />
      </div>
      <div className="absolute top-0 right-0">
        <div className="flex">
          <div className="mt-2 rounded-md m-[5px]">
            <SvgIcons
              setOpen={setOpen}
              setPanelVisible={setPanelVisible}
              open={open}
            />
          </div>
          <div className="h-[38rem] overflow-scroll overflow-x-hidden">
            {open && (
              <DrawerComponent
                setOpen={setOpen}
                open={open}
                onClose={handleDrawerClose}
              />
            )}
          </div>
        </div>
      </div>
      <Poppercomponent />
    </div>
  );
};

export default Home;
