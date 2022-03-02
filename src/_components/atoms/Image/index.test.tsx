/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import Image from ".";

test("Unit Test - Image Component", () => {
  render(
    <Image
      height={304}
      width={304}
      alt="not found"
      component="img"
      src="/assets/img10.png"
    />
  );
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", "/assets/img10.png");
});
