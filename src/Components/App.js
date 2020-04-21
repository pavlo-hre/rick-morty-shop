import React, {useEffect} from 'react'
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
import {fetchData} from "Redux/Actions/product"
import Cart from "./Cart/Cart"
import MyModal from "UI/Modal/Modal"
import {autoLogin, closeAuthModal, openAuthModal} from "Redux/Actions/auth"
import AuthFormTab from "./Auth/Tabs"

const App = props => {

  useEffect(() => {
    props.fetchData()
    props.autoLogin()
  }, [])


  return (
    <Router>
      <Container fluid className='px-0'>
        <Menu
          modalOpen={props.openAuthModal}
          modalHide={props.closeAuthModal}/>
        <MyModal
          show={props.authModalShow}
          onHide={props.closeAuthModal}
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
  authModalShow: state.auth.isModalOpen
})
export default connect(mapStateToProps, {
  fetchData,
  openAuthModal,
  closeAuthModal,
  autoLogin
})(App)
