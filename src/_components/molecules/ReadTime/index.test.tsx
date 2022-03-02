import * as React from "react";
import { render, screen } from "@testing-library/react";
import ReadTime from ".";

it("Unit Test - Avatar", () => {
  render(<ReadTime time="13" />);
  const number = screen.getByText(/13/i);
  expect(number).toBeInTheDocument();
});
