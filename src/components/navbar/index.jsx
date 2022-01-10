import React from "react";
import { AppBar, Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchInput from "../searchInput";
import { ToolbarButton } from "./style";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "@fontsource/overpass";

export const theme = createTheme({
  typography: {
    fontFamily: ["Overpass"].join(","),
  },
});

export default function Navbar(props) {
  const renderSearchInput = props.searchInput ? (
    <SearchInput
      iconColor="#fff"
      inputColor="rgb(41, 41, 41)"
      textColor="#fff"
      sx={{ width: "100%", width: 250, marginRight: "50px" }}
    ></SearchInput>
  ) : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#ebebeb",
            color: "#1d1d1d",
            height: 50,
            justifyContent: "center",
          }}
        >
          <Container
            sx={{ display: "flex", alignItems: "center" }}
            maxWidth="lg"
          >
            <ToolbarButton>Home</ToolbarButton>

            <Box sx={{ flexGrow: 1 }} />
            {renderSearchInput}
            <Box sx={{ display: "flex", gap: 1 }}>
              <a
                href="https://www.linkedin.com/in/gbcostasantos/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon sx={{ color: "black" }} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ color: "black" }} />
              </a>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
