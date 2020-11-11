import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainNavBar from './pages/components/MainNavBar';
import MainDrawer from './pages/components/MainDrawer';
import Error from './pages/components/Error';
// *** Import Application pages ***
import Create_Purchase from './pages/purchase_create';
import Purchase_List from './pages/purchase_list';
import Purchase_Details from './pages/purchase_details';
import Purchase_dashboard from './pages/purchase_dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //fontSize: '6px',
  },
  content: {
    flexGrow: '1',
    padding: theme.spacing(3),
    marginTop: theme.spacing(0),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <MainNavBar />
        <MainDrawer />
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Purchase_dashboard} />
            <Route path="/purchaselist" component={Purchase_List} />
            <Route path="/createpurchase" component={Create_Purchase} />
            <Route path="/purchasedetails" component={Purchase_Details} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
