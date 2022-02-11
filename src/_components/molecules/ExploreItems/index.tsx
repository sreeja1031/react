/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React, { MouseEventHandler } from "react";

import { Button } from "@mui/material";

interface IconTitleProps {
  icon?: any;
  title?: string;
  onClick: MouseEventHandler;
}

const ExploreItems: React.FC<IconTitleProps> = ({ icon, title, onClick }) => (
  <Button
    variant="text"
    startIcon={icon}
    onClick={onClick}
    sx={{
      textTransform: "none",
      color: "textColors.textColor3",
      "&:hover": {
        color: "secondary.main",
      },
    }}
  >
    {title}
  </Button>
);

export default ExploreItems;
