import React from 'react';

import { Grid, TextField, Button, Avatar, Paper } from '@material-ui/core';
import WebsiteNavBar from './components/websiteNavbar';

const Desktop_Login = () => {
  return (
    <>
      <WebsiteNavBar />

      <Grid
        xs={12}
        style={{ paddingTop: 100, display: 'flex', justifyContent: 'center' }}
      >
        <Grid xs={7} item style={{ display: 'flex', height: 400 }}>
          <Paper style={{ display: 'flex' }}>
            <Grid xs={5} item style={{ backgroundColor: 'blue' }}></Grid>
            <Grid xs={7} item>
              <Grid
                xs={12}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  height: '100%',
                }}
              >
                <Grid xs={9} container spacing={2}>
                  <Grid
                    xs={12}
                    item
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar style={{ backgroundColor: 'orange' }}>N</Avatar>
                    <span>Sign into your Account</span>
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      variant="outlined"
                      placeholder="Username"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      variant="outlined"
                      placeholder="Password"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: 10,
                      color: 'grey',
                      marginTop: -15,
                    }}
                  >
                    <span>Remeber me </span>
                    <span>Forgot Password</span>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      size="small"
                    >
                      Get Started
                    </Button>
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: 10,
                      color: 'grey',
                      marginTop: -15,
                    }}
                  >
                    <span>
                      Don't have account, <a href="#">SignUp</a>
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Desktop_Login;
