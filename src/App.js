import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
const Home=()=>(
  <div>
    <h1>Home Page</h1>
  </div>
);
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav/>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </div>
      </Router>
    );
  }
}


export default App;
