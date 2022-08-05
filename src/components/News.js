import React, { useContext } from "react";
import { NewsContext } from "../newsContext";
import Story from "./Story";
import Typography from "@mui/material/Typography";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div style={{ display: "flex", padding: "10px", flexDirection: "column" }}>
      {data
        ? data.articles.map((news) => <Story data={news} key={news.url} />)
        : "loading story..."}
    </div>
  );
}

export default News;
