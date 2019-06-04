import React, { Component } from 'react'
import logo from './logo.svg';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Home from './views/home/home';
import Login from './views/login/login';


// Setup routes in app.js see line 4 for packages.
class App extends Component {
  //Ping backend to check connection.
   componentDidMount(){
    axios.get('/api/ping')
      .then((res)=>{
        console.log(res.data)
      })
   }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/" component={Login}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App