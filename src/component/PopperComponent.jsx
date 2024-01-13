import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import FullCard from "./FullCard";
import { FullCardContext } from "../context/Poppercontext";

const Poppercomponent = () => {
  const { anchorEl, popperOpen, placement } = useContext(FullCardContext);
  return (
    <Box>
      <Popper
        sx={{ borderRadius:"15rem" }}
        open={popperOpen}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{borderRadius:"20px"}}>
              <FullCard />
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default Poppercomponent;
