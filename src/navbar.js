import {useContext} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './drawer';
import {DrawerContext} from './context/drawer.context'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const {open, setOpen} = useContext(DrawerContext)

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position='fixed'
        className={clsx(classes.appBar, {[classes.appBarShift]: open})}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => setOpen(prev => !prev)}
            className={clsx(classes.menuButton, {[classes.hide]: open})}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" nowrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <SideDrawer />
    </div>
  );
}
