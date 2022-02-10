/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/function-component-definition */
/* eslint-disable global-require */
import { Grid, Box } from "@mui/material";
import React from "react";
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
}

const TabPanel: React.FC<TabPanelProps> = ({ value }) => {
  const landingBooks = require("../../../../../server-api/db.json");
  const books: BookType[] = landingBooks.landingBooks;
  return (
    <Box display={value === 0 ? "block" : "none"}>
      <Grid container>
        {books.map((book) => (
          <Grid item xs={3.2} margin="25px 0px 0px 0px">
            <BookCard {...book} owned onClick={() => null} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TabPanel;
