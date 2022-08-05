import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

function Story({ data }) {
  return (
    <Card
      sx={{
        margin: "15px",
        display: "flex",
        height: "300px",
        flexDirection: "row",
      }}
      variant="outlined"
    >
      <CardContent
        sx={{
          margin: "15px",
          display: "flex",
          height: "300px",
          minWidth: 300,
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Typography variant="h1">
          <Link href={data.url} color="black" underline="hover">
            {data.title}
          </Link>
        </Typography>{" "}
        <br />
        <Typography
          variant="p"
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
        >
          {data.description}
        </Typography>{" "}
        <br />
        <Typography variant="p">
          By{" "}
          <Link href={data.url} color="black" underline="hover">
            {data.author}
          </Link>
        </Typography>{" "}
        <br />
        <Typography
          variant="time"
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        >
          {" "}
          {data.publishedAt.split("T")[0]}
        </Typography>
      </CardContent>
      <div
        style={{
          float: "right",
          height: "300px",
          width: "300px",
        }}
      >
        <CardMedia
          component="img"
          height="300px"
          src={data.urlToImage}
          sx={{
            minWidth: "300px",
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        />
      </div>
    </Card>
  );
}

export default Story;
