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
import ProtectedRoute from './protectedRoute.js';



function App() {
  return (
    <div>
      <Switch>
        <Route  exact path="/" component={Login} />
        <ProtectedRoute exact path="/Home" component={AdminDashboard} />
        <ProtectedRoute  exact path="/Inbox" component={Inbox} />
        <ProtectedRoute exact path="/sentmail" component={SentMail} />
        <ProtectedRoute exact path="/Starred" component={Starred} />
        <ProtectedRoute exact path="/Analytics" component={Analytics} />
        <ProtectedRoute exact path="/Forms" component={Forms} />
        <ProtectedRoute exact path="/Calendar" component={Calendar} />
        <ProtectedRoute exact path="/Drafts" component={Drafts} />
      </Switch>
    </div>
  );
}

export default App;
