import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./newsContext";
import News from "./components/News";
import NavBar from "./components/NavBar";

function App() {
  return (
    <NewsContextProvider>
      <NavBar />
      <News/>
    </NewsContextProvider>
  );
}

export default App;