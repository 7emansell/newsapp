import React, { useContext } from "react";
import { NewsContext } from "../newsContext";
import Story from "./Story";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1> News App 👋</h1>
      <div>
        {data
          ? data.articles.map((news) => (
              <Story data={news} key={news.url} />
            ))
          : "loading story..."}
      </div>
    </div>
  );
}

export default News;