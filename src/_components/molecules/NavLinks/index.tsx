/* eslint-disable operator-linebreak */
/* eslint-disable import/no-named-default */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import {
  default as KeyboardArrowDownIcon,
  default as KeyboardArrowUpIcon,
} from "@mui/icons-material/KeyboardArrowDown";
import { Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { MouseEventHandler } from "react";

interface NavItemsProps {
  title?: string;
  dropdown?: boolean;
  onClick?: MouseEventHandler;
  isDrawerOpen?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({
  title,
  dropdown,
  onClick,
  isDrawerOpen,
}) => {
  const StyledDiv = styled("div")({
    display: "flex",
    userSelect: "none",
    ":hover": {
      cursor: dropdown === true ? "pointer" : "auto",
      borderBottom: "1px solid #22C870",
    },
  });
  const arrowIcon =
    isDrawerOpen === true ? (
      <KeyboardArrowUpIcon fontSize="small" data-testid="icon" />
    ) : (
      <KeyboardArrowDownIcon fontSize="small" data-testid="icon" />
    );
  const showArrowIcon = dropdown === true ? arrowIcon : null;
  return (
    <div>
      <StyledDiv onClick={onClick}>
        <Typography variant="body1">{title}</Typography>
        {showArrowIcon}
      </StyledDiv>
      {isDrawerOpen === true ? <Divider sx={{ height: "1px" }} light /> : null}
    </div>
  );
};

export default NavItems;
