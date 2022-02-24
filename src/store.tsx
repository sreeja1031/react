import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

const store = createStore(reducers);

export default store;
