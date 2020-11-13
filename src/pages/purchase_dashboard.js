import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import Dashboard_card from './components/cards/dashboard_cout';

const Purchase_dashboard = () => {
  return (
    <>
      <Paper style={{ paddingTop: 100, padding: 100 }}>
        <Grid
          xs={12}
          container
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Dashboard_card color="#6B54C9" />
          <Dashboard_card color="#6CD243" />
          <Dashboard_card color="#E91E63" />
          <Dashboard_card color="#9A0BCC" />
        </Grid>
      </Paper>
    </>
  );
};

export default Purchase_dashboard;
