import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material/";

export const TypographyButton = styled(Typography)(`
  text-align: left; 
  font-size: 1rem;
`);

export const ToolbarButton = (props) => {
  return (
    <Button
      disableRipple
      sx={{
        color: "inherit",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#c9c9c9",
        },
      }}
    >
      <TypographyButton variant="h1" component="div" sx={{ fontWeight: 500 }}>
        {props.children}
      </TypographyButton>
    </Button>
  );
};
