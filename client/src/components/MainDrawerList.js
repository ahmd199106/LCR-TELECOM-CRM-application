import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import GroupIcon from '@material-ui/icons/Group';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import purchaseIcon from "../images/purchasing1.png";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#005FAF', 
    //   fontWeight: '900',
    //   fontSize: 12,
    },
    listItemText:{
        color: '#fff',
        fontWeight: 'bold'
      },
      listItemNeedHelp: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft:0,
        paddingRight: 50,
        display: 'flex',
        backgroundColor:'#004AA5',
        color: '#fff',
        padding:"1px",
        width:"222px"
        
    }
  }));
  
  export default function MainDrawerList() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
   

    return (
        <div className={classes.root}>
          <List component="nav" aria-label="Navigation">
            <ListItem
            style={{fontWeight: '800'}}
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <MoveToInboxIcon style={{color:'#FFF'}}/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" className={classes.listItemText}/>
            </ListItem>
            <ListItem
            style={{backgroundColor:'rgba(16, 156, 241, 0.44)'}}
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <img src={purchaseIcon} style={{marginTop: 5}} alt="Purchase Icon" />
              </ListItemIcon>
              <ListItemText primary="Purchases" className={classes.listItemText}/>
            </ListItem>
          
          <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <GroupIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Clients" className={classes.listItemText}/>
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <ImportExportIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Route Offers" className={classes.listItemText}/>
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <TrackChangesIcon style={{color:'#FFF'}} />
              </ListItemIcon>
              <ListItemText primary="Target" className={classes.listItemText}/>
            </ListItem>



            <ListItem
            className={classes.listItemNeedHelp}
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HelpOutlineIcon fontSize="small" style={{color:'#FFF',marginLeft:'50px',padding:'0px'}} />
              </ListItemIcon>
              <ListItemText primary="Need Help?" className={classes.listItemText}/>
            </ListItem>

            </List>

            
         </div>
  );
}
