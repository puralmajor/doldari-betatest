import React from 'react';
import {  Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { ThemeProvider } from '@material-ui/styles';
import '../App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
      textAlign: 'center',
    },

  }),
);

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#a1bdf5',
    },
  },

});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={blueTheme}>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <div className={classes.title}>
          <Link to='/rooms'><Button color="inherit">자취방/쉐어하우스</Button></Link>
          <Link to='/health'><Button color="inherit">헬스장양도</Button></Link>
          <Link to='/books'><Button color="inherit">전공/교양서적 중고거래</Button></Link>
        </div>
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}