import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Grid, IconButton } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import logo from '../assets/images/LcrTelLogo1.png';
import UserImage from '../assets/images/UserImage.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#0DA677',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function MainNavBar() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            spacing={1}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid container xs={6} spacing={1}>
              <Grid item xs={3}>
                <img src={logo} style={{ marginTop: 5 }} alt="Logo" />
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>

            <Button style={{ flexGrow: 1 }} />

            <Link to="/login">
              <Button color="inherit">Contact us</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Registration</Button>
            </Link>
            <Link to="/subscription">
              <Button color="inherit">Pricing</Button>
            </Link>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
