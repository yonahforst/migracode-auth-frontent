import './App.css';
import { useState, useEffect } from 'react'

import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App(props) {
  const history = useHistory()

  // on initial render
  useEffect(() => {

    // check if there's a JWT in localStorage
    const jwt = localStorage.getItem('jwt')
    // if there is, change the path to 'home'
    if (jwt) {
      history.push('/home')
    } else {
      history.push('/signin')
    }
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path='/signin' component={Signin}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </div>
  );
}



export default () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
