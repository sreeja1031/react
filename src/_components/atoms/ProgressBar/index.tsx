/* eslint-disable react/require-default-props */
import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

interface ProgressBarProps {
  percentComplete?: number;
}
// eslint-disable-next-line react/function-component-definition
const ProgressBar: React.FC<ProgressBarProps> = ({ percentComplete }) => {
  const StyledDiv = styled("div")({
    width: "100%",
    height: "15px",
    backgroundColor: "#f1f6f4",
    padding: 0,
    margin: 0,
  });
  // eslint-disable-next-line operator-linebreak
  const percentCompleted =
    percentComplete !== undefined && percentComplete !== null
      ? `${percentComplete}%`
      : "30%";
  const InnerDiv = styled("div")({
    width: percentCompleted,
    height: "15px",
    margin: 0,
    padding: 0,
    backgroundColor: "#E1ECFC",
  });
  return (
    <StyledDiv>
      <InnerDiv />
    </StyledDiv>
  );
};
export default ProgressBar;
