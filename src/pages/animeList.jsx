import React from "react";
import AnimeCard from "../components/animeCard";
export default function AnimeList(props) {
  /* useEffect(() => {
    api("anime/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
 */
  return (
    <>
      <AnimeCard />
    </>
  );
}
