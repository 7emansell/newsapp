import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

function Story({ data }) {
  return (
    <Card
      sx={{ margin: "15px", display: "flex", flexDirection: "row" }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h1">
          <Link href={data.url} color="black" underline="hover">
            {data.title}
          </Link>
        </Typography>
        <Typography variant="p">{data.description}</Typography> <br />
        <Typography variant="p">
          By{" "}
          <Link href={data.url} color="black" underline="hover">
            {data.author}
          </Link>
        </Typography>{" "}
        <br />
        <Typography variant="time">
          {" "}
          {data.publishedAt.split("T")[0]}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="300px" src={data.urlToImage} />
    </Card>
  );
}

export default Story;
