import React from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const Dashboard_count = ({ color,name,value,percentage }) => {
  return (
    <Paper
      style={{
        width: 243,
        height: 115,
        backgroundColor: color,
        padding: 10,
        paddingLeft: 30,
        borderRadius: 10,
      }}
    >
      <Grid xs={12} item>
        <Typography
          style={{
            fontWeight: 700,
            color: 'white',
            fontSize: 15,
            fontFamily: 'roboto',
          }}
        >
          {name}
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
            marginLeft: 5,
            fontWeight: 500,
            fontSize: 40,
            fontFamily: 'roboto',
            color: 'white',
          }}
        >
          {value}
        </Typography>
      </Grid>
      <Grid xs={12} container item  justify = 'center' >
        <Typography
          style={{
            fontWeight: 700,
            fontSize: '12',
            fontFamily: 'roboto',
            color: 'white',
            paddingBottom: 5,
          }}
        >{percentage} in this month</Typography>
      </Grid>
    </Paper>
  );
};

export default Dashboard_count;
