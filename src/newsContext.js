import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "5b6721215c8848a0a4c45e21887951c0";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?domains=newyorker.com&apiKey=5b6721215c8848a0a4c45e21887951c0`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};