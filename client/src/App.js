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
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import logo from "./pages/assets/images/LcrTelLogo1.png"
import trendingFlat from "./pages/assets/images/trending_flat_24px_rounded.svg"
import Purchasetable from "./pages/components/Purchasetable"
import MainDrawer from "./pages/components/MainDrawer"



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

const BootstrapButton = withStyles({
  root: {
    position:"absolute",
    right: '0px',
    // position: 'relative',
    // left: '50px',
    marginRight:'0px',
    marginBottom: "5px",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 15px',
    border: '1px solid',
    lineHeight: 1.2,
    backgroundColor: '#005FAF',
    fontWeight:"700",
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);



function App() {
  const classes = useStyles();

  return (
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
        <Toolbar className={classes.mainToolbar} >
          <Grid container style={{width: '100%'}}>
            <Grid container item xs={6} direction="row" justify="flex-start" alignItems="baseline" spacing={1}>
              <Grid item xs={3} align="left">
                <Button  size="small" endIcon={<img alt="trending flat" src={trendingFlat} />} 
                style={{textTransform:'none', marginLeft:'0px', textAlign:'left',fontSize:'large'}} 
                > Dashboard </Button>
              </Grid>
              <Grid item xs={3}>
              <Button disabled  size="small" style={{textTransform:'none'}}>Purchase List</Button>
              </Grid>
            </Grid>
            <Grid container item xs={6} direction="row-reverse" justify="flex-start">
                <Grid item xs={4} align="right">
                  <BootstrapButton variant="contained" color="primary" size="small" startIcon={<AddIcon />}> Add New Purchase </BootstrapButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Purchasetable />
      </main>
    </div>
  );


}

export default App;
