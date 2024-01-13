import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Modalcontext } from "../context/Modalcontext";
import FullView from "./Fullview";

const style = {
  position: "absolute",
  top: "50vh",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  '&::-webkit-scrollbar': {color:"transparent",display:"none" }
};

const Openmodal = () => {
  const { modalOpen, handleOpen, handleClose } = useContext(Modalcontext);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="h-[95vh] overflow-scroll focus:outline-none overflow-x-hidden rounded-lg "
        >
          <FullView />
        </Box>
      </Modal>
    </div>
  );
};

export default Openmodal;
