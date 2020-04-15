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
import MyModal from "../UI/Modal/Modal"
import {autoLogin} from "../Redux/Actions/auth"
import AuthFormTab from "./Auth/Tabs"

const App = props => {
  const [authModalShow, setAuthModalShow] = useState(false)

  useEffect(() => {
    props.fetchData()
  }, [])

  useEffect(() => {
    props.autoLogin()
  }, [])

  return (
    <Router>
      <Container fluid className='px-0'>
        <Menu modalOpen={setAuthModalShow}/>
        <MyModal
          show={authModalShow}
          onHide={() => setAuthModalShow(false)}
          modaltitle='Log in'
        >
          <AuthFormTab/>
        </MyModal>
        <Switch>
          <Route path='/' exact>
            <ProductList/>
          </Route>
          <Route path='/product/:id' component={ProductDetails}/>
          <Route path='/news'/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </Container>
    </Router>
  );
}
const mapStateToProps = state => ({
  cartData: state.product.cart.orders,
})
export default connect(mapStateToProps, {fetchData, autoLogin})(App)
