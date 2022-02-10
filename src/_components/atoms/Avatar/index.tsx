/* eslint-disable react/function-component-definition */
import * as React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Avatar as MUIAvatar } from "@mui/material";
import { styled } from "@mui/material/styles";

interface AvatarProps {
  letter: string;
}

const CustomAvatar: React.FC<AvatarProps> = ({ letter }) => {
  const CustomDiv = styled("div")({
    display: "flex",
    alignItems: "center",
  });
  return (
    <CustomDiv>
      <MUIAvatar sx={{ bgcolor: "#69A5E3" }}>{letter}</MUIAvatar>
      <KeyboardArrowDown fontSize="small" />
    </CustomDiv>
  );
};

export default CustomAvatar;
