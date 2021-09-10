import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import TodayIcon from '@material-ui/icons/Today';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import logo from './assets/vodafone.png';
import { NavLink } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const NavUnlisted = styled.ul`
  display: flex;
  margin:0;
  padding: 0;
  a {
    text-decoration: none;
  }

  li {
    color: red;
    font-size: 1.3rem;
    list-style: none;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2)
  },
  nested: {
    marginBottom: theme.spacing(2)
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  logo: {
    height: '50px',
    width: '50px',
    margin: '20px'
  },
  
}));

export default function SideBarMenu() {
  const classes = useStyles();
  

  return (
    <div>
      <NavUnlisted>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className={classes.header}>
              <img alt="logo" src={logo} className={classes.logo}></img>
            </ListSubheader>
          }
          className={classes.root}

        >
          <Divider className={classes.nested} />
          <div>
            <ListItem button>
      
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <NavLink to='/Inbox'>
                <ListItemText primary="Inbox" />
              </NavLink>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <NavLink to='/sentmail'>
                <ListItemText primary="Sent mail" />
              </NavLink>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <NavLink to='/Drafts'>
                <ListItemText primary="Drafts" />
              </NavLink>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <NavLink to='Starred'>
                <ListItemText primary="Starred" />
              </NavLink>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <NavLink to='Forms'>
                <ListItemText primary="Forms" />
              </NavLink>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <NavLink to='/Analytics'>
                <ListItemText primary="Analytics" />
              </NavLink>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <NavLink to='/Calendar'>
                <ListItemText primary="Calendar" />
              </NavLink>
            </ListItem>

          </div>

        </List>
      </NavUnlisted>
    </div>
  );
}
