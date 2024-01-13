import { createContext, useState } from "react";

export const FullCardContext = createContext(null);

export const FullCardContextProvider = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popperOpen, setPopperOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setPopperOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <FullCardContext.Provider
      value={{ anchorEl, popperOpen, setPopperOpen, placement, handleClick }}
    >
      {props.children}
    </FullCardContext.Provider>
  );
};
