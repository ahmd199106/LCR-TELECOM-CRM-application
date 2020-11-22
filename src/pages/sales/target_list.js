import React from 'react';
import {
  makeStyles,
  withStyles,
  Toolbar,
  Grid,
  Button,
  List,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import BreadcrumbsSalesTarget from '../components/breadcrumbsSalesTarget';
import AddIcon from '@material-ui/icons/Add';
import { Paper, Typography } from '@material-ui/core';
import { bootStrapButton, someStyles } from '../assets/styles/purchase_list';
import Targetlist_Table from '../components/tables/target_list';
import DrawerSales from '../components/DrawerSales';


const BootstrapButton = withStyles({
  root: bootStrapButton,
})(Button);

const useStyles = makeStyles((theme) => someStyles(theme));


export default function SalesTarget_List () {
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
              <BreadcrumbsSalesTarget />
            </Grid>
            <Grid
              container
              item
              xs={6}
              direction="row-reverse"
              justify="flex-start"
            >
              <Grid item xs={4} align="right">
                <Link to="/salescreatetarget">
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                  >
                    Add New Target Offers
                  </BootstrapButton>
                </Link>
              </Grid>
            </Grid>

            <Targetlist_Table />
          </Grid>
        </Toolbar>
        </Paper>
        </>
      </>
  );
}