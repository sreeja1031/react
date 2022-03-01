import * as React from "react";
import { render, screen } from "@testing-library/react";
import CustomAvatar from ".";

it("Unit Test - Avatar", () => {
  render(<CustomAvatar />);
  const letter = screen.getByText(/A/i);
  expect(letter).toBeInTheDocument();
});
