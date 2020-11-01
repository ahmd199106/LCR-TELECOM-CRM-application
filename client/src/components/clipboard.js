  <List>
            {itemsList.map((item, index) => {
                const {text,icon} = item;
                return (
              <ListItem button key={text} autoFocus={true}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} classes={{primary:classes.listItemText}}/>
              </ListItem>
            );
            })}
          </List>

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
<div className={classes.bottomPush}>
               
               <Typography align="center" component="div" variant="h6"
               style={{flexGrow:'1',textAlign: 'center'}}
               ><HelpOutlineIcon style={{marginLeft:'50px'}}/>Need Help?
               </Typography>
          
          </div>