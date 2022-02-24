/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const useStyles = makeStyles({
  timeStyles: {
    display: "flex",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,
    color: "#6D787E",
    left: "14.08%",
    right: "52.11%",
    top: "82.83%",
    bottom: "13.3%",
  },
});

interface ReadTimeProps {
  time?: string;
}

const ReadTime: React.FC<ReadTimeProps> = ({ time }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.timeStyles}>
      <AccessTimeIcon />
      <Typography sx={{ paddingLeft: "8px" }}>
        {time}
        -minute read
      </Typography>
    </Typography>
  );
};

export default ReadTime;
