import React, { createContext, useContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';
import Registration from './Components/Login/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {" "}
      <p>Name: {loggedInUser.name}</p>
    <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
            <Registration></Registration>
          </Route>
            <Route path="/booking">
              <Booking/>
            </Route>
           <PrivateRoute path="/hotel">
             <Hotel/>
           </PrivateRoute>
            <Route path="/destination">
              <Destination />
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="*">
            <NotFound/>
          </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
