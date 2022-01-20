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
} from "../animeCard/style";

import { TypeStyle } from "./styles";

import "@fontsource/overpass/";

export default function CharacterCard(props) {
  const character = props.anime;
  const typeAnimeExist = character?.anime.length != 0 ? true : false;
  const typeMangaExist = character?.manga.length != 0 ? true : false;

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
          window.open(character?.url);
        }}
      >
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
              image={character?.image_url}
              sx={{ height: 265, width: 178 }}
            />
            <ContentWrapper>
              <Box sx={{ padding: "0.75rem" }}>
                <TitleTypography component="div">
                  {character?.name}
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
              <TypeStyle>{typeMangaExist ? "manga" : ""}</TypeStyle>
              <SynopsisTypography component="div">
                {typeMangaExist ? character?.manga[0].name : ""}
              </SynopsisTypography>
              <TypeStyle sx={{ paddingTop: typeMangaExist ? 4 : 0 }}>
                {typeAnimeExist ? "anime" : ""}
              </TypeStyle>
              <SynopsisTypography component="div">
                {typeAnimeExist != 0 ? character?.anime[0].name : ""}
              </SynopsisTypography>
            </AnimeContentWrapper>
          </CardContentNoPadding>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
