export const bootStrapButton = {
  position: 'absolute',
  right: '0px',
  // position: 'relative',
  // left: '50px',
  marginRight: '0px',
  marginBottom: '5px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  padding: '6px 15px',
  border: '1px solid',
  lineHeight: 1.2,
  backgroundColor: '#005FAF',
  fontWeight: '700',
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
};

// Styles goes here
export const someStyles = (theme) => {
  return {
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
      paddingTop: '0px',
      paddingLeft: '0px',
      paddingRight: '0px',
      fontWeight: 'bold',
      width: 'auto',
    },
  };
};
