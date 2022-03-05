/* eslint-disable react/function-component-definition */
import React from "react";
import MoreHoriz from "@mui/icons-material/MoreHorizOutlined";
import IconButton from "@mui/material/IconButton";

const MoreIcon: React.FC = () => (
  <IconButton
    aria-label="settings"
    sx={{
      left: "85.75%",
      right: "12.5%",
      bottom: "41.67%",
      top: "41.67%",
      color: "#03314B",
    }}
  >
    <MoreHoriz />
  </IconButton>
);

export default MoreIcon;
