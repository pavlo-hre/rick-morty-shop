import React, {useEffect} from "react"
import {
  Navbar,
  Nav,
  Container, Badge, Button, Dropdown
} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import {logOut} from "Redux/Actions/auth"

const Menu = props => {
  const {authData, modalHide, cartData, logOut, modalOpen} = props
  useEffect(() => {
    if (authData.token) {
      modalHide()
    }
  }, [authData.token])

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='mb-5 nav-menu '>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <h2 className='navbar-brand ml-2'>
          RICK AND MORTY SHOP
        </h2>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact
                     className='btn btn-link text-white'>Catalog</NavLink>
            <NavLink to="/news"
                     className='btn btn-link text-white'>News</NavLink>
          </Nav>
        </Navbar.Collapse>

        <NavLink
          to='/cart'
          className='btn btn-link text-white cart-link mr-2'
        >
          <FontAwesomeIcon icon={faShoppingCart}/>
          {
            !!cartData
            &&
            <Badge variant='danger'>{cartData}</Badge>
          }
        </NavLink>

        {authData.token
          ?
          <>
            <Button
              className='mr-2'
              variant="outline-light">
              {authData.user}
            </Button>
            <Button
              variant={"outline-light"}
              onClick={logOut}
            >
              <FontAwesomeIcon icon={faSignOutAlt}/>
            </Button>
          </>
          :
          <Button
            variant="secondary"
            onClick={modalOpen}
          >
            Login
          </Button>
        }
      </Container>
    </Navbar>
  )
}
const mapStateToProps = state => ({
  cartData: state.product.cart.orders.length,
  authData: state.auth
})

export default connect(mapStateToProps, {logOut})(Menu)
