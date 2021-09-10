import React from 'react';
import Login from './Login.js';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import AdminDashboard from './admin-dashboard';
import Analytics from './SideBarItems/analytics';
import Calendar from './SideBarItems/calendar';
import SentMail from './SideBarItems/sentmail';
import Forms from './SideBarItems/forms';
import Inbox from './SideBarItems/inbox';
import Starred from './SideBarItems/starred';
import Drafts from './SideBarItems/drafts';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(',')
  },
  palette: {
    primary: {
      main: '#D93B30'
    }
  }
})

function App() {
  return (
    <div>
    <ThemeProvider theme={theme} >
      <Switch>
        <Route  exact path="/" component={Login} />
        <Route exact path="/Home" component={AdminDashboard} />
        <Route  exact path="/Inbox" component={Inbox} />
        <Route exact path="/sentmail" component={SentMail} />
        <Route exact path="/Starred" component={Starred} />
        <Route exact path="/Analytics" component={Analytics} />
        <Route exact path="/Forms" component={Forms} />
        <Route exact path="/Calendar" component={Calendar} />
        <Route exact path="/Drafts" component={Drafts} />
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
