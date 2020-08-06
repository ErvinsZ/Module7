import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/pages/Home';

class App extends Component {
  render(){
    return(
      <div>
        <Home/>
      </div>
    )
  }
}



export default App;
