/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "../organisms/Header";
import BookDetails from "../organisms/BookDetails";
import FooterComponent from "../organisms/Footer";

const BookDetailsPage: React.FC = () => (
  // const { bookName } = useParams<{ bookName: string }>();
  // const books = require("../../../../server-api/db.json");
  // const bookInfo = books[bookName];
  // const onFinishedClick = async () => {
  //   const axios = require("axios").default;
  //   const book = {
  //     title: bookInfo.title,
  //     reads: bookInfo.reads,
  //     readTime: bookInfo.readTime,
  //     author: bookInfo.author,
  //     imagePath: bookInfo.imagePath,
  //     owned: true,
  //     id: bookInfo.title,
  //   };
  //   await axios
  //     .post("http://localhost:3001/finished", book)
  //     .then(() => {
  //       console.log("added");
  //     })
  //     .catch(() => {
  //       console.log("Cannot Add ,Already Present");
  //     });
  // };
  <Grid container direction="column">
    <Grid item>
      <Header />
    </Grid>
    <BookDetails />
    <Grid item>
      <FooterComponent />
    </Grid>
  </Grid>
);
export default BookDetailsPage;
