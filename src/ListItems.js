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

export default function DrawerItems() {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary='Inbox' />
        </ListItem>
      </List>
    </div>
  );
}
