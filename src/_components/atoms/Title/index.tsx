import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  titleStyles: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    lineHeight: 23,
    color: '#03314B',
    left: '5.63%',
    right: '18.31%',
    top: '66.52%',
    bottom: '28.54%',
  },
});

export default function Title() {
  const classes = useStyles();
  return (
    <Typography gutterBottom component="div" className={classes.titleStyles} sx={{ fontWeight: 700, fontSize: 18 }}>
      Beyond Entrepreneurship
    </Typography>
  );
}
