/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "../../atoms/Image";

const useStyles = makeStyles({
  footerCopyRight: {
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: 400,
    margin: "16px 0px 0px 16px",
    color: "#6D787E",
    padding: "50px 0px 0px 20px",
  },
});

function FooterComponent(props: any) {
  const classes = useStyles();
  const data = [
    {
      heading: "Editorial",
      topics: [
        "Book lists",
        "What is Notfication?",
        "What to read next?",
        "Benefits of reading",
      ],
    },
    {
      heading: "Useful links",
      topics: [
        "Pricing",
        "Blinkist business",
        "Gift cards",
        "Blinkist magaine",
        "Contact & help",
      ],
    },
    {
      heading: "Company",
      topics: ["About", "Carrer", "partners", "Code of Conduct"],
    },
  ];
  return (
    <Box {...props} sx={{ backgroundColor: "#F1F6F4", padding: "38px 244px" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Image
            height={26}
            alt="blinkist"
            component="img"
            src="/assets/logo.png"
          />
          <Typography
            pt={2}
            sx={{
              fontWeight: 500,
              color: "#0365F2",
              fontSize: 24,
            }}
          >
            Big ideas in small packages
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              color: "#0365F2",
              fontSize: 24,
            }}
          >
            Start learning now
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyItems: "center" }}>
          {data.map((post) => (
            <Box
              sx={{
                margin: "0px 20px",
              }}
            >
              <Typography pb={2} sx={{ fontWeight: "bold" }}>
                {post.heading}
              </Typography>
              {post.topics.map((currentTopic) => (
                <Typography pb={2} sx={{ color: "#6D787E" }}>
                  {currentTopic}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
      <Typography variant="body1" className={classes.footerCopyRight}>
        © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies
      </Typography>
    </Box>
  );
}

export default FooterComponent;
