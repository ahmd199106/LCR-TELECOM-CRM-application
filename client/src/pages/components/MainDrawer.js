import React from 'react';
import {Drawer } from '@material-ui/core'
import {ListItem,List,ListItemIcon,ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import GroupIcon from '@material-ui/icons/Group';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import purchaseIcon from "../assets/images/purchasing1.png";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import Toolbar from '@material-ui/core/Toolbar';
import MainDrawerList from './MainDrawerList';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';


const drawerWidth = 242;

const useStyles = makeStyles({
    drawer: {
        display: 'flex',
        width:drawerWidth,
        flexShrink: 0,
        overflow: 'hidden',
    },
    drawerPaper: {
        display: 'flex',
        width: drawerWidth,
        backgroundColor:'#005FAF',
        // backgroundColor:'red'
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
})




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
            style={{backgroundColor:(selectedIndex === 0) && 'rgba(16, 156, 241, 0.44)'}}
              button
              selected={selectedIndex}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <MoveToInboxIcon style={{color:'#FFF',justifyContent: 'flex-end'}}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" style={{color:'white'}}/>
            </ListItem>
            <ListItem
            style={{backgroundColor:(selectedIndex === 1) && 'rgba(16, 156, 241, 0.44)'}}
              button
              selected={selectedIndex }
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <img src={purchaseIcon} style={{marginTop: 5}} alt="Purchase Icon" />
              </ListItemIcon>
              <ListItemText primary="Purchases" style={{color:'white'}}/>
            </ListItem>
          
          <ListItem
          style={{backgroundColor:(selectedIndex === 2) && 'rgba(16, 156, 241, 0.44)'}}
              button
              selected={selectedIndex}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <GroupIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Clients" style={{color:'white'}}/>
            </ListItem>
            <ListItem
            style={{backgroundColor:(selectedIndex === 3) && 'rgba(16, 156, 241, 0.44)'}}
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
            style={{backgroundColor:(selectedIndex === 4) && 'rgba(16, 156, 241, 0.44)'}}
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
              style={{width:'100%', backgroundColor:'#004AA5', color:'white', display:'flex', justifyContent:'center' }}
           
            >
              
              <div style={{display:'flex'}}>

                <HelpOutlineIcon fontSize="small" style={{color:'white',marginTop:'5px',marginRight:'5px'}}  />
   
        
                  <ListItemText primary="Need Help?" style={{color:'white'}}/>
              </div>
               
                  
            </ListItem>
</div>
 </div>
            

            </List>

            
         </div>

     
      </Drawer>

)
}

export default MainDrawer;