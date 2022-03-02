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

  const synopsisTab = screen.getByText(/Synopsis/i);
  expect(synopsisTab).toBeInTheDocument();
});
