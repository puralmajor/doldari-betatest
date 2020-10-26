import React from 'react'
import MainBoard from '../../organisms/main/MainBoard';
import Paper from '@material-ui/core/Paper';
import { Grid,Button } from '@material-ui/core';
import Appbar from '../../organisms/appbar/Appbar';



export default function Main(): JSX.Element{
const [loadingMode, setLoading] = React.useState(true);

function handleLoadingModeOn(){
  setLoading(true);
}
function handleLoadingModeOff() {
  setLoading(false);
}
  return(
 
  <div style={{width: '70%', margin: '30px auto'}}>
    <Button 
      style={{marginLeft: 5, marginRight: 5}} 
      variant="contained" 
      color="primary" 
      onClick={handleLoadingModeOff}
      > skeletonON 
    </Button>
    <Button
      style={{marginLeft: 5, marginRight: 5}}  
      variant="contained" 
      color="secondary" 
      onClick={handleLoadingModeOn}
      > skeletonOff
    </Button>
  <div style={{padding: 20}}>
   
   <Appbar/>
   <Paper variant="outlined" >

    <Grid container xs={12} spacing={2}>
     <Grid item xs={4} >
        <MainBoard handleLoadingModeON={handleLoadingModeOn} data={loadingMode}/>
      </Grid>
  
      <Grid item xs={4} >
        <MainBoard handleLoadingModeON={handleLoadingModeOn} data={loadingMode}/>
      </Grid>

      <Grid item xs={4}>
        <MainBoard handleLoadingModeON={handleLoadingModeOn} data={loadingMode}/>
      </Grid>

      <Grid item xs={4}>
        <MainBoard handleLoadingModeON={handleLoadingModeOn} data={loadingMode}/>
      </Grid>

    </Grid>
    </Paper>
    </div>
  </div>);
}