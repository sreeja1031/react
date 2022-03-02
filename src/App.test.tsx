/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

test("should Display App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const explore = screen.getByText(/Explore/i);
  expect(explore).toBeInTheDocument();
});
