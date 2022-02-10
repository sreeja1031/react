/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import Grid from "@mui/material/Grid";
import React from "react";
import CustomAvatar from "../../atoms/Avatar";
import Image from "../../atoms/Image";
import NavItems from "../../molecules/NavLinks";

const Header: React.FC = () => (
  <header>
    <Grid container sx={{ padding: "23px 17% 0px" }}>
      <Grid item sx={{ marginRight: "42px" }}>
        <Image
          height={26}
          alt="blinkist"
          component="img"
          src="/assets/logo.png"
        />
      </Grid>
      <Grid item sx={{ marginRight: "42px" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0362 17.3865L24.033 22.3822L22.3822 24.033L17.3865 19.0362C15.5277 20.5263 13.2157 21.3368 10.8334 21.3334C5.03737 21.3334 0.333374 16.6294 0.333374 10.8334C0.333374 5.03737 5.03737 0.333374 10.8334 0.333374C16.6294 0.333374 21.3334 5.03737 21.3334 10.8334C21.3368 13.2157 20.5263 15.5277 19.0362 17.3865ZM16.6959 16.5209C18.1765 14.9982 19.0034 12.9572 19 10.8334C19 6.32071 15.3449 2.66671 10.8334 2.66671C6.32071 2.66671 2.66671 6.32071 2.66671 10.8334C2.66671 15.3449 6.32071 19 10.8334 19C12.9572 19.0034 14.9982 18.1765 16.5209 16.6959L16.6959 16.5209Z"
            fill="#3A4649"
          />
        </svg>
      </Grid>
      <Grid item sx={{ marginRight: "42px" }}>
        <NavItems title="Explore" dropdown />
      </Grid>
      <Grid item marginRight="50%">
        <NavItems title="My Library" />
      </Grid>
      <Grid item>
        <CustomAvatar letter="A" />
      </Grid>
    </Grid>
  </header>
);

export default Header;
