/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Grid, Typography } from "@mui/material";
import FooterComponent from "../organisms/Footer";
import TabBar from "../molecules/TabBar";

const LandingPage: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item marginTop="59px">
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1" sx={{ marginLeft: "18%" }}>
              My Library
            </Typography>
          </Grid>
          <Grid item sx={{ marginLeft: "18%" }}>
            <TabBar />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ paddingTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
