import React from "react";
// import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import { Header } from "./components/Header";
import { Button } from "./components/Buttons";

import Inbox from "./Inbox";

const useStyles = makeStyles((theme) => ({
  centerElement: {
    margin: "0 auto",
    width: "1366px",
  },
}));

//  Grid

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <Header lname="Simic" />
        <div
          className={classes.centerElement}
          style={{ width: 100 + "%", maxWidth: 1200 + "px" }}
        >
          <Grid className={classes.root} container spacing={0}>
            <Switch>
              <Route path="/home">
                <Inbox />
              </Route>
            </Switch>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
