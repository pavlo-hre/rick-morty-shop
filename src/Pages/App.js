import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ProductList}/>
        <Route path='/product/:id' component={ProductDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
