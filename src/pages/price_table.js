import React from 'react';
import WebNavBar from './components/websiteNavbar';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';

const Price_Table = () => {
  return (
    <>
      <WebNavBar />
      <Container style={{ marginTop: 100 }}>
        <Grid xs={12} item style={{ textAlign: 'center' }}>
          <Typography
            variant="button"
            style={{ color: '#09762E', fontWeight: 700, fontSize: 23 }}
          >
            CHOOSE YOUR BEST PLAN
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Paper style={{ height: 500, padding: 30, display: 'flex' }}>
            <Grid
              xs={5}
              item
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="button" style={{ fontSize: 20 }}>
                Pricing
              </Typography>
              <span style={{ color: 'grey' }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </span>
              <br />
              <span style={{ color: 'grey' }}>Do you need a spcial offer?</span>
              <br />
              <span style={{ color: 'grey' }}> Write us</span>
            </Grid>
            <Grid
              xs={5}
              item
              style={{
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Paper style={{ height: 400, width: 300 }}>
                <div
                  style={{
                    height: 50,
                    backgroundColor: '#56CCF2',
                    paddingTop: 10,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Basic
                </div>
                <Grid
                  xs={12}
                  item
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <Typography style={{ fontSize: 40, color: '#FF0000' }}>
                      $10
                    </Typography>
                    <Typography>per month</Typography>
                    <br />
                    <Typography>1 MillionUser </Typography>
                    <Typography> 1000Email Previews</Typography>{' '}
                    <Typography>Roughts</Typography>{' '}
                    <Typography>Databse</Typography>
                  </div>
                  <br />
                  <br />
                  <Button
                    style={{
                      backgroundColor: '#0DA677',
                      variant: 'contained',
                      color: 'white',
                      width: 200,
                    }}
                    size="large"
                  >
                    Choose
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid
              xs={5}
              item
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Paper style={{ height: 400, width: 300 }}>
                <div
                  style={{
                    height: 50,
                    backgroundColor: '#F2C94C',
                    paddingTop: 10,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Advanced
                </div>
                <Grid
                  xs={12}
                  item
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <Typography style={{ fontSize: 40, color: '#FF0000' }}>
                      $20
                    </Typography>
                    <Typography>per month</Typography>
                    <br />
                    <Typography>1 MillionUser </Typography>
                    <Typography> 1000Email Previews</Typography>{' '}
                    <Typography>Roughts</Typography>{' '}
                    <Typography>Databse</Typography>
                  </div>
                  <br />
                  <br />
                  <Button
                    style={{
                      backgroundColor: '#0DA677',
                      variant: 'contained',
                      color: 'white',
                      width: 200,
                    }}
                    size="large"
                  >
                    Choose
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Price_Table;
