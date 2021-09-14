import React from 'react';
import higherOrderComponent from '../../HOC/wrappedComponent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(10,15),
    },
}))

function Forms (){
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        
        </main>
    );
}
export default higherOrderComponent(Forms)