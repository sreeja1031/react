/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TabPanel from ".";
import store from "../../../store";

test("should display Books", () => {
  render(
    <Provider store={store}>
      <TabPanel />
    </Provider>
  );
  const bookCards = screen.getAllByTestId(/bookCard/i);
  expect(bookCards.length).toBe(9);
});
