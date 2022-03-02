/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TabBar from ".";
import store from "../../../store";

test("should Display Tab Bar", () => {
  render(
    <Provider store={store}>
      <TabBar />
    </Provider>
  );
  const Currently = screen.getByText(/Currently reading/i);
  const finished = screen.getByText(/Finished/i);

  expect(Currently).toBeInTheDocument();
  expect(finished).toBeInTheDocument();
});
