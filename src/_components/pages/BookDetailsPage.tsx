/* eslint-disable react/function-component-definition */
import React from "react";
import { Grid } from "@mui/material";
import BookDetails from "../organisms/BookDetails";
import FooterComponent from "../organisms/Footer";

const BookDetailsPage: React.FC = () => (
  <>
    <BookDetails />
    <FooterComponent />
  </>
);

export default BookDetailsPage;
