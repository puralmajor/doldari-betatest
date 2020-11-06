import React from 'react'
import { Grid,Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    transparent:{ 
        background:'#00ff0000',
        color:'#00ff0000'
      },
}))

export default function GridTool() {
    const classes = useStyles();
    return (
      <Grid item xs={3} >
        <div style={{width : 170, height : 250, margin: '20px auto', marginTop: '10'}}>
          <Button
          component ={Link} to ='/detail'
          style={{marginLeft: 5, marginRight: 5}} 
          variant="contained" 
          className={classes.transparent}
          >
          <img src='https://ifh.cc/g/xc43io.jpg' width="170" height="170"></img>
          </Button>
          <h4>자취방 이름</h4>
          <p>자취방 내용</p>
        </div>
      </Grid>
    )}