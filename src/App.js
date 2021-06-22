import React, { Component } from "react";
import Navbar2 from "./components/Navbar2";
import Customer from "./components/Customer"
import { Rsuittable } from "./components/TableList";
import Signin from "./components/Signin";
import {Route} from "react-router-dom";
import Home from "./components/Home"

class App extends Component {
  render() {
    return (
     
      <div className="app">
        <Navbar2/>
        <Route exact path="/" component={Home} />
        <Route exact path="/musteri" component={Customer}/>
        <Route exact path="/uyeol" component={Signin} />
        <Route exact path="/list" component={Rsuittable}/>

      
    </div>
    );
  }
}

export default App;
