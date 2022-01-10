import { styled, createTheme } from "@mui/material/styles";
import { CardContent, Typography, Box } from "@mui/material/";

const textColor = "hsl(209, 70%, 28%)";
const randomColors = ["#1ea2a4", "#e35259", "#6a9176", "#f25b86", "#2a2a2a"];
const randomColor =
  randomColors[Math.floor(Math.random() * randomColors.length)];

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
  fontSize: "0.6875rem",
  color: textColor,
  paddingRight: "1rem",
}));

export const EpisodesTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color: textColor,
  paddingRight: "1rem",
  fontWeight: 500,
}));

export const AiredTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  color: textColor,
  paddingRight: "1rem",
  fontWeight: 500,
}));

export const SourceTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.6875rem",
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

export const StudioTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  color: "#c46315",
  fontSize: "0.75rem",
}));

export const ContentWrapper = styled(Box)(`
  position: absolute;
  background-color: rgba(22, 22, 22, 0.9);
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
`);

export const Genre = styled(Typography)(({ theme }) => ({
  backgroundColor: randomColor,
  height: "20px",
  borderRadius: 10,
  padding: "0 1rem 0 1rem",
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "white",
  lineHeight: "20px",
  marginLeft: "8px",
}));

export const AnimeContentWrapper = styled(Box)(`
  overflow: hidden;
  text-align: left;
  margin-left: 1rem;
  margin-top: 1rem;
`);

export const GenresWrapper = styled(Box)(`
  min-height: 44px;
  margin-top: auto;
  background-color: #EFF7FB;
  display: flex;
  align-items: center;
`);

export const GenresContainer = styled(Box)(`
  display: flex;
  flex-wrap: wrap;
  max-height: 20px;
  overflow-y: hidden;
`);
