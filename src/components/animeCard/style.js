import { styled, createTheme } from "@mui/material/styles";
import { CardContent, Typography, Box } from "@mui/material/";

const textColor = "#222";

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          "*::-webkit-scrollbar": {
            width: "12px",
            height: "12px",
          },
          "*::-webkit-scrollbar-track": {
            background: "#FFFFFF",
            borderRadius: "0px",
            boxShadow: "inset 0px 0px 0px 0px #000000",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#6B6B6B",
            border: "5px solid #FFFFFF",
            borderRadius: "30px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Overpass"].join(","),
  },
});

export const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  margin: 0,
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
`);

export const SynopsisTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: textColor,
  paddingRight: "1rem",
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  color: "white",
  marginBottom: "0.2rem",
  fontSize: "0.875rem",
  fontWeight: 500,
}));

export const ContentWrapper = styled(Box)(`
  position: absolute;
  background-color: rgba(22, 22, 22, 0.9);
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
`);

export const AnimeContentWrapper = styled(Box)(`
  text-align: left;
  margin-left: 1rem;
  margin-top: 1rem;
`);
