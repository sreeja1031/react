import * as React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

const MockNavBar = (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
test("should Display Navbar", () => {
  render(MockNavBar);
  const nav = screen.getByTestId("header");
  expect(nav).toBeInTheDocument();
});
