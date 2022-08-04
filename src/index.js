import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from "./theme";

const appRoot = document.getElementById("root");
ReactDOM.render(<ThemeProvider theme={theme}> <App /> </ThemeProvider>, appRoot);
