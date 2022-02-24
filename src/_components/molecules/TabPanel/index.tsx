/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/function-component-definition */
/* eslint-disable global-require */
import { Grid, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import axios from "axios";
import BookCard from "../../organisms/BookCard";

interface TabPanelProps {
  value?: number;
}
interface BookType {
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  imagePath: string;
  owned?: boolean;
  id?: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ value }) => {
  const AddToFinish = useSelector((state: RootStateOrAny) => state.AddToFinish);
  const landingBooks = require("../../../../db.json");
  const books: BookType[] = landingBooks.landingBooks;
  console.log(books);
  const [finishedBooks, setFinishedBooks] = useState<BookType[]>();
  useEffect(() => {
    async function getData() {
      const booksFromServer = await axios
        .get("http://localhost:3006/finished")
        .then((response: { data: any }) => response.data);
      return booksFromServer as BookType[];
    }
    getData()
      .then((res) => setFinishedBooks(res))
      .catch((reject) => console.log(reject));
  });
  return (
    <>
      <Box display={value === 0 ? "block" : "none"}>
        <Grid container>
          {books.map((book) => (
            <Grid item xs={3.2} margin="25px 0px 0px 0px">
              <BookCard {...book} onClick={() => null} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        display={value === 1 ? "block" : "none"}
        marginBottom={value === 1 ? "20%" : "0"}
      >
        <Grid container sx={{ marginTop: "10%" }}>
          {AddToFinish && finishedBooks !== null && finishedBooks !== undefined
            ? finishedBooks.map((book) => (
                <BookCard
                  title={book.title}
                  owned={book.owned}
                  imagePath={book.imagePath}
                  reads={book.reads}
                  readTime={book.readTime}
                  onClick={() => null}
                  author={book.author}
                  percentComplete={100}
                />
              ))
            : null}
        </Grid>
      </Box>
    </>
  );
};

export default TabPanel;
