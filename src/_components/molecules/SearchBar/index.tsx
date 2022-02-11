/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import { styled } from "@mui/material";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const StyledDiv = styled("div")({
    marginLeft: "18.5%",
    marginTop: "58px",
    width: "45%",
    padding: "0px",
    svg: {
      position: "absolute",
      padding: "2px",
    },
    input: {
      paddingLeft: "6%",
      paddingBottom: "1%",
      fontSize: "24px",
      outline: "0",
      lineHeight: "30px",
      borderWidth: "0 0 2px",
    },
  });
  const Input = styled("input")({
    "::placeholder": {
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30.17px",
      color: "textColors.textColor3",
    },
  });
  return (
    <StyledDiv>
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
      <Input type="text" placeholder={placeholder} size={50} />
    </StyledDiv>
  );
};

export default SearchBar;
