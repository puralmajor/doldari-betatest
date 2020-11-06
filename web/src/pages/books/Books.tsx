
import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Appbar from '../../organisms/appbar/Appbar';
import GridTool from '../../organisms/image/Images'

export default function Books(): JSX.Element{
    return(
    <div style={{paddingRight : 200, paddingLeft : 200, paddingTop:200, paddingBottom:100, color:'primary'}}>
     <Appbar/>
     <Paper variant="outlined" >
     <Grid container xs={12} spacing={2} style={{alignContent:'center'} } >
      <GridTool/><GridTool/><GridTool/><GridTool/><GridTool/><GridTool/>
      <GridTool/><GridTool/><GridTool/><GridTool/><GridTool/><GridTool/>
      </Grid>
      </Paper>
      </div>
  )
  }