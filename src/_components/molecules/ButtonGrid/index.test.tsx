import React from "react";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ButtonGrid from ".";

function MockButtonGrid() {
  return (
    <BrowserRouter>
      <ButtonGrid onClick={() => null} />
    </BrowserRouter>
  );
}
// Use Memory Router.

test("should Generate 3 Buttons - Unit Test", () => {
  render(<MockButtonGrid />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(3);
});
