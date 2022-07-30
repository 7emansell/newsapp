import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { NewsContextProvider } from "./newsContext";


const appRoot = document.getElementById("root");
ReactDOM.render(<App />, appRoot);
