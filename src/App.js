import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Reorder from "@material-ui/icons/Reorder";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import AboutPage from "./../src/Components/aboutPage";
import HomePage from "./../src/Components/homePage";
import {
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  // Card,
  // CardHeader,
  // CardContent
} from "@material-ui/core";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            DailyOn
          </Typography>
          <IconButton
            onClick={handleClick}
            color="inherit"
            style={{ marginLeft: "auto", paddingRight: "1vh" }}
          >
            <Reorder />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/home" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/aboutPage" onClick={handleClose}>
              Reset Alerts
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <div>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/aboutPage" render={() => <AboutPage />} />
        <Route path="/home" component={HomePage} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
