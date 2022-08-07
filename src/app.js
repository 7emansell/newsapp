import { API_KEY } from "./config";
import { makeStyles } from "@mui/styles";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Box from "@mui/material/Box";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NavBar from "./components/NavBar";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Story from "./components/Story";
import Typography from "@mui/material/Typography";

function App() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?domains=newyorker.com&apiKey=${API_KEY}`
    );
    const data = res.data.articles;
    const slice = data.slice(offset, offset + perPage);
    const articleData = slice.map((a) => <Story data={a} key={a.url} />);
    setData(articleData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  const useStyles = makeStyles({
    pagination: {
      fontFamily: "Forum",
      display: "flex",
      listStyle: "none",
      outline: "none",
      "& li": {
        padding: "15px",
        "&.break": {
          textDecoration: "none",
          cursor: "pointer",
        },
        "&.previous.disabled": {
          display: "none",
        },
        "&.selected": {
          borderColor: "white",
          outline: "solid",
        },
      },
      "& li:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {data}
      <Box
        height={200}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="primary.main"
        color="white"
        fontSize={24}
      >
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next "}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={classes.pagination}
        />
        <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
          <CopyrightIcon />
          <Typography variant="h2">Emma Mansell 2022</Typography>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
