import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  scrollStyles: {
    height: 15,
    width: 283,
    left: '0%',
    right: '0.35%',
    top: '96.78%',
    bottom: '0%',
    background: '#DFE8F6',
    borderRadius: '0px 0px 8px 8px',
  },
});

export default function Scroll() {
  const classes = useStyles();
  return (
    <Typography className={classes.scrollStyles}> </Typography>
  );
}
