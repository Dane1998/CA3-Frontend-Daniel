
import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  NavLink, 
  useLocation,
  useHistory
 } from "react-router-dom";

import Login from "./login/Login";
import LoggedIn from "./login/LoggedIn";
import LoginForm from "./login/LoginForm";
import facade from "./login/ApiFacade";
import Admin from "./components/Admin"
import Fetch from "./components/Fetch"
import User from "./components/User"
import Home from "./components/Home"
import Header from "./components/Header"


function App() {
 const [errorMsg, setErrorMsg] = useState("");
 const [loggedIn, setLoggedIn] = useState(false);
 let history = useHistory();

 const logout = () => {
   facade.logout();
   setLoggedIn(false);
 };
 
 const login = (user, pass) => {
   facade
   .login(user, pass)
   .then((res) => setLoggedIn(true))
   .catch((err) => {
     err.fullError.then((err) => {
       setErrorMsg(err.message);
     })
   })
 }

 const setLoginStatus = (status) => {
   setLoggedIn(status)
   history.push("/Home");
 };

 return (
   <Router>
  <div>
  <Header loginMsg={loggedIn ? "Logout" : "Login"} loggedIn={loggedIn} />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/page1">
      <Fetch />
    </Route>
    <Route path="/page2">
      <User />
    </Route>
    <Route path="/page3">
      <Admin />
    </Route>
    <Route path="/login">
      {!loggedIn ? (
        <LoginForm
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          login={login}
        />
      ) : (
        <div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
</div>
</Router>
);
}
 
   

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
