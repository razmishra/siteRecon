import { createContext, useState } from "react";

export const Modalcontext = createContext(null);

export const ModalcontextProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Modalcontext.Provider value={{ modalOpen, handleOpen, handleClose }}>
      {props.children}
    </Modalcontext.Provider>
  );
};
