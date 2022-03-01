/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import BookDetails from ".";
import store from "../../../store";

test("should display Book Details", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <BookDetails />
      </Provider>
    </MemoryRouter>
  );
  //   const title = screen.getByText(/Beyond Entrepreneurship 2.0/i);
  //   const synopsis = screen.getByText(
  //     /Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world./i
  //   );
  const synopsisTab = screen.getByText(/Synopsis/i);
  //   expect(title).toBeInTheDocument();
  //   expect(synopsis).toBeInTheDocument();
  expect(synopsisTab).toBeInTheDocument();
});
