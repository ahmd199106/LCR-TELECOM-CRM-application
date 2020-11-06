import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import trendingFlat from "../assets/images/trending_flat_24px_rounded.svg";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

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





function createData(clientName, routeName, destination, destinationCode, rate, acd, asr, date, action) {
    return { clientName, routeName, destination, destinationCode, rate, acd, asr, date, action };
  }

const rows = [
    createData('Airtel', 'CNN', 'India', 82, 0.125, 6, '55%' , '28/10/2020', <IconButton><SearchIcon /> <CreateIcon /></IconButton> ),
    createData('Etisalat', 'CNN', 'India', 82, 0.125, 6, '55%' , '28/10/2020', <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Pak Tele', 'CNN', 'India', 82, 0.125, 6, '55%' , '28/10/2020' , <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Telecom B', 'CNN', 'India', 82, 0.125, 6, '55%' , '28/10/2020', <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('CSKcom', 'CNN', 'India', 82, 0.125, 6, '55%' , '28/10/2020', <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Honeycomb', 408, 3.2, 87, 6.5, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Jelly Bean', 375, 0.0, 94, 0.0, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('KitKat', 518, 26.0, 65, 7.0, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Lollipop', 392, 0.2, 98, 0.0, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Marshmallow', 318, 0, 81, 2.0, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Nougat', 360, 19.0, 9, 37.0, 124, 124, 82,<IconButton><SearchIcon /> <CreateIcon /></IconButton>),
    createData('Oreo', 437, 18.0, 63, 4.0, 124, 124, 82, <IconButton><SearchIcon /> <CreateIcon /></IconButton>),
  ];


  const StyledTableCell = withStyles((theme) => ({
    head: {
      //backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 12,
      lineHeight:"0.1",
      
    },
    body: {
      fontSize: 12,
      lineHeight:"0.1",
     
      
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);



  function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'clientName', numeric: false, disablePadding: true, label: 'Client Name' },
  { id: 'routeName', numeric: true, disablePadding: false, label: 'Route Name' },
  { id: 'destination', numeric: true, disablePadding: false, label: 'Destination'},
  { id: 'destinationCode', numeric: true, disablePadding: false, label: 'Destination Code' },
  { id: 'rate', numeric: false, disablePadding: false, label: 'Rate' },
  { id: 'acd', numeric: false, disablePadding: true, label: 'ACD' },
  { id: 'asr', numeric: true, disablePadding: true, label: 'ASR' },
  { id: 'date', numeric: true, disablePadding: true, label: 'Date' },
  { id: 'action', numeric: true, disablePadding: true, label: 'Action' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </StyledTableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='center'
            //align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            size='small'
            style={{color:"#778899"}}
            variant="footer"
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </StyledTableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    paddingLeft: theme.spacing(3),
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
    variant="dense"
    style={{backgroundColor:'#004AA5',color: '#fff',padding:"0px",width:"100%"}}
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Purchase List
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <SearchIcon style={{margin:'8px',color: '#fff',}}/>
            <GetAppIcon style={{margin:'8px',color: '#fff',}}/>
            <PrintIcon style={{margin:'8px',color: '#fff',}}/>
            <DeleteSweepIcon style={{margin:'8px',color: '#fff',}}/>
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
    width: '100%',
    //height:"4px",
    //paddingLeft: "30px",
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  mainToolbar: {
    marginTop: theme.spacing(2),
   paddingTop:"80px",
   paddingLeft:"0px",
   paddingRight:"0px",
   fontWeight:"bold",
   width:"auto",
  },
}));

export default function Purchasetable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  



  return (
      <>
        <div>
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
                  <Link to="/createpurchase">
                    <BootstrapButton variant="contained" color="primary" size="small" startIcon={<AddIcon />}> Add New Purchase </BootstrapButton>
                  </Link>
                </Grid>
            </Grid>
          </Grid>
        </Toolbar>

        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer 
            style={{height:'257px'}}
            >
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
                aria-label="enhanced table"
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <StyledTableRow
                          hover
                          onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                          style={{fontSize: '5px'}}
                        >
                          <StyledTableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </StyledTableCell>
                          <StyledTableCell component="th" id={labelId} scope="row">
                            {row.clientName}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.routeName}</StyledTableCell>
                          <StyledTableCell align="center">{row.destination}</StyledTableCell>
                          <StyledTableCell align="center">{row.destinationCode}</StyledTableCell>
                          <StyledTableCell align="left">{row.rate}</StyledTableCell>
                          <StyledTableCell align="left">{row.acd}</StyledTableCell>
                          <StyledTableCell align="left">{row.asr}</StyledTableCell>
                          <StyledTableCell align="left">{row.date}</StyledTableCell>
                          <StyledTableCell align="left">{row.action}</StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <StyledTableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <StyledTableCell colSpan={6} />
                    </StyledTableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              style={{lineHeight: '0.1', height: '40px'}}
            />
          </Paper>
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} color="primary"/>}
            label="Dense"
          />
    </div>
    </>
  );
}