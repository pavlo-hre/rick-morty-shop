import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails/ProductDetails"
import {Container} from "react-bootstrap"
import Menu from "./Menu/Menu"
import {connect} from "react-redux"
import {fetchData} from "../Redux/Actions/product"
import Cart from "./Cart/Cart"

const App = props => {
  useEffect(() => {
    props.fetchData()
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(props.cartData))
  }, [props.cartData])

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
          <Route path='/cart' component={Cart}/>
        </Switch>
      </Container>
    </Router>
  );
}
const mapStateToProps = state => ({
  cartData: state.product.cart.orders
})
export default connect(mapStateToProps, {fetchData})(App)
