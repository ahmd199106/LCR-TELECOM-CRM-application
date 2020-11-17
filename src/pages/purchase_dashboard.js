import React from 'react';
import MainDrawer from '../pages/components/MainDrawer';
import { Link } from 'react-router-dom';
import { Paper, Typography, Grid } from '@material-ui/core';
import Dashboard_card from './components/cards/dashboard_cout';
import ChartStudents from './components/charts/ChartStudents';
import ChartDeals from './components/charts/ChartDeals';
import ChartTasks from './components/charts/ChartTasks';

// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

//   const UpwardIcon = () => { return (<ArrowUpwardIcon size="small" />) };
// const DownwardIcon = () => <ArrowDownwardIcon size="small" style={{color: 'red'}}/>;

const Purchase_dashboard = () => {
  return (
    <>
      <MainDrawer />
      
    <>
      <Paper
        style={{
          marginTop: 80,
          marginLeft: 290,
          marginRight: 50,
          paddingTop: 25,
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 25,
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
        {/* <Link style={{ color:"black"}} to="/purchaselist">
           <h1>button</h1>
           </Link> */}
          <Grid container spacing={1}
          style={{
            width: "80%",
            height: 300,
            backgroundColor: "white",
            margin: "20px auto 10px auto",

            paddingLeft: 30,
            borderRadius: 10,
          }}
          >
            <ChartStudents />
          </Grid>
          <Grid container xs={12} spacing={1}>
            <Grid item xs={5.5}
            style={{
              width: "45%",
              height: 300,
              backgroundColor: "white",
              //margin: "20px auto 10px auto",

              //paddingLeft: 30,
              borderRadius: 10,
              marginLeft: 12,
            }}
            >
              <ChartDeals />
            </Grid>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={5.5}
            style={{
              width: "45%",
              height: 300,
              backgroundColor: "white",
              //paddingLeft: 30,
              borderRadius: 10,
              marginLeft: 0,
            }}
            >
              <ChartTasks />
            </Grid>
          </Grid>
      </Paper>
      
      </>
    </>
  );
};

export default Purchase_dashboard;
