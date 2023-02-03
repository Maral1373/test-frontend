import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A0C3D2",
    },
  },
  backgroundColor: "#e8eaf6",
  secondary: {
    main: "#EAC7C7",
  },
  typography: {
    fontFamily: `"Indie Flower", cursive`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    poster: {
      color: "red",
    },
  },
});

export default theme;
