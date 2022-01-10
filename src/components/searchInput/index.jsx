import React from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput(props) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      outlined="none"
      backgroundColor={props.inputColor}
      borderRadius={7}
      sx={props.sx}
    >
      <SearchIcon
        sx={{
          height: "25px",
          width: "25px",
          color: props.iconColor,
          marginLeft: "8px",
        }}
      />
      <InputBase
        id="outlined-basic"
        variant="outlined"
        placeholder="Re:Zero"
        sx={{
          color: props.textColor,
          padding: "0.4rem",
          fontSize: "1rem",
          width: "100%",
        }}
      ></InputBase>
    </Box>
  );
}
