import React from "react";
import { Box, Pagination } from "@mui/material";
import AnimeImage from "../images/original.gif";
import SearchInput from "../components/searchInput";
import { styled } from "@mui/material/styles";

const ImgStyled = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 340,
  },
  [theme.breakpoints.up("sm")]: {
    width: 540,
  },
}));

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
        mr={4}
        ml={4}
      >
        <ImgStyled src={AnimeImage} alt="Banner" />
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
