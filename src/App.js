import React from 'react';
import Error from './pages/components/Error';
// *** Import Application pages ***
import Create_Purchase from './pages/purchase/purchase_create';
import Purchase_List from './pages/purchase/purchase_list';
import Purchase_Details from './pages/purchase/purchase_details';
import Purchase_dashboard from './pages/purchase/purchase_dashboard';
import Create_Client from './pages/purchase/client_create';
import Client_List from './pages/purchase/client_list';
import Client_Details from './pages/purchase/client_details';
import Create_Route from './pages/purchase/route_create';
import Route_List from './pages/purchase/route_list';
import Route_Details from './pages/purchase/route_details';
import Create_Target from './pages/purchase/target_create';
import Target_List from './pages/purchase/target_list';
import Target_Details from './pages/purchase/target_details';
import Sales_dashboard from './pages/sales/sales_dashboard';
import Create_Sales from './pages/sales/sales_create';
import Sales_List from './pages/sales/sales_list';
import Sales_Details from './pages/sales/sales_details';
import Create_SalesClient from './pages/sales/client_create';
import SalesClient_List from './pages/sales/client_list';
import SalesClient_Details from './pages/sales/client_details';
import Create_SalesRoute from './pages/sales/route_create';
import SalesRoute_List from './pages/sales/route_list';
import SalesRoute_Details from './pages/sales/route_details';
import Create_SalesTarget from './pages/sales/target_create';
import SalesTarget_List from './pages/sales/target_list';
import SalesTarget_Details from './pages/sales/target_details';



import Desktop_Login from './pages/desktop_login';
import Price_Table from './pages/price_table';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Desktop_Login} />
        <Route exact path="/pricing" component={Price_Table} />
        <Route exact path="/" component={Purchase_dashboard} />
        <Route exact path="/purchaselist" component={Purchase_List} />
        <Route exact path="/createpurchase" component={Create_Purchase} />
        <Route exact path="/purchasedetails" component={Purchase_Details} />
        <Route exact path="/clientlist" component={Client_List} />
        <Route exact path="/createclient" component={Create_Client} />
        <Route exact path="/clientdetails" component={Client_Details} />
        <Route exact path="/routelist" component={Route_List} />
        <Route exact path="/createroute" component={Create_Route} />
        <Route exact path="/routedetails" component={Route_Details} />
        <Route exact path="/targetlist" component={Target_List} />
        <Route exact path="/createtarget" component={Create_Target} />
        <Route exact path="/targetdetails" component={Target_Details} />
        <Route exact path="/salesdashboard" component={Sales_dashboard} />
        <Route exact path="/saleslist" component={Sales_List} />
        <Route exact path="/createsales" component={Create_Sales} />
        <Route exact path="/salesdetails" component={Sales_Details} />
        <Route exact path="/salesclientlist" component={SalesClient_List} />
        <Route exact path="/createsalesclient" component={Create_SalesClient} />
        <Route exact path="/salesclientdetails" component={SalesClient_Details} />
        <Route exact path="/salesroutelist" component={SalesRoute_List} />
        <Route exact path="/createsalesroute" component={Create_SalesRoute} />
        <Route exact path="/salesroutedetails" component={SalesRoute_Details} />
        <Route exact path="/salestargetlist" component={SalesTarget_List} />
        <Route exact path="/salescreatetarget" component={Create_SalesTarget} />
        <Route exact path="/salestargetdetails" component={SalesTarget_Details} />

        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
