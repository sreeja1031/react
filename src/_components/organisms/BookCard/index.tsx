import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import Title from '../../atoms/Title';
import Author from '../../atoms/Author';
import Timer from '../../molecules/ReadTime';
import More from '../../atoms/MoreHorizIcon';
import Scroll from '../../atoms/ProgressBar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 466,
    width: 284,
    position: 'absolute',
    boxSizing: 'border-box',
    background: '#FFFFFF',
    left: '40%',
    right: 0,
    top: 50,
    bottom: 0,
  },
  imageStyles: {
    height: 292,
    width: 294.1,
    left: 0,
    top: 0,
  },
});

export default function BookCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} sx={{ borderRadius: 3 }}>
      <CardMedia
        className={classes.imageStyles}
        component="img"
        image="/assets/img1.png"
      />
      <CardContent>
        <Title />
        <Author />
        <Timer />
        <More />
      </CardContent>
      <Scroll />
    </Card>
  );
}
