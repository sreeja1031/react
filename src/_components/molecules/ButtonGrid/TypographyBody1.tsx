/* eslint-disable react/function-component-definition */
import * as React from "react";
import { Typography } from "@mui/material";

const TypographyBody1: React.FC<any> = ({ title }) => (
  <Typography variant="body1" sx={{ fontWeight: "500" }}>
    {title}
  </Typography>
);
export default TypographyBody1;
