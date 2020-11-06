import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import IconButton from '@material-ui/core/IconButton';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import  Button  from '@material-ui/core/Button';
import SimpleTabs from '../tab/Tab'
import LongMenu from '../menu/Menu'
=======
//Icons
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ChildCareTwoToneIcon from '@material-ui/icons/ChildCareTwoTone';
import  Button  from '@material-ui/core/Button';

>>>>>>> dev

const useStyles = makeStyles((theme) => ({
  height: {
    height: '80px',
  },
  grow: {
    flexGrow: 1,
<<<<<<< HEAD
    backgroundColor: 'transparent',
=======
    backgroundColor: 'secondary',
>>>>>>> dev
  },
  rightButton: {
    marginRight: '300px',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginLeft: '300px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'secondary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    marginRight: 300,
  },

}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.grow} >
      <AppBar position="fixed" color="primary" >
        <Toolbar className={classes.height}>
<<<<<<< HEAD
        <LongMenu/>
        <IconButton className={classes.title} aria-label="logo" color="inherit" component={Link} to="/">
              < ChildCareTwoToneIcon/>
          </IconButton>
            <img src='https://ifh.cc/g/cdfnqb.png'></img>

          <Button component={Link} to="/books" style={{marginLeft: 900}} >
              로그인
          </Button>
            <Button component={Link} to="/rooms">
              회원가입
            </Button>
        </Toolbar>
      </AppBar>
      <SimpleTabs/>

    </div>
  );
}
=======
        
        <IconButton className={classes.title} aria-label="logo" color="inherit" component={Link} to="/">
              < ChildCareTwoToneIcon/>
          </IconButton>
          <Typography variant="h6" noWrap>
            돌다리
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="찾고싶은 물건을 검색하세요"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': '찾고싶은 물건을 검색하세요' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Button component={Link} to="/books" >
              책방
          </Button>
            <Button component={Link} to="/rooms">
              방구하기
            </Button>
            <Button component={Link} to="/health_management">
              헬스장
            </Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
>>>>>>> dev
