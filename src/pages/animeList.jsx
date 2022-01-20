import React from "react";
import AnimeCard from "../components/animeCard";
import CharacterCard from "../components/characterCard";
import { Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function AnimeList(props) {
  const animes = useSelector((state) => state.animes.value.animes);
  const type = useSelector((state) => state.animes.value.type);

  const animesCard = () => {
    if (type == "character")
      return (
        <Grid container spacing={2}>
          {animes?.map((anime) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={anime.mal_id}
              justifyContent="center"
            >
              <CharacterCard anime={anime}></CharacterCard>
            </Grid>
          ))}
        </Grid>
      );

    return (
      <Grid container spacing={2}>
        {animes?.map((anime) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={anime.mal_id}
            justifyContent="center"
          >
            <AnimeCard anime={anime}></AnimeCard>
          </Grid>
        ))}
      </Grid>
    );
  };

  if (!animesCard()) return <div>Carregando</div>;

  return (
    <>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        sx={{ color: "#c7c7c7", margin: "2rem" }}
      >
        Animes
      </Typography>
      <Grid container spacing={2}>
        {animesCard()}
      </Grid>
    </>
  );
}
