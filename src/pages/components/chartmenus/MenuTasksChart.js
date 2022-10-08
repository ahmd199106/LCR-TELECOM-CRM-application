import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function MenuTasksChart() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" 
      size="small"
      aria-haspopup="true" onClick={handleClick}
      style={{textTransform: 'none',color:"#30FCFC",fontWeight:300}}
      endIcon={<ExpandMoreIcon style={{color:"#30FCFC"}} />}
      >
          <Typography variant="button"
          style={{textTransform: 'none',fontSize:13,color:"black"}}
          >Show&nbsp;:&nbsp;</Typography>
        This Month
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>This Week</MenuItem>
        <MenuItem onClick={handleClose}>This Month</MenuItem>
        <MenuItem onClick={handleClose}>This Year</MenuItem>
      </Menu>
    </div>
  );
}