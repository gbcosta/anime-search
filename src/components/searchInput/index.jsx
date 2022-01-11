import React, { useState } from "react";
import { InputBase, Box, Modal, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getAnimes, setType } from "../../store/animesSlice";
import { BoxStyled } from "./style";

export default function SearchInput(props) {
  const dispatch = useDispatch();

  const type = useSelector((state) => state.animes.value.type);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickSearchInputOption = (value) => {
    dispatch(setType(value));
    handleClose();
  };

  const onValueChanged = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyPressed = (key) => {
    if (key.code == "Enter" && inputValue.length > 3) {
      dispatch(getAnimes(inputValue, "1"));
    }
  };

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
        onKeyPress={onKeyPressed}
        onChange={onValueChanged}
        variant="outlined"
        placeholder="Re:Zero"
        sx={{
          color: props.textColor,
          padding: "0.4rem",
          fontSize: "1rem",
          flex: 1,
        }}
      ></InputBase>
      <Button
        id="basic-button"
        onClick={handleOpen}
        sx={{ color: props.iconColor, mr: "1rem", textTransform: "capitalize" }}
        disableRipple
      >
        {type}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <BoxStyled
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: props.inputColor,
            color: props.iconColor,
            padding: "0 0.5rem 0 0.5rem",
          }}
        >
          <Typography
            sx={{
              padding: "0.5rem 0 0.5rem 0",
              cursor: "pointer  ",
            }}
            onClick={() => {
              handleClickSearchInputOption("anime");
            }}
          >
            Anime
          </Typography>
          <Typography
            sx={{
              padding: "0.5rem 0 0.5rem 0",
              cursor: "pointer",
            }}
            onClick={() => {
              handleClickSearchInputOption("manga");
            }}
          >
            Manga
          </Typography>
          <Typography
            sx={{
              padding: "0.5rem 0 0.5rem 0",
              cursor: "pointer",
            }}
            onClick={() => {
              handleClickSearchInputOption("character");
            }}
          >
            Character
          </Typography>
        </BoxStyled>
      </Modal>
    </Box>
  );
}
