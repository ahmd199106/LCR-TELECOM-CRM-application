import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MainNavBar from "./pages/components/MainNavBar"
import Purchasetable from "./pages/components/Purchasetable";
import MainDrawer from "./pages/components/MainDrawer";
import Error from "./pages/components/Error";
import Form from "./pages/components/Form";
import PurchaseDetails from "./pages/components/PurchaseDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //fontSize: '6px',
  },
  content: {
    flexGrow: '1',
    padding: theme.spacing(3),
    marginTop:theme.spacing(0),
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
                  <Route path="/" component={Purchasetable} exact />
                  <Route path="/createpurchase" component={Form} />
                  <Route path="/purchasedetails" component={PurchaseDetails} />
                  <Route component={Error} />
              </Switch>
      </main>
    </div>
    </Router> 
  );


}

export default App;
