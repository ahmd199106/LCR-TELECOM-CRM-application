import React from 'react';
import {Drawer } from '@material-ui/core'
import {ListItem,List,ListItemIcon,ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import GroupIcon from '@material-ui/icons/Group';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import purchaseIcon from "../images/purchasing1.png";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import Toolbar from '@material-ui/core/Toolbar';
import MainDrawerList from './MainDrawerList';


const drawerWidth = 242;

const useStyles = makeStyles({
    drawer: {
        width:drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#005FAF'
      },
      drawerContainer: {
        overflow: 'auto',
      },
      listItemText:{
        fontSize:'0.8rem',
        color: '#fff',
        fontWeight: '800',
        backgroundColor:'#005FAF'
      },
})




const MainDrawer = () => {
    const classes = useStyles();
    const itemsList = [
        {
            text: "Dashboard",
            icon: <MoveToInboxIcon style={{color:'#FFF'}}/>
        },
        {
            text: "Purchases",
            icon: <img src={purchaseIcon} style={{marginTop: 5}} alt="Purchase Icon" />
        },
        {
            text: "Clients",
            icon: <GroupIcon style={{color:'#FFF'}}/>
        },
        {
            text: "Route Offers",
            icon: <ImportExportIcon style={{color:'#FFF'}}/>
        },
        {
            text: "Target",
            icon: <TrackChangesIcon style={{color:'#FFF'}}/>
        },
    ];

return (
    <Drawer 
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
    >
<Toolbar />
        <div className={classes.drawerContainer}>
        <MainDrawerList />






       
        </div>
      </Drawer>

)
}

export default MainDrawer;