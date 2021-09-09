import React from "react";
import NavBar from "./navbar";
import ListDrawer from "./drawer";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      fontFamily: 'Poppins'
    },
}))

const AllBar = () => {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ListDrawer />
            <NavBar />
        </div>
    )
}
export default AllBar;