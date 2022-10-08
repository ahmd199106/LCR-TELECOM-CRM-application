import React from 'react';
import { Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import trendingFlat from '../assets/images/trending_flat_24px_rounded.svg';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import DrawerPurchase from '../components/DrawerPurchase';


function createData(parameter, value) {
  return { parameter, value };
}

const rows = [
  createData('Client Name', 'Celltech'),
  createData('Route Name', 'PTD'),
  createData('Destination', 'India'),
  createData('DestinationCode', '84'),
  createData('Rate', '28'),
  createData('ACD', '32'),
  createData('ASR', '28'),
  createData('Date', '14/10/2018'),
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    //backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
    lineHeight: '0.1',
  },
  body: {
    fontSize: 14,
    lineHeight: '0.1',
    paddingRight: '350px',
    paddingLeft: '35px',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '80%',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(13),
    marginTop: theme.spacing(5),
  },
  table: {
    minWidth: 650,
    width: '100%',
    //height:"4px",
    //paddingLeft: "190px",
  },
  mainToolbar: {
    marginTop: theme.spacing(2),
    paddingTop: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    fontWeight: 'bold',
    width: 'auto',
  },
  stepper: {
    fontSize: 18,
  },
}));

export default function Route_Details() {
  const classes = useStyles();

  return (
    <>
       <DrawerPurchase />
        <>
        <Paper
        style={{
          marginTop: 80,
          marginLeft: 290,
          marginRight: 50,
          paddingTop: 25,
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 25,
        }}
      >
      <div>
        <Toolbar className={classes.mainToolbar}>
          <Typography className={classes.stepper} variant="h6" component="div">
            Dashboard
          </Typography>
          <img
            alt="trending flat"
            src={trendingFlat}
            style={{ marginRight: '30px', marginLeft: '5px' }}
          />
          <Typography className={classes.stepper} variant="h6" component="div">
            Route Offer List
          </Typography>
          <img
            alt="trending flat"
            src={trendingFlat}
            style={{ marginRight: '30px', marginLeft: '5px' }}
          />
          <Typography className={classes.stepper} variant="h6" component="div">
           Route Offer Details
          </Typography>
          <img
            alt="trending flat"
            src={trendingFlat}
            style={{ marginRight: '30px', marginLeft: '5px' }}
          />
        </Toolbar>
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer style={{ height: '340px' }}>
            <Table
              className={classes.table}
              //aria-labelledby="tableTitle"
              size="large"
              aria-label="enhanced table"
            >
              <TableHead style={{ display: 'flex',width:"192%" }}>
                {/* <Toolbar style={{backgroundColor:'#DCDCDC',color: '#fff',marginBottom:"10px",width:"65.5%",display: 'flex',}} ></Toolbar> */}
                <Toolbar
                  style={{
                    backgroundColor: '#DCDCDC',
                    color: '#fff',
                    marginBottom: '10px',
                    width: '300%',
                    display: 'flex',
                    //position: 'absolute',
                  }}
                >
                  <Typography 
                  style={{flex:"1 1 100%"}}
                  >
                    <Link to="/routelist" style={{ textDecoration: 'none' }}>
                      <Button
                        style={{
                          textTransform: 'none',
                          backgroundColor: '#2196F3',
                          color: '#fff',
                        }}
                        variant="contained"
                      >
                        Route Offer Details
                      </Button>
                    </Link>
                  </Typography>
                  <Tooltip>
                    <IconButton aria-label="Actions">
                      <GetAppIcon style={{ margin: '8px' }} />
                      <PrintIcon style={{ margin: '8px' }} />
                    </IconButton>
                  </Tooltip>
                </Toolbar>
              </TableHead>

              <TableBody style={{ marginTop: '150px' }}>
                {rows.map((row) => (
                  <StyledTableRow key={row.value}>
                    <StyledTableCell align="left" component="th" scope="row">
                      {row.parameter}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.value}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      </Paper>
      </>
    </>
  );
}
