/* eslint-disable comma-dangle */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import BookCard from ".";

test("Unit Test - Book Card", () => {
  render(
    <BookCard
      title="Anatomy I"
      author="House Md"
      readTime="13"
      onClick={() => null}
      imagePath="/assets/img1.png"
    />
  );
  const title = screen.getByText(/Anatomy I/i);
  const author = screen.getByText(/House Md/);
  const readTime = screen.getByText("13-minute read");
  const image = screen.getByRole("img");
  const button = screen.getByRole("button");
  expect(title).toBeInTheDocument();
  expect(author).toBeInTheDocument();
  expect(readTime).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(button).toHaveTextContent("Add to library");
  expect(image).toHaveAttribute("src", "/assets/img1.png");
});
