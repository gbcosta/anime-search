import React from "react";
import { Box, Pagination } from "@mui/material";
import AnimeImage from "../images/original.gif";
import SearchInput from "../components/searchInput";

export default function Home(props) {
  return (
    <Box>
      <Pagination></Pagination>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={10}
        paddingTop="32px"
      >
        <img src={AnimeImage} alt="" width={540} />
        <SearchInput
          iconColor="#000000"
          inputColor="rgb(255, 255, 255)"
          textColor="#000000"
          sx={{ width: "100%", maxWidth: 600 }}
        />
      </Box>
    </Box>
  );
}
