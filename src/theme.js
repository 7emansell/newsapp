import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0000FF",
    },
    secondary: {
      main: "#97BC62",
    },
  },
  typography: {
    h1: {
      fontFamily: "Forum",
      fontSize: 40,
    },
    p: {
      fontFamily: "Work Sans",
      fontSize: 15,
    },
    time: {
      fontFamily: "Work Sans",
      fontSize: 10,
    },
  },
});
