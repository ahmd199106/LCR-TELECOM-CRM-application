
import React from 'react';
import { useForm } from "react-hook-form";
import { Grid, IconButton } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import trendingFlat from "../assets/images/trending_flat_24px_rounded.svg";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';


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
  
  


const useStyles = makeStyles((theme) => ({
    form : {
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
        padding: "0px 5px",
        marginLeft:"20px",
        marginRight:"10px",
        textAlign:"left",
      },
    },
    title : {
        flex: '1 1 100%',
    paddingLeft: theme.spacing(3),
    },
    button: {
        //margin: theme.spacing(1.5),
        marginRight: "22px",
        marginBottom:"5px",
        marginTop:"10px",
      },
      buttonSave : {
        marginRight: "22px",
        marginBottom:"5px",
        marginTop:"10px",
        backgroundColor:'#004AA5'
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


export default function Form () {
    const classes = useStyles();
    const {register,handleSubmit,errors} = useForm();
    console.log(register)

    const onSubmit = data => {
        console.log(data);
    }
    
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
              <Grid item xs={3} align="left">
                  <Button  size="small" endIcon={<img alt="trending flat" src={trendingFlat} />} 
                  style={{textTransform:'none', marginLeft:'0px', textAlign:'left',fontSize:'medium'}} 
                  >Purchase List</Button>
                </Grid>
              <Grid item xs={3}>
              <Button disabled  size="small" style={{textTransform:'none'}}>Add New Purchase</Button>
              </Grid>
            </Grid>
            <Grid container item xs={6} direction="row-reverse" justify="flex-start">
                <Grid item xs={4} align="right">
                </Grid>
            </Grid>
          </Grid>
        </Toolbar>

        </div>


    <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)} >
            <Toolbar
                variant="dense"
                style={{backgroundColor:'#004AA5',color: '#fff',padding:"0px",width:"100%"}} >
                    <Typography className={classes.title} variant="subtitle1" id="formTitle" component="div">
                        Add New Purchase 
                    </Typography>
            </Toolbar>
            
            <Grid container direction="row"  alignItems="center" justify="space-around">
                <Grid container item xs={12} style={{width:"100%"}} spacing={0} direction="row">
                <TextField size="small" type="text" label="Client Name" name="clientName" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="Route Name" name="routeName" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="Destination" name="destination" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="Destination Code" name="destinationCode" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="Rate " name="rate" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="ACD" name="acd" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="ASR" name="asr" inputRef={register} variant="filled"/>
                <TextField size="small" type="text" label="Date" name="date" inputRef={register} variant="filled"/>

                </Grid>
                <Grid item xs={12}>
                    <TextField type="text" label="Sales Note" name="salesNote" inputRef={register} variant="outlined"
                    style={{width: '100%',paddingRight:"40px",paddingTop:"0px",paddingBottom:"0px",marginTop:"25px",fontSize:"45"}}
                    defaultValue="Outlined text fields have less visual emphasis than filled text 
                    fields.  When they appear in places like forms" multiline rows={2}
                    >
                    </TextField>    
                </Grid>
                
                <Grid item xs={12}  container direction="row-reverse" alignItems="flex-end"
                style={{backgroundColor:"rgba(218, 218, 218, 0.5)",marginTop:"40px"}}
                >
                    <Button variant="contained" color="secondary" className={classes.button} size="small">
                        Cancel
                    </Button>
                    <Link to="/">
                        <Button variant="contained" color="primary" size="small" 
                        className={classes.buttonSave}  startIcon={<SaveIcon />}>
                            Save
                        </Button>
                    </Link>
                </Grid>
            </Grid>
    
        </form>
    </div>
    </>
    );
    
    
    }