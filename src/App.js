
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import LoginForm from './login/LoginForm';
import URLSettings from './settings'
import Joke from "./joke/Joke"
import Scrape from "./joke/Scrape"



function App() {
  return (
    <div className="App">
      <h2>Suh dude</h2>
      <Router>
        <Header />
        <Switch>
          <Route exact path={URLSettings.getURL("Home")}> <Welcome /> </Route>
          <Route path={URLSettings.getURL("Login")}> <LoginForm /> </Route>
          <Route path={URLSettings.getURL("Joke")}> <Joke /> </Route>
          <Route path={URLSettings.getURL("Scrape")}> <Scrape /> </Route>
        
        </Switch>
        
      </Router>
    </div>
  );
}
const Header = () => {
  return (
    <ul className="header">
      <li><NavLink activeClassName="active" exact to={URLSettings.getURL("Home")}>Home</NavLink></li>
      <li><NavLink activeClassName="active" to={URLSettings.getURL("Login")}>Login</NavLink></li>
      <li><NavLink activeClassName="active" to={URLSettings.getURL("Joke")}>Jokes</NavLink></li>     
      <li><NavLink activeClassName="active" to={URLSettings.getURL("Scrape")}>Scrape</NavLink></li>     
    </ul>
  )
}
function Welcome() {
  return (
    <div className="d-flex justify-content-center align-items-center link">
      <a href="google.com">TODO: setup link for github</a>
    </div>
  )
}


export default App;
