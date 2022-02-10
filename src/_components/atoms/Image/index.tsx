/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Box } from "@mui/material";

function ImageComponent(props: any) {
  return <Box {...props} alt="not found" component="img" />;
}

export default ImageComponent;
