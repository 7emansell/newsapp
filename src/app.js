import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./newsContext";
import News from "./components/News";
import "./style.css";

function App() {
  return (
    <NewsContextProvider>
      <News/>
    </NewsContextProvider>
  );
}

export default App;