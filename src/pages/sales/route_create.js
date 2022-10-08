import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import trendingFlat from '../assets/images/trending_flat_24px_rounded.svg';
import { Link } from 'react-router-dom';
import DrawerSales from '../components/DrawerSales';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  form: {
    //flexGrow: 1,
    display: 'flex',
    //fontSize: '6px',
    width: '845px',
    height: '620px',
    margin: '35px auto',
    boxShadow: '0 8px 6px -6px',
    border: '1px solid',
    borderColor: '#D3D3D3',
    '& .MuiTextField-root': {
      marginTop: theme.spacing(6),
      width: '50ch',
      padding: '0px 5px',
      marginLeft: '20px',
      marginRight: '10px',
      textAlign: 'left',
    },
  },
  title: {
    flex: '1 1 100%',
    paddingLeft: theme.spacing(3),
  },
  button: {
    //margin: theme.spacing(1.5),
    marginRight: '22px',
    marginBottom: '5px',
    marginTop: '10px',
  },
  buttonSave: {
    marginRight: '22px',
    marginBottom: '5px',
    marginTop: '10px',
    backgroundColor: '#2196F3',
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

export default function Create_SalesRoute() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  console.log(register);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <DrawerSales />
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
          <Typography
            className={classes.stepper}
            variant="h6"
            component="div"
            style={{ color: 'lightgrey' }}
          >
             Route Offer Details
          </Typography>
        </Toolbar>
      </div>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Toolbar
            variant="dense"
            style={{
              backgroundColor: '#DCDCDC',
              color: '#fff',
              padding: '0px',
              width: '100%',
            }}
          >
            <Typography
              className={classes.title}
              variant="subtitle1"
              id="formTitle"
              component="div"
            >
             <Button
                size="small"
                style={{
                textTransform: 'none',
                backgroundColor: '#2196F3',
                color: '#fff',
                marginLeft: 0,
                //width: 140,
                fontWeight: 700,
                paddingTop: '5px',
                paddingBottom: '5px',
                }}
                variant="contained"
                >
              Add New Route Offer
              </Button>
            </Typography>
          </Toolbar>

          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            <Grid
              container
              item
              xs={12}
              style={{ width: '100%' }}
              spacing={0}
              direction="row"
            >
              <TextField
                size="small"
                type="text"
                label="Client Name"
                name="clientName"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="Route Name"
                name="routeName"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="Destination"
                name="destination"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="Destination Code"
                name="destinationCode"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="Rate"
                name="rate"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="ACD"
                name="acd"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="ASR"
                name="asr"
                inputRef={register}
                variant="filled"
              />
              <TextField
                size="small"
                type="text"
                label="Date"
                name="date"
                inputRef={register}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Sales Note"
                name="salesNote"
                inputRef={register}
                variant="outlined"
                style={{
                  width: '100%',
                  paddingRight: '40px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                  marginTop: '25px',
                  fontSize: '45',
                }}
                defaultValue="Outlined text fields have less visual emphasis than filled text 
                        fields.  When they appear in places like forms"
                multiline
                rows={2}
              ></TextField>
            </Grid>

            <Grid
              item
              xs={12}
              container
              direction="row-reverse"
              alignItems="flex-end"
              style={{
                backgroundColor: 'rgba(218, 218, 218, 0.5)',
                marginTop: '40px',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                size="small"
              >
                Cancel
              </Button>
              <Link to="/salesroutedetails">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.buttonSave}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
      </Paper>
      </>
    </>
  );
}