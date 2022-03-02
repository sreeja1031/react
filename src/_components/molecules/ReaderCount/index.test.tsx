import * as React from "react";
import { render, screen } from "@testing-library/react";
import ReadCount from ".";

it("Unit Test - Avatar", () => {
  render(<ReadCount count="1.9" />);
  const number = screen.getByText(/1.9/i);
  expect(number).toBeInTheDocument();
});
