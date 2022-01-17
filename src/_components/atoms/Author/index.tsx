import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  authorStyles: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 20,
    color: '#6D787E',
    left: '5.63%',
    right: '34.86%',
    top: '74.89%',
    bottom: '20.82%',
  },
});

export default function Author() {
  const classes = useStyles();
  return (
    <Typography
      className={classes.authorStyles}
      sx={{
        margin: '0px 0px 8px 0px',
      }}
    >
      Jim Collins & Bill Lazier
    </Typography>
  );
}
