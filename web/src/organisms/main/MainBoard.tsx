import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import { Button, Typography } from '@material-ui/core';

interface MainBoardData {
  data: any;
  handleLoadingModeON: ()=> void;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
   
  },
}));

export default function MainBoard(mainProps: MainBoardData) {
  const classes = useStyles();
  const { data, handleLoadingModeON } = mainProps
  
  return (
    <div className={classes.root}>
      {data ? (
      <div>
      <Button onClick={handleLoadingModeON}>
        <img src="/logo192.png" width="100" height="100"/>
      </Button>
      </div>
      ) : 
       (
        <Box pt={0.5}>
         <Skeleton variant="rect" width={150} height={150}/>
         <Skeleton width="60%" />
         </Box>)
      }
    </div>
  );
}
