import React from 'react';
import {
  makeStyles,
  withStyles,
  Toolbar,
  Grid,
  Button,
  List,
} from '@material-ui/core';
import BreadcrumbsSalesClient from '../components/breadcrumbsSalesClient';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import DrawerSales from '../components/DrawerSales';

import { bootStrapButton, someStyles } from '../assets/styles/purchase_list';
import SalesClientlist_Table from '../components/tables/salesclient_list';



const BootstrapButton = withStyles({
  root: bootStrapButton,
})(Button);

const useStyles = makeStyles((theme) => someStyles(theme));


export default function SalesClient_List () {
  const classes = useStyles();

  return (
      <>
        <DrawerSales />
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
        <Toolbar className={classes.mainToolbar}>
          <Grid container style={{ width: '100%' }}>
            <Grid container item xs={6} direction="row">
              <BreadcrumbsSalesClient />
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="row-reverse"
              justify="flex-start"
            >
              <Grid item xs={4} align="right">
                <Link to="/createsalesclient">
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                  >
                    Add New Client
                  </BootstrapButton>
                </Link>
              </Grid>
            </Grid>

            <SalesClientlist_Table />
          </Grid>
        </Toolbar>
        </Paper>
        </>
      </>
  );
}
