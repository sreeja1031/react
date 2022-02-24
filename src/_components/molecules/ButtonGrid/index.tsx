/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import { Button, Grid, Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { ArrowForward } from "@mui/icons-material";
import TypographyBody1 from "./TypographyBody1";

interface ButtonGridProps {
  onClick: MouseEventHandler;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ onClick }) => (
  <Grid container marginTop="20%">
    <Button
      variant="outlined"
      sx={{
        border: "1px solid #042330",
        marginRight: "5%",
        textTransform: "none",
        padding: "2% 3% 2% 3%",
      }}
    >
      <TypographyBody1 title="Read Now" />
    </Button>
    <Button
      variant="contained"
      sx={{
        marginRight: "5%",
        textTransform: "none",
        padding: "2% 3% 2% 3%",
      }}
      onClick={onClick}
    >
      <TypographyBody1 title="Finished Reading" />
    </Button>
    <Button
      variant="text"
      sx={{ color: "textColors.textColor3", textTransform: "none" }}
      endIcon={<ArrowForward />}
    >
      <Typography variant="body2">Send to Kindle</Typography>
    </Button>
  </Grid>
);

export default ButtonGrid;
