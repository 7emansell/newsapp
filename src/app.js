import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./newsContext";
import News from "./components/News";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Footer from "./components/Footer";

function App() {
  return (
    <NewsContextProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <News />
        <Footer />
      </ThemeProvider>
    </NewsContextProvider>
  );
}

export default App;
