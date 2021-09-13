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

            <NavLink to='/Inbox'>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
            </NavLink>

            <NavLink to='/sentmail'>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItem>
            </NavLink>

            <NavLink to='/Drafts'>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>

            </NavLink>
            <NavLink to='Starred'>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </NavLink>

            <NavLink to='Forms'>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Forms" />
              </ListItem>
            </NavLink>

            <NavLink to='/Analytics'>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ShowChartIcon />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItem>
            </NavLink>

            <NavLink to='/Calendar'>
              <ListItem button>
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>
            </NavLink>
            
          </div>

        </List>
      </NavUnlisted>
    </div>
  );
}
