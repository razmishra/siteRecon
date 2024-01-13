import { createContext, useState } from "react";

export const SingleCardContext = createContext(null);

export const SingleCardContextProvider = (props) => {
  const [clickedOpen, setClickedOpen] = useState(null);
  const handleClickOpen = () => {
    setClickedOpen(!clickedOpen);
  };
  return (
    <SingleCardContext.Provider value={{ clickedOpen, setClickedOpen, handleClickOpen }}>
      {props.children}
    </SingleCardContext.Provider>
  );
};
