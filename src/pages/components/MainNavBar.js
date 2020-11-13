import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#FFFFFF',
    height: '64px',
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid container xs={6} spacing={1}>
              <Grid item xs={1}>
                <DehazeIcon
                  fontSize="small"
                  style={{ marginTop: 15, color: '#000' }}
                />
              </Grid>
              <Grid item xs={3}>
                <img src={logo} style={{ marginTop: 5 }} alt="Logo" />
              </Grid>
              <Grid item xs={8}></Grid>
            </Grid>
            <Grid container xs={6}>
              <Grid item xs={9}></Grid>
              <Grid item xs={1}>
                <IconButton>
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon
                      fontSize="small"
                      style={{ marginTop: 5 }}
                    />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item xs={1} align="right">
                <Avatar
                  className={classes.orange}
                  alt="User Image"
                  src={UserImage}
                />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
