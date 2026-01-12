import { configureStore } from "@reduxjs/toolkit";
import udemyReducer from "./udemySlice";

export const store = configureStore({
  reducer: {
    udemy: udemyReducer,
  },
});
