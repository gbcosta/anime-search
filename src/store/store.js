import { configureStore } from "@reduxjs/toolkit";
import animesReducer from "./animesSlice";

export default configureStore({
  reducer: {
    animes: animesReducer,
  },
});
