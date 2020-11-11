import React from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const Dashboard_count = ({ color }) => {
  return (
    <Paper
      style={{
        width: 223,
        height: 115,
        backgroundColor: color,
        padding: 10,
      }}
    >
      <Grid xs={12} item>
        <Typography
          style={{
            fontWeight: 500,
            color: 'white',
            fontSize: 15,
            fontFamily: 'roboto',
          }}
        >
          Purchases
        </Typography>
      </Grid>
      <Grid
        xs={12}
        container
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            width: 26,
            height: 26,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        >
          <ArrowUpwardIcon
            // style={{
            //   width: 17,
            //   height: 17,
            //   color: '#247807',
            // }}
            size="small"
          />
        </span>
        &nbsp; &nbsp;
        <Typography
          style={{
            fontWeight: 500,
            fontSize: 40,
            fontFamily: 'roboto',
            color: 'white',
          }}
        >
          50000
        </Typography>
      </Grid>
      <Grid xs={12} item style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          style={{
            fontWeight: 500,
            fontSize: '12',
            fontFamily: 'roboto',
            color: 'white',
            paddingBottom: 5,
          }}
        >
          +25 in this month
        </Typography>
      </Grid>
    </Paper>
  );
};

export default Dashboard_count;
