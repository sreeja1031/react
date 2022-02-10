/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/require-default-props */
import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  SxProps,
  Typography,
} from "@mui/material";
import Timer from "../../molecules/ReadTime";
import More from "../../atoms/MoreHorizIcon";
import ProgressBar from "../../atoms/ProgressBar";

interface BookCardProps {
  imagePath: string;
  title?: string;
  author?: string;
  readTime?: string;
  owned?: boolean;
  onClick: Function;
  percentComplete?: number;
}

function BookCard({
  imagePath,
  title,
  author,
  readTime,
  owned,
  onClick,
  percentComplete,
}: BookCardProps) {
  const ButtonStyling: SxProps = {
    position: "relative",
    top: "10px",
    width: "100%",
    height: "11%",
    color: "secondary.main",
    borderColor: "#e1ecfc",
    "&:hover": {
      backgroundColor: "secondary.main",
      alignItems: "center",
      color: "white",
      path: {
        fill: "white",
      },
    },
  };

  const CardContentStyling: SxProps = {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  };
  return (
    <Card sx={{ height: "466px", width: "284px" }}>
      <CardMedia
        component="img"
        src={imagePath}
        alt="Book Image"
        height="282px"
      />
      <CardContent sx={CardContentStyling}>
        <Grid container direction="column" padding="0" margin="0">
          <Typography variant="subtitle2" margin="5% 0px 0px">
            {title}
          </Typography>
          <Typography
            variant="body1"
            paddingTop="5%"
            sx={{ color: "textColors.textColor3" }}
          >
            {author}
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignContent="start"
            paddingTop="5%"
          >
            <Grid item xs={7.5}>
              <Timer />
            </Grid>
            <Grid
              container
              justifyContent="end"
              marginRight="5%"
              marginTop="5%"
            >
              <More />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Grid container padding="0px" top="15px" position="relative">
        <ProgressBar percentComplete={percentComplete} />
      </Grid>
    </Card>
  );
}

export default BookCard;
