import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Overpass"].join(","),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
