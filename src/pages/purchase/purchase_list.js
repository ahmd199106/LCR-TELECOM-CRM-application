import React from 'react';
import {
  makeStyles,
  withStyles,
  Toolbar,
  Grid,
  Button,
  List,
} from '@material-ui/core';
import Breadcrumb from '../components/breadcrumbs';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';

import { bootStrapButton, someStyles } from '../assets/styles/purchase_list';
import Purchaselist_Table from '../components/tables/purchase_list';
import DrawerPurchase from '../components/DrawerPurchase';


const BootstrapButton = withStyles({
  root: bootStrapButton,
})(Button);

const useStyles = makeStyles((theme) => someStyles(theme));
export default function Purchase_List () {
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
              <Breadcrumb />
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="row-reverse"
              justify="flex-start"
            >
              <Grid item xs={4} align="right">
                <Link to="/createpurchase">
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                  >
                    Add New Purchase
                  </BootstrapButton>
                </Link>
              </Grid>
            </Grid>

            <Purchaselist_Table />
          </Grid>
        </Toolbar>
        </Paper>
        </>
      </>
  );
}
