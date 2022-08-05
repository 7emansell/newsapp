import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box
      height={200}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.main"
      color="white"
      fontSize={24}
    >
      <CopyrightIcon />
      <Typography variant="h2">Emma Mansell 2022</Typography>
    </Box>
  );
}
