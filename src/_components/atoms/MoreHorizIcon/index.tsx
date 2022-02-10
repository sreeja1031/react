import React from "react";
import MoreHoriz from "@mui/icons-material/MoreHorizOutlined";
import IconButton from "@mui/material/IconButton";

export default function More() {
  return (
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
}
