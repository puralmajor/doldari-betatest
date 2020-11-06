<<<<<<< HEAD
//페이지안에는 페이지를 구성하는 컴포넌트들을 import하여 페이지를 만들 수 있다.
import React from 'react'
import Appbar from '../../organisms/appbar/Appbar';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{width: '70%', margin: '30px auto'}}>
      <Appbar/> 
      <Paper elevation={0}/>
      <Paper />
      <Paper elevation={3} />
    </div>
  );
=======
import React from 'react'
import Appbar from '../../organisms/appbar/Appbar';
export default function Rooms(): JSX.Element{
  return( 
  <div style={{width: '70%', margin: '30px auto'}}>
    <Appbar/> 
    자취방 양도 페이지 입니다.
  </div>);
>>>>>>> dev
}