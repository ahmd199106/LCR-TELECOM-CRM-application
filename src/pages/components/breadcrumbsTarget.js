import React from 'react';
import { Typography } from '@material-ui/core';
import trendingFlat from '../assets/images/trending_flat_24px_rounded.svg';

const BreadcrumbTarget = () => {
  const classes = {
    stepperdisabled: {
      fontSize: 18,
      marginBottom: '15px',
    },
    stepper: {
      fontSize: 18,
      marginLeft: '0px',
      marginBottom: '15px',
    },
  };
  return (
    <>
      <Typography className={classes.stepper} variant="h6" component="div">
        Dashboard
      </Typography>
      <img
        alt="trending flat"
        src={trendingFlat}
        style={{
          marginRight: '30px',
          marginLeft: '5px',
          marginBottom: '0px',
        }}
      />
      <Typography
        className={classes.stepperdisabled}
        variant="h6"
        component="div"
        style={{ color: 'lightgrey' }}
      >
        Target List
      </Typography>
    </>
  );
};

export default BreadcrumbTarget;