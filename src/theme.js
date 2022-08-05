import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9CAF88",
    },
    secondary: {
      main: "#6e6259",
    },
    accent: {
      main: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Forum",
      fontSize: 40,
      color: "white",
    },
    h2: {
      fontFamily: "Forum",
      fontSize: 20,
      color: "white",
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
