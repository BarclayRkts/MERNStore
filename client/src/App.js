import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Form from './components/Form';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './components/Product';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
//   toggle = () => {
//     // alert('toggleing in App.js');
//     this.setState({
//         isOpen: !this.state.isOpen
//     });
// }

  render() {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>
        {/*<AppNavbar handleClick={this.toggle}/>*/}
        {/*this.state.isOpen ? <Form handleClick={this.toggle}/> : null*/}
        {/*<Home/>*/}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product/upload" exact component={Form}></Route>
          <Route path={`/product/:productId`} exact component={Product}></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
