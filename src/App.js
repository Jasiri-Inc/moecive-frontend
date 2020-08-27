import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import AppNavbar from "./components/AppNavrbar";
<<<<<<< HEAD
import About from "./pages/about/about";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Books from "./pages/books/books";
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import About from "./pages/about";
import Register from "./pages/register";
import Login from "./pages/login";
import Books from "./pages/books";
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 912dddfec591dcf6738b62b8f7966f8660f27b62


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
          <Route path="/books">
            <Books />
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
