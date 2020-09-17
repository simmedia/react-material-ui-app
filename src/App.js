import React from "react";
// import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import { Header } from "./components/Header";
import { Button } from "./components/Buttons";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Todos from "./pages/Todo";

const useStyles = makeStyles((theme) => ({
  centerElement: {
    marginTop: "100px",
    border: "2px solid red",
    // width: "1366px",
    // padding: "20px",
  },
}));

//  Grid

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <Header lname="Simic" />
        <Container className={classes.centerElement} maxWidth="lg">
          <Grid container>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/todo">
                <Todos />
              </Route>
            </Switch>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}

export default App;
