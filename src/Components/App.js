import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails";
import {Container} from "react-bootstrap";
import Menu from "./Menu/Menu";
import axios from "axios";
import {connect} from "react-redux";
import {fetchData} from "../Redux/Actions/Product";


const App = props => {
  useEffect(() => {
    props.fetchData()
  }, [])
  return (
    <Router>
      <Container fluid className='px-0'>
        <Menu/>
        <Switch>
          <Route path='/' exact>
            <ProductList/>
          </Route>
          <Route path='/product/:id' render={() => <ProductDetails/>}/>
          <Route path='/news'/>
        </Switch>
      </Container>
    </Router>
  );
}

export default connect(null, {fetchData})(App)
