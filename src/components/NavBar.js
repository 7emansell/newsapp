import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

function refreshPage() {
  window.location.reload(false);
}

export default function NavBar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h1"
            sx={{
              float: "left",
              padding: "20px",
              display: "inline",
            }}
          >
            <Link onClick={refreshPage} color="white" underline="hover">
              The news
            </Link>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              variant="h2"
              sx={{
                padding: "20px",
                display: { xs: "none", sm: "none", md: "inline" },
              }}
            >
              Old news
            </Typography>
          </div>
          <div>
            <Typography
              variant="h2"
              sx={{
                padding: "20px",
                display: { xs: "none", sm: "none", md: "inline" },
              }}
            >
              New news
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="accent"
              aria-label="open drawer"
              sx={{
                ml: 2,
                display: { xs: "inline", sm: "inline", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
