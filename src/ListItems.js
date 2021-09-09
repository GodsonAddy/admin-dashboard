import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import { List, ListItem, ListItemText, Collapse , ListItemIcon, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import logo from './assets/vodafone.png';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '1rem'
  },
  nested: {
    padding: theme.spacing(4),
  },
  header: {
    display: 'flex',
    margin: 5
  },
  logo: {
    height: '50px',
    width: '50px',
    marginRight: '5px'
  },
}));

export default function ListItems() {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(true);
  
  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <div >
      
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader" className={classes.header}>
            <img alt="logo" src={logo} className={classes.logo}></img>
            vodafone
            </ListSubheader>
        }
        className={classes.root}
        >
        <Divider />
        <ListItem button>
            <ListItemIcon>
            <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
            </ListItem>
            </List>
        </Collapse>
        <Divider />
        </List>
        
    </div>
  );
}
