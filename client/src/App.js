import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Grid, IconButton } from "@material-ui/core";
import { deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import logo from "./pages/assets/images/LcrTelLogo1.png";
import Purchasetable from "./pages/components/Purchasetable";
import MainDrawer from "./pages/components/MainDrawer";
import Error from "./pages/components/Error";
import Form from "./pages/components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //fontSize: '6px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#FFFFFF' ,
    height: '64px',
  },
  
  content: {
    flexGrow: '1',
    padding: theme.spacing(3),
    marginTop:theme.spacing(0),
  },
  mainToolbar: {
    marginTop: theme.spacing(2),
   paddingTop:"80px",
   paddingLeft:"0px",
   paddingRight:"0px",
   fontWeight:"bold",
   width:"auto",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    
  },
  
  
}));





function App() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={1} >
          <Grid container xs={6} spacing={1}>
            <Grid item xs={1} >
              <DehazeIcon fontSize="small" style={{marginTop: 15, color: '#000'}} />  
            </Grid>
            <Grid item xs={3} >
            <img src={logo} style={{marginTop: 5}} alt="Logo" />
            </Grid>
            <Grid item xs={8} ></Grid>
          </Grid>
          <Grid container xs={6} >
            <Grid item xs={9} ></Grid>
            <Grid item xs={1} >
            <IconButton> 
              <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon fontSize="small" style={{marginTop: 5}} />
              </Badge>
            </IconButton>   
          </Grid>
            <Grid item xs={1} align="right">
              <Avatar className={classes.orange}>N</Avatar>
            </Grid>
            <Grid item xs={1} ></Grid>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <MainDrawer />
      <main className={classes.content}>
       
           
              <Switch>
                  <Route path="/" component={Purchasetable} exact />
                  <Route path="/createpurchase" component={Form} />
                  <Route component={Error} />
              </Switch>
             
        {/* <Purchasetable /> */}
      </main>
    </div>
    </Router> 
  );


}

export default App;
