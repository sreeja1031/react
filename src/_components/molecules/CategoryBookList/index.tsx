/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookCard from "../../organisms/BookCard";

interface BookType {
  title?: string;
  author?: string;
  readTime?: string;
  reads?: string;
  imagePath: string;
  owned?: boolean;
}

interface CategoryBookListProps {
  title: string;
  bookList: BookType[];
}

const CategoryBookList: React.FC<CategoryBookListProps> = ({
  title,
  bookList,
}) => {
  const navigator = useNavigate();
  const boxStyling = {
    margin: "5% 18.5% 5% 18.5%",
    padding: " 0%",
  };
  const OnClick = () => {
    navigator("/bookDetails");
  };
  return (
    <Box sx={boxStyling}>
      <Typography variant="h3" marginBottom="30px">
        {title}
      </Typography>
      <Grid container>
        {bookList.map((book) => (
          <Grid item xs={4} marginBottom="5%">
            <BookCard {...book} onClick={OnClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryBookList;
