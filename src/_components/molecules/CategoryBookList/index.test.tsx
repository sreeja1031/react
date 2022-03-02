/* eslint-disable no-plusplus */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import CategoryBookList from ".";

interface BookType {
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  imagePath: string;
  owned?: boolean;
  id?: string;
}

const bookList: Array<BookType> = [];
for (let i = 0; i < 10; i++) {
  bookList.push({
    title: "The Fault in our Stars",
    author: "me",
    readTime: "15",
    reads: "100",
    imagePath: "/images/3.png",
    owned: true,
  });
}

const title = "Trending Blinks";

const MockCategoryBookList = (
  <BrowserRouter>
    <CategoryBookList title={title} bookList={bookList} />
  </BrowserRouter>
);

test("Unit Test - Category Book list", () => {
  render(MockCategoryBookList);
  const titleTag = screen.getByText(title);
  const books = screen.getAllByTestId("bookCard");
  expect(titleTag).toBeInTheDocument();
  expect(books.length).toBe(bookList.length);
});
