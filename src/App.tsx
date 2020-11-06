import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//organisms
//pages
import Rooms from './pages/rooms';
import Main from './pages/main';
import Books from './pages/books';
import Health from './pages/health';
import {makeStyles,  createMuiTheme, ThemeProvider} from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
  },
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '70px',
    minHeight: 'calc(100vh - 123px)',
    width: '100%',
  },

}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#90caf9',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffffff',
    },
  },
});


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.content}>
      <CssBaseline />
    
      <BrowserRouter>
      
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route exact path="/books" component={Books}/>
          <Route exact path="/health" component={Health}/>
        </Switch>
      
      </BrowserRouter>
    
    </div>
    </ThemeProvider>
  );
}

export default App;

