import React from "react";
import NavBar from "./AppBar/navbar";
import { CssBaseline } from '@material-ui/core';
import DrawerContextProvider from './context/drawer-context';
import SideBar from "./Drawer/side-bar";


export default function AdminDashboard() {
  return (
    <DrawerContextProvider>
      <CssBaseline />
      <NavBar />
      <SideBar />
    </DrawerContextProvider>
  )
}