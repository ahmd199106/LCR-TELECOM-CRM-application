import React from 'react';
import {
  makeStyles,
  withStyles,
  Toolbar,
  Grid,
  Button,
  List,
} from '@material-ui/core';
import BreadcrumbRoute from '../components/breadcrumbsRoute';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import { bootStrapButton, someStyles } from '../assets/styles/purchase_list';
import Routelist_Table from '../components/tables/route_list';
import DrawerPurchase from '../components/DrawerPurchase';


const BootstrapButton = withStyles({
  root: bootStrapButton,
})(Button);

const useStyles = makeStyles((theme) => someStyles(theme));
export default function Route_List () {
  const classes = useStyles();

  return (
      <>
        <DrawerPurchase />
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
              <BreadcrumbRoute />
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="row-reverse"
              justify="flex-start"
            >
              <Grid item xs={4} align="right">
                <Link to="/createroute">
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                  >
                    Add New Route Offers
                  </BootstrapButton>
                </Link>
              </Grid>
            </Grid>

            <Routelist_Table />
          </Grid>
        </Toolbar>
        </Paper>
        </>
      </>
  );
}