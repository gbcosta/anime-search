import React from "react";
import { Card, Box, CardMedia } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  CardContentNoPadding,
  SynopsisTypography,
  TitleTypography,
  ContentWrapper,
  AnimeContentWrapper,
  theme,
} from "./style";

import "@fontsource/overpass/";

export default function AnimeCard(props) {
  const anime = props.anime;
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          width: "100%",
          justifyContent: "center",
        }}
        onClick={() => {
          window.open(anime?.url);
        }}
      >
        {" "}
        <Card
          sx={{
            display: "flex",
            maxWidth: { xs: "100%", md: 460, lg: 460 },
            maxHeight: 265,
            ml: { xs: "1rem" },
            mr: { xs: "1rem" },
            width: "100%",
          }}
        >
          <CardContentNoPadding
            sx={{ padding: 0, margin: 0, position: "relative" }}
          >
            <CardMedia
              component="img"
              image={anime?.image_url}
              sx={{ height: 265, width: 178 }}
            />
            <ContentWrapper>
              <Box sx={{ padding: "0.75rem" }}>
                <TitleTypography component="div">
                  {anime?.title}
                </TitleTypography>
              </Box>
            </ContentWrapper>
          </CardContentNoPadding>
          <CardContentNoPadding
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <AnimeContentWrapper>
              <SynopsisTypography component="div">
                {anime?.synopsis}
              </SynopsisTypography>
            </AnimeContentWrapper>
          </CardContentNoPadding>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
