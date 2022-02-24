/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

interface ReaderCountProps {
  count?: string;
}

const PersonIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-testid="personicon"
  >
    <path
      d="M16.6667 18.3335H15V16.6668C15 16.0038 14.7366 15.3679 14.2678 14.8991C13.7989 14.4302 13.163 14.1668 12.5 14.1668H7.49999C6.83695 14.1668 6.20107 14.4302 5.73223 14.8991C5.26339 15.3679 4.99999 16.0038 4.99999 16.6668V18.3335H3.33333V16.6668C3.33333 15.5618 3.77232 14.502 4.55372 13.7206C5.33512 12.9391 6.39493 12.5002 7.49999 12.5002H12.5C13.6051 12.5002 14.6649 12.9391 15.4463 13.7206C16.2277 14.502 16.6667 15.5618 16.6667 16.6668V18.3335ZM9.99999 10.8335C9.34338 10.8335 8.69321 10.7042 8.08658 10.4529C7.47995 10.2016 6.92875 9.83332 6.46446 9.36903C6.00017 8.90474 5.63187 8.35354 5.3806 7.74691C5.12932 7.14029 4.99999 6.49011 4.99999 5.8335C4.99999 5.17689 5.12932 4.52671 5.3806 3.92008C5.63187 3.31345 6.00017 2.76226 6.46446 2.29796C6.92875 1.83367 7.47995 1.46537 8.08658 1.2141C8.69321 0.962825 9.34338 0.833496 9.99999 0.833496C11.3261 0.833496 12.5978 1.36028 13.5355 2.29796C14.4732 3.23564 15 4.50741 15 5.8335C15 7.15958 14.4732 8.43135 13.5355 9.36903C12.5978 10.3067 11.3261 10.8335 9.99999 10.8335ZM9.99999 9.16683C10.884 9.16683 11.7319 8.81564 12.357 8.19052C12.9821 7.5654 13.3333 6.71755 13.3333 5.8335C13.3333 4.94944 12.9821 4.10159 12.357 3.47647C11.7319 2.85135 10.884 2.50016 9.99999 2.50016C9.11594 2.50016 8.26809 2.85135 7.64297 3.47647C7.01785 4.10159 6.66666 4.94944 6.66666 5.8335C6.66666 6.71755 7.01785 7.5654 7.64297 8.19052C8.26809 8.81564 9.11594 9.16683 9.99999 9.16683Z"
      fill="#6D787E"
    />
  </svg>
);

const useStyles = makeStyles({
  countStyles: {
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

const ReaderCount: React.FC<ReaderCountProps> = ({ count }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.countStyles}>
      {PersonIcon}
      <Typography sx={{ paddingLeft: "8px" }}>{count}k reads</Typography>
    </Typography>
  );
};

export default ReaderCount;
