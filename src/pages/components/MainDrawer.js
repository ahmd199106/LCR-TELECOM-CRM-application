import React from 'react';
import {Drawer } from '@material-ui/core'
import {ListItem,List,ListItemIcon,ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import GroupIcon from '@material-ui/icons/Group';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import purchaseIcon from "../assets/images/purchasing1.png";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';
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
import { Link } from 'react-router-dom';



const drawerWidth = 242;

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

    drawer: {
        display: 'flex',
        width:drawerWidth,
        flexShrink: 0,
        //overflow: 'hidden',
    },
    drawerPaper: {
        display: 'flex',
        width: drawerWidth,
        backgroundColor:'#005FAF',
      },
      drawerContainer: {
        overflow: 'hidden',
        height:'100%'
      },
      listItemText:{
        fontSize:'0.8rem',
        color: '#fff',
        fontWeight: '800',
        backgroundColor:'#005FAF'
      },
    }));




const MainDrawer = (props) => {
    const classes = useStyles();
   
    
    
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
   
    // const itemsList = [
    //     {
    //         text: "Dashboard",
    //         icon: <MoveToInboxIcon style={{color:'#FFF'}}/>
    //     },
    //     {
    //         text: "Purchases",
    //         icon: <img src={purchaseIcon} style={{marginTop: 5}} alt="Purchase Icon" />
    //     },
    //     {
    //         text: "Clients",
    //         icon: <GroupIcon style={{color:'#FFF'}}/>
    //     },
    //     {
    //         text: "Route Offers",
    //         icon: <ImportExportIcon style={{color:'#FFF'}}/>
    //     },
    //     {
    //         text: "Target",
    //         icon: <TrackChangesIcon style={{color:'#FFF'}}/>
    //     },
    // ];

return (
  <>
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

    <Drawer 
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    >
<Toolbar />
        <div className={classes.drawerContainer} >
     
          <List component="nav" aria-label="Navigation" style={{ height:'100%'}} >
            <ListItem
            alignItems="center"
            style={{backgroundColor:(selectedIndex === 0) ? 'rgba(16, 156, 241, 0.44)' : '#005FAF' }}
              button
              selected={selectedIndex}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <MoveToInboxIcon style={{color:'#FFF',justifyContent: 'flex-end'}}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" style={{color:'white'}}/>
            </ListItem>
            <Link to="/purchaselist">
            <ListItem
            style={{backgroundColor:(selectedIndex === 1) ? 'rgba(16, 156, 241, 0.44)' : '#005FAF'}}
              button
              selected={selectedIndex }
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <img src={purchaseIcon} style={{marginTop: 5}} alt="Purchase Icon" />
              </ListItemIcon>
              <ListItemText primary="Purchases" style={{color:'white'}}/>
            </ListItem>
            </Link>
            <Link to="/clientlist">
          <ListItem
          style={{backgroundColor:(selectedIndex === 2) ? 'rgba(16, 156, 241, 0.44)' : '#005FAF'}}
              button
              selected={selectedIndex}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <GroupIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Clients" style={{color:'white'}}/>
            </ListItem>
            </Link>
            <ListItem
            style={{backgroundColor:(selectedIndex === 3) ? 'rgba(16, 156, 241, 0.44)' : '#005FAF'}}
              button
              selected={selectedIndex}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <ImportExportIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Route Offers" style={{color:'white'}}/>
            </ListItem>
            <ListItem
            style={{backgroundColor:(selectedIndex === 4) ? 'rgba(16, 156, 241, 0.44)' : '#005FAF'}}
              button
              selected={selectedIndex}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <TrackChangesIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Target" style={{color:'white'}}/>
            </ListItem>
            <div style={{ height:'100%',  }}>
              <div style={{ position:'absolute', bottom:0, width:'100%',display: 'flex',alignItems:'center'}}>
                <ListItem
                  button
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                  style={{width:'100%', backgroundColor:'#004AA5', color:'white', display:'flex', justifyContent:'flex-end' }}
                >
                  {/* <div style={{display:'flex'}}> */}
                  <ListItemIcon>
                    <HelpOutlineIcon fontSize="small" style={{color:'white',marginTop:'1px',marginLeft:'30px'}}  /></ListItemIcon>
                    <ListItemText primary="Need Help?" style={{color:'white'}}/>
                  {/* </div>     */}
                </ListItem>
              </div>
            </div>
          </List>  
        </div>
      </Drawer>
      </>
)
}

export default MainDrawer;