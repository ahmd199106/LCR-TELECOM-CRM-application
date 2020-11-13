import React from 'react';
import Error from './pages/components/Error';
// *** Import Application pages ***
import Create_Purchase from './pages/purchase_create';
import Purchase_List from './pages/purchase_list';
import Purchase_Details from './pages/purchase_details';
import Purchase_dashboard from './pages/purchase_dashboard';
import Desktop_Login from './pages/desktop_login';
import Price_Table from './pages/price_table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Purchase_dashboard} />
        <Route exact path="/purchaselist" component={Purchase_List} />
        <Route exact path="/createpurchase" component={Create_Purchase} />
        <Route exact path="/purchasedetails" component={Purchase_Details} />
        <Route exact path="/login" component={Desktop_Login} />
        <Route exact path="/pricing" component={Price_Table} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
