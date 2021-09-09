import React from "react";
import NavBar from "./navbar";
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import DrawerContextProvider from './context/drawer.context';
import Red from '@material-ui/core/colors/red'

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

export default function AllBar() {
    return (
      <DrawerContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
    </DrawerContextProvider>
  )
}
