import React from 'react';
import MainNavBar from '../pages/components/MainNavBar';
import MainDrawer from '../pages/components/MainDrawer';
import { Link } from 'react-router-dom';
import { Paper, Typography, Grid } from '@material-ui/core';
import Dashboard_card from './components/cards/dashboard_cout';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

//   const UpwardIcon = () => { return (<ArrowUpwardIcon size="small" />) };
// const DownwardIcon = () => <ArrowDownwardIcon size="small" style={{color: 'red'}}/>;

const Purchase_dashboard = () => {
  return (
    <>
      <MainNavBar />
      <MainDrawer />

      <Paper
        style={{
          marginTop: 60,
          padding: 50,
        }}
      >
        <Grid xs={12} container justify="space-between">
          <Dashboard_card
            color="#6B54C9"
            name="Purchase"
            value="500000"
            percentage="+25"
          />
          <Dashboard_card
            color="#6CD243"
            name="Clients"
            value="569"
            percentage="+89"
          />
          <Dashboard_card
            color="#E91E63"
            name="Route Offers"
            value="301"
            percentage="-10"
          />
          <Dashboard_card
            color="#9A0BCC"
            name="Targets"
            value="568"
            percentage="-30"
          />
        </Grid>
        <Link to="/Purchase_List">button</Link>
      </Paper>
    </>
  );
};

export default Purchase_dashboard;
