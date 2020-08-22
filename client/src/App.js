import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Form from './components/Form';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render() {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product/upload" exact component={Form}></Route>
          <Route path={`/product/:productId`} exact component={Product}></Route>
          <Route path={`/user/cart`} exact component={Cart}></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
