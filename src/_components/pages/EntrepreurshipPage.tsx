/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import * as React from "react";
import { Box, Grid } from "@mui/material";
import CategoryBookList from "../molecules/CategoryBookList";
import SearchBar from "../molecules/SearchBar";
import Banner from "../organisms/Banner";
import FooterComponent from "../organisms/Footer";

// eslint-disable-next-line react/function-component-definition
const EntrePage: React.FC = () => {
  const placeholderText = "Search by title or author";
  const titleBanner = "Explore Books on entrepreneurship";
  const titles = ["Trending Blinks", "Just Added", "Featured Audio Blinks"];
  const bookListsWithCategory = require("../../db.json").entrePage;
  const subtitle =
    "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.";
  return (
    <Grid container direction="column">
      <Grid item>
        <Box marginTop="5%">
          <Banner title={titleBanner} subtitle={subtitle} />
          <SearchBar placeholder={placeholderText} />
          {titles.map((title) => (
            <CategoryBookList
              title={title}
              bookList={bookListsWithCategory[title]}
            />
          ))}
        </Box>
      </Grid>
      <Grid item sx={{ paddingTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
};

export default EntrePage;
