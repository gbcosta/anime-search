import React, { useEffect, useState } from "react";
import { Card, Box, CardMedia } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import api from "../../api/api";
import {
  CardContentNoPadding,
  SynopsisTypography,
  EpisodesTypography,
  AiredTypography,
  SourceTypography,
  TitleTypography,
  StudioTypography,
  ContentWrapper,
  Genre,
  AnimeContentWrapper,
  GenresWrapper,
  GenresContainer,
  theme,
} from "./style";

import "@fontsource/overpass/400.css";
import "@fontsource/overpass/700.css";
import "@fontsource/overpass/500.css";

export default function AnimeCard() {
  const [anime, setAnime] = useState();
  useEffect(() => {
    api.getAnime("1735", setAnime);
  }, []);

  if (!anime) return <p>Loading</p>;

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          display: "flex",
          maxWidth: 460,
          maxHeight: 265,
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
              <TitleTypography component="div">{anime?.title}</TitleTypography>
              <StudioTypography component="div">
                {anime?.studios[0].name}
              </StudioTypography>
            </Box>
          </ContentWrapper>
        </CardContentNoPadding>
        <CardContentNoPadding
          sx={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <AnimeContentWrapper>
            <EpisodesTypography component="div">
              {anime?.episodes} aired on
            </EpisodesTypography>
            <AiredTypography component="div">
              {anime?.aired.string}
            </AiredTypography>
            <SourceTypography component="div" sx={{ marginBottom: "0.5rem" }}>
              source - {anime?.source}
            </SourceTypography>
            <SynopsisTypography component="div">
              {anime?.synopsis}
            </SynopsisTypography>
          </AnimeContentWrapper>
          <GenresWrapper>
            <GenresContainer>
              {anime?.genres.map((genre) => {
                return <Genre>{genre.name}</Genre>;
              })}
            </GenresContainer>
          </GenresWrapper>
        </CardContentNoPadding>
      </Card>
    </ThemeProvider>
  );
}
