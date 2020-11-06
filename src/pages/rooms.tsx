import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../App.css'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Appbar from '../organisms/Appbar';
import Navi from '../organisms/Navi';

export default function Rooms(): JSX.Element{
  return( 
    <div style={{width:'100%', margin: 0}}>
    <Appbar/>
    <Navi/>

  <div style={{width: '80%', margin: '50px auto'}}>
    <Paper variant="outlined" >

    <Grid container xs={12} spacing={2}>
     <Grid item xs={4} >
        'room1'
      </Grid>
  
      <Grid item xs={4} >
        'room2'
      </Grid>
    </Grid>

    </Paper>
    </div>
  </div>
  );
}