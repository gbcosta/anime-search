import React from "react";
import { AppBar, Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchInput from "../searchInput";
import { ToolbarButton } from "./style";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useNavigate, Link } from "react-router-dom";

import "@fontsource/overpass";

export const theme = createTheme({
  typography: {
    fontFamily: ["Overpass"].join(","),
  },
});

export default function Navbar(props) {
  const navigate = useNavigate();

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
            <ToolbarButton>
              <Link to="/" className="link" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </ToolbarButton>

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
              <a
                href="https://github.com/gbcosta"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon sx={{ color: "black" }} />
              </a>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
