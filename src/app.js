import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./newsContext";
import News from "./components/News";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function App() {
  return (
    <NewsContextProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <News />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </ThemeProvider>
    </NewsContextProvider>
  );
}

export default App;
