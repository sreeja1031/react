/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import {
  Box,
  Divider,
  Grid,
  Stack,
  SxProps,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import * as React from "react";
import ButtonGrid from "../../molecules/ButtonGrid";
import Timer from "../../molecules/ReadTime";
import Image from "../../atoms/Image";

const cssRules = {
  width: "200px",
  alignItems: "flex-start",
  padding: "0",
  marginTop: "60px",
  fontSize: "16px",
};

const BookDetails: React.FC = () => {
  const BoxStyling: SxProps = {
    margin: "1% 10% 0% 17.5%",
  };

  return (
    <Box sx={BoxStyling}>
      <Grid container>
        <Grid item>
          <Stack>
            <Typography variant="body2" marginBottom="40px">
              Get the key Ideas from
            </Typography>
            <Typography variant="h1" marginBottom="24px">
              Beyond Entrepreneurship 2.0
            </Typography>
            <Typography variant="h4" marginBottom="24px">
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography
              variant="body2"
              marginBottom="19px"
              color="textColors.textColor3"
            >
              By Jim Collins and Bill Lazier
            </Typography>
            <Timer />
            <ButtonGrid />
          </Stack>
        </Grid>
        <Grid item xs margin="40px 0px 0px 180px">
          <Image
            height={304}
            width={304}
            alt="not found"
            component="img"
            src="/assets/img10.png"
          />
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "600px" }}>
        <Tabs value={0} textColor="inherit">
          <Tab label="Synopsis" sx={cssRules} />
          <Tab label="Who is it for?" sx={cssRules} />
          <Tab label="About the Author" sx={cssRules} />
        </Tabs>
      </Box>
      <Typography
        variant="body2"
        sx={{
          lineHeight: "20.11px",
          width: "600px",
          marginTop: "20px",
          color: "textColors.textColor2",
        }}
      >
        Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s
        essential 1992 business handbook, Beyond Entrepreneurship for the
        entrepreneurs, visionaries, and innovators of today. This new edition
        combines the timeless business advice and strategy of the original text,
        supplemented with cutting-edge insights and case studies pertinent to
        today’s business world.
      </Typography>
      <Divider
        sx={{
          margin: "80px 0px 177px 0px",
          borderColor: "greyScale.progress",
          width: "912px",
        }}
      />
    </Box>
  );
};
export default BookDetails;
