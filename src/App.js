import React from "react";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Home from "./pages/home/Home";
import AppNavbar from "./components/AppNavrbar";

import About from "./pages/about/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Documents from "./pages/documents/Documents";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'


const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/documents">
            <Documents />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );


};

export default App;
